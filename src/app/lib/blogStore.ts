import { kv } from "@vercel/kv";

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

export async function listPosts(): Promise<BlogPost[]> {
    const members = (await kv.smembers(INDEX_KEY)) as string[] | null;
    if (!members || members.length === 0) return [];

  const posts = await Promise.all(
        members.map(async (member) => {
                const sepIndex = member.indexOf(":");
                const locale = member.slice(0, sepIndex);
                const slug = member.slice(sepIndex + 1);
                return kv.get<BlogPost>(postKey(locale, slug));
        })
      );

  return posts
      .filter((p): p is BlogPost => Boolean(p))
      .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
}

export async function getPost(locale: string, slug: string): Promise<BlogPost | null> {
    return (await kv.get<BlogPost>(postKey(locale, slug))) ?? null;
}

export async function savePost(post: BlogPost): Promise<void> {
    await kv.set(postKey(post.locale, post.slug), post);
    await kv.sadd(INDEX_KEY, indexMember(post.locale, post.slug));
}

export async function deletePost(locale: string, slug: string): Promise<void> {
    await kv.del(postKey(locale, slug));
    await kv.srem(INDEX_KEY, indexMember(locale, slug));
}

export async function getPublishedPosts(locale: string): Promise<BlogPost[]> {
    const all = await listPosts();
    return all.filter((p) => p.locale === locale && p.status === "published");
}

export async function slugExists(locale: string, slug: string): Promise<boolean> {
    const existing = await getPost(locale, slug);
    return Boolean(existing);
}
