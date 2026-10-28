
"use client";

import { useEffect, useRef } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "@tiptap/markdown";
import { TableKit } from "@tiptap/extension-table";
import Image from "@tiptap/extension-image";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SeoRichTextEditor({
  value,
  onChange,
}: Props) {
  const lastContent = useRef(value);

  const editor = useEditor({
    immediatelyRender: false,

    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
        },
      }),
      Markdown.configure({
        markedOptions: {
          gfm: true,
        },
      }),
      TableKit,
      Image,
    ],

    content: value,
    contentType: "markdown",

    onUpdate: ({ editor }) => {
      const markdown = editor.getMarkdown();
      lastContent.current = markdown;
      onChange(markdown);
    },
  });

  useEffect(() => {
    if (!editor || value === lastContent.current) return;

    editor.commands.setContent(value, {
      contentType: "markdown",
      emitUpdate: false,
    });

    lastContent.current = value;
  }, [editor, value]);

  if (!editor) {
    return <p>Loading rich text editor...</p>;
  }

  const addLink = () => {
    const url = window.prompt("Enter link URL:");

    if (!url) return;

    try {
      const parsed = new URL(url);

      if (!["https:", "http:"].includes(parsed.protocol)) {
        window.alert("Please enter a valid HTTP or HTTPS URL.");
        return;
      }
    } catch {
      window.alert("Invalid URL.");
      return;
    }

    editor.chain().focus().setLink({ href: url }).run();
  };

  const button = (
    label: string,
    onClick: () => void,
    active = false
  ) => (
    <button
      type="button"
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      style={{
        padding: "8px 12px",
        border: "1px solid #51436c",
        borderRadius: 8,
        background: active ? "#7055d6" : "#292338",
        color: "#ffffff",
        fontWeight: 600,
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );

  return (
    <div className="seo-rich-editor">
      <div
        style={{
          display: "flex",
          gap: 7,
          flexWrap: "wrap",
          marginBottom: 14,
        }}
      >
        {([1, 2, 3, 4] as const).map((level) =>
          <button
            key={level}
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level }).run()
            }
            style={{
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid #51436c",
              background: editor.isActive("heading", { level })
                ? "#7055d6"
                : "#292338",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            H{level}
          </button>
        )}

        {button("Bold", () =>
          editor.chain().focus().toggleBold().run(),
          editor.isActive("bold")
        )}

        {button("Italic", () =>
          editor.chain().focus().toggleItalic().run(),
          editor.isActive("italic")
        )}

        {button("Link", addLink)}

        {button("Bullet List", () =>
          editor.chain().focus().toggleBulletList().run()
        )}

        {button("Numbered List", () =>
          editor.chain().focus().toggleOrderedList().run()
        )}

        {button("Insert Table", () =>
          editor.chain().focus().insertTable({
            rows: 3,
            cols: 3,
            withHeaderRow: true,
          }).run()
        )}

        {button("Undo", () =>
          editor.chain().focus().undo().run()
        )}

        {button("Redo", () =>
          editor.chain().focus().redo().run()
        )}
      </div>

      <EditorContent editor={editor} />
    </div>
  );
}
