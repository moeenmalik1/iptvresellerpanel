import { NextRequest, NextResponse } from "next/server";
import { listPosts, savePost, slugExists, type BlogPost } from "@/app/lib/blogStore";

export async function GET() {
    const posts = await listPosts();
    return NextResponse.json({ posts });
}

export async function POST(req: NextRequest) {
    const body = await req.json();

  const slug = String(body.slug || "").trim();
    const locale = String(body.locale || "en").trim();
    const title = String(body.title || "").trim();

  if (!slug || !title) {
        return NextResponse.json({ error: "Title and slug are required." }, { status: 400 });
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        return NextResponse.json(
          { error: "Slug must be lowercase letters, numbers, and hyphens only." },
          { status: 400 }
              );
  }

  if (await slugExists(locale, slug)) {
        return NextResponse.json({ error: "A post with this slug already exists for this locale." }, { status: 409 });
  }

  const now = new Date().toISOString();
    const post: BlogPost = {
          slug,
          locale,
          title,
          excerpt: String(body.excerpt || ""),
          content: String(body.content || ""),
          category: String(body.category || "Business"),
          readTime: String(body.readTime || "5 min read"),
          focusKeyword: String(body.focusKeyword || ""),
          seoTitle: String(body.seoTitle || title),
          seoDescription: String(body.seoDescription || body.excerpt || ""),
          featuredImage: body.featuredImage || null,
          status: body.status === "published" ? "published" : "draft",
          createdAt: now,
          updatedAt: now,
          faqs: Array.isArray(body.faqs) ? body.faqs : [],
    };

  await savePost(post);
    return NextResponse.json({ post }, { status: 201 });
}
