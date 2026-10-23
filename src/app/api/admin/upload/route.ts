import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req: NextRequest) {
    let form: FormData;
    try {
          form = await req.formData();
    } catch {
          return NextResponse.json({ error: "Expected multipart/form-data with a 'file' field." }, { status: 400 });
    }

  const file = form.get("file");

  if (!file || !(file instanceof File)) {
        return NextResponse.json({ error: "No file uploaded." }, { status: 400 });
  }

  if (!file.type.startsWith("image/")) {
        return NextResponse.json({ error: "Only image files are allowed." }, { status: 400 });
  }

  const maxBytes = 8 * 1024 * 1024;
    if (file.size > maxBytes) {
          return NextResponse.json({ error: "Image must be smaller than 8MB." }, { status: 400 });
    }

  const safeName = file.name.replace(/[^a-zA-Z0-9.\-_]/g, "-");

  try {
        const blob = await put(`blog-images/${Date.now()}-${safeName}`, file, {
                access: "public",
                addRandomSuffix: true,
        });
        return NextResponse.json({ url: blob.url });
  } catch (err) {
        return NextResponse.json(
          { error: "Upload failed. Is Vercel Blob connected to this project?", detail: String(err) },
          { status: 500 }
              );
  }
}
