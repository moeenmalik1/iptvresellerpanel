import { NextRequest, NextResponse } from "next/server";
import { getPost, savePost, deletePost, type BlogPost } from "@/app/lib/blogStore";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const locale = req.nextUrl.searchParams.get("locale") || "en";
    const post = await getPost(locale, slug);
    if (!post) {
          return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }
    return NextResponse.json({ post });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const body = await req.json();
    const locale = String(body.locale || "en");

  const existing = await getPost(locale, slug);
    if (!existing) {
          return NextResponse.json({ error: "Post not found." }, { status: 404 });
    }

  const now = new Date().toISOString();
    const post: BlogPost = {
          slug,
          locale,
          title: String(body.title || existing.title),
          excerpt: String(body.excerpt ?? existing.excerpt),
          content: String(body.content ?? existing.content),
          category: String(body.category || existing.category),
          readTime: String(body.readTime || existing.readTime),
          focusKeyword: String(body.focusKeyword ?? existing.focusKeyword),
          seoTitle: String(body.seoTitle || body.title || existing.seoTitle),
          seoDescription: String(body.seoDescription ?? existing.seoDescription),
          featuredImage: body.featuredImage ?? existing.featuredImage,
          status: body.status === "published" ? "published" : "draft",
          createdAt: existing.createdAt,
          updatedAt: now,
          faqs: Array.isArray(body.faqs) ? body.faqs : existing.faqs,
    };

  await savePost(post);
    return NextResponse.json({ post });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const locale = req.nextUrl.searchParams.get("locale") || "en";
    await deletePost(locale, slug);
    return NextResponse.json({ ok: true });
}
