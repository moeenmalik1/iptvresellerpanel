import { createClient, type RedisClientType } from "redis";

export interface BlogPostImage {
      url: string;
      alt: string;
      title: string;
      caption: string;
      description: string;
}

export interface BlogFaq {
      q: string;
      a: string;
}

export interface BlogPost {
      slug: string;
      locale: string;
      title: string;
      excerpt: string;
      content: string;
      category: string;
      readTime: string;
      focusKeyword: string;
      seoTitle: string;
      seoDescription: string;
      featuredImage: BlogPostImage | null;
      status: "draft" | "published";
      createdAt: string;
      updatedAt: string;
      faqs: BlogFaq[];
}

const INDEX_KEY = "admin_blog_index";

const indexMember = (locale: string, slug: string) => `${locale}:${slug}`;
const postKey = (locale: string, slug: string) => `admin_blog_post:${locale}:${slug}`;

// Reuse a single Redis connection across invocations in the same serverless
// instance instead of reconnecting on every request.
let clientPromise: Promise<RedisClientType> | null = null;

function getClient(): Promise<RedisClientType> {
      if (!clientPromise) {
              const url = process.env.KV_REDIS_URL || process.env.REDIS_URL;
              if (!url) {
                        throw new Error(
                                    "KV_REDIS_URL is not set. Connect the Redis database to this project in Vercel (Storage tab)."
                                  );
              }
              const client: RedisClientType = createClient({ url });
              client.on("error", (err) => console.error("Redis client error:", err));
              clientPromise = client.connect().then(() => client);
      }
      return clientPromise;
}

export async function listPosts(): Promise<BlogPost[]> {
      const client = await getClient();
      const members = await client.sMembers(INDEX_KEY);
      if (!members || members.length === 0) return [];
    
      const posts = await Promise.all(
              members.map(async (member) => {
                        const sepIndex = member.indexOf(":");
                        const locale = member.slice(0, sepIndex);
                        const slug = member.slice(sepIndex + 1);
                        const raw = await client.get(postKey(locale, slug));
                        return raw ? (JSON.parse(raw) as BlogPost) : null;
              })
            );
    
      return posts
              .filter((p): p is BlogPost => Boolean(p))
              .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}

export async function getPost(locale: string, slug: string): Promise<BlogPost | null> {
      const client = await getClient();
      const raw = await client.get(postKey(locale, slug));
      return raw ? (JSON.parse(raw) as BlogPost) : null;
}

export async function savePost(post: BlogPost): Promise<void> {
      const client = await getClient();
      await client.set(postKey(post.locale, post.slug), JSON.stringify(post));
      await client.sAdd(INDEX_KEY, indexMember(post.locale, post.slug));
}

export async function deletePost(locale: string, slug: string): Promise<void> {
      const client = await getClient();
      await client.del(postKey(locale, slug));
      await client.sRem(INDEX_KEY, indexMember(locale, slug));
}

export async function getPublishedPosts(locale: string): Promise<BlogPost[]> {
      const all = await listPosts();
      return all.filter((p) => p.locale === locale && p.status === "published");
}

export async function slugExists(locale: string, slug: string): Promise<boolean> {
      const existing = await getPost(locale, slug);
      return Boolean(existing);
}
