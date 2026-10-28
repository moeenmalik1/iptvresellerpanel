"use client";

import { useEffect, useRef, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "@tiptap/markdown";
import { TableKit } from "@tiptap/extension-table";
import Image from "@tiptap/extension-image";

type Props = {
  value: string; // Existing Redis content is Markdown, not HTML.
  onChange: (markdown: string) => void;
};

/** Strip unsafe pasted markup and convert a document H1 to H2 (the post title is H1). */
function cleanPastedHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  doc.querySelectorAll("script,style,iframe,object,embed,form,svg,meta,link").forEach((n) => n.remove());

  doc.body.querySelectorAll("*").forEach((element) => {
    if (element.tagName.toLowerCase() === "h1") {
      const replacement = doc.createElement("h2");
      replacement.innerHTML = element.innerHTML;
      element.replaceWith(replacement);
      element = replacement;
    }
    for (const attr of Array.from(element.attributes)) {
      const name = attr.name.toLowerCase();
      if (name.startsWith("on") || name === "style" || name === "srcdoc") {
        element.removeAttribute(attr.name);
      }
    }
    if (element.tagName === "A") {
      const href = element.getAttribute("href") || "";
      if (!/^(https?:\/\/|mailto:|\/)(?!\/)/i.test(href) && !/^https?:\/\//i.test(href)) {
        element.removeAttribute("href");
      }
      element.removeAttribute("target");
    }
    if (element.tagName === "IMG") {
      const src = element.getAttribute("src") || "";
      if (!/^https?:\/\//i.test(src) && !/^\/(?!\/)/.test(src)) element.remove();
    }
  });
  return doc.body.innerHTML;
}

function looksLikeMarkdown(text: string): boolean {
  return /(^|\n)\s{0,3}#{1,6}\s+\S|(^|\n)\s{0,3}([-*+]\s+|\d+\.\s+)|\*\*[^*\n]+\*\*|\[[^\]]+\]\(https?:\/\//m.test(text);
}

export default function SeoRichTextEditor({ value, onChange }: Props) {
  const lastEmitted = useRef(value);
  const [markdownInput, setMarkdownInput] = useState("");
  const [showMarkdownInput, setShowMarkdownInput] = useState(false);
  const [notice, setNotice] = useState("");

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: { levels: [2, 3, 4] } }),
      Markdown.configure({ markedOptions: { gfm: true } }),
      TableKit,
      Image,
    ],
    content: value,
    contentType: "markdown",
    editorProps: {
      attributes: { class: "seo-tiptap-body", "aria-label": "Blog content editor" },
      handlePaste(view, event) {
        const clipboard = event.clipboardData;
        if (!clipboard) return false;
        const richHtml = clipboard.getData("text/html");
        const plain = clipboard.getData("text/plain");
        const instance = (view as typeof view & { editor?: unknown });
        void instance; // Paste is handled via onPaste below by native Tiptap when HTML exists.
        if (richHtml) return false; // ProseMirror parses rich HTML (Word, Docs, websites).
        if (looksLikeMarkdown(plain)) {
          // Let the user choose explicit Markdown import to prevent accidental reformatting.
          return false;
        }
        return false;
      },
    },
    onUpdate: ({ editor: current }) => {
      const markdown = current.getMarkdown();
      lastEmitted.current = markdown;
      onChange(markdown);
    },
  });

  useEffect(() => {
    if (!editor || value === lastEmitted.current) return;
    editor.commands.setContent(value, { contentType: "markdown", emitUpdate: false });
    lastEmitted.current = value;
  }, [editor, value]);

  if (!editor) return <p>Loading editor…</p>;

  const addLink = () => {
    const input = window.prompt("Enter link URL (https:// or relative path /):");
    if (!input) return;
    const url = input.trim();
    if (!/^https?:\/\//i.test(url) && !/^\/(?!\/)/.test(url)) {
      setNotice("Please use a safe https:// link or a relative /path.");
      return;
    }
    if (editor.state.selection.empty) {
      const label = window.prompt("Link text:")?.trim();
      if (!label) return;
      editor.chain().focus().insertContent(`<a href="${url.replaceAll('"', '&quot;')}">${label.replaceAll('<', '&lt;').replaceAll('>', '&gt;')}</a>`, { contentType: "html" }).run();
    } else {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const importMarkdown = () => {
    if (!markdownInput.trim()) return;
    const normalized = markdownInput.replace(/^# (.+)$/gm, "## $1");
    // Insert at cursor instead of silently replacing already entered content.
    editor.chain().focus().insertContent(normalized, { contentType: "markdown" }).run();
    setMarkdownInput("");
    setShowMarkdownInput(false);
    setNotice("Markdown inserted. Check headings, tables, and preview before publishing.");
  };

  const pasteRichFromClipboard = async () => {
    try {
      if (!navigator.clipboard?.read) {
        setNotice("Clipboard API unavailable. Click in the editor and press Ctrl+V instead.");
        return;
      }
      const items = await navigator.clipboard.read();
      for (const item of items) {
        if (item.types.includes("text/html")) {
          const html = await (await item.getType("text/html")).text();
          editor.chain().focus().insertContent(cleanPastedHtml(html), { contentType: "html" }).run();
          setNotice("Rich formatting imported. Please review tables and headings.");
          return;
        }
        if (item.types.includes("text/plain")) {
          const text = await (await item.getType("text/plain")).text();
          editor.chain().focus().insertContent(
            looksLikeMarkdown(text) ? text.replace(/^# (.+)$/gm, "## $1") : text,
            { contentType: looksLikeMarkdown(text) ? "markdown" : "html" },
          ).run();
          setNotice("Clipboard text inserted. Plain text cannot restore missing formatting.");
          return;
        }
      }
      setNotice("No supported text found on clipboard.");
    } catch {
      setNotice("Browser blocked clipboard access. Click inside the editor and use Ctrl+V.");
    }
  };

  const action = (label: string, run: () => void, active = false) => (
    <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={run}
      aria-pressed={active} className={`seo-editor-action${active ? " is-active" : ""}`}>{label}</button>
  );

  return (
    <section className="seo-rich-editor">
      <div className="seo-editor-toolbar" role="toolbar" aria-label="Text formatting">
        {([2, 3, 4] as const).map((level) =>
          <button type="button" key={level} className={`seo-editor-action${editor.isActive("heading", { level }) ? " is-active" : ""}`}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => editor.chain().focus().toggleHeading({ level }).run()}>
            H{level}
          </button>
        )}
        {action("Bold", () => editor.chain().focus().toggleBold().run(), editor.isActive("bold"))}
        {action("Italic", () => editor.chain().focus().toggleItalic().run(), editor.isActive("italic"))}
        {action("Link", addLink, editor.isActive("link"))}
        {action("Bullets", () => editor.chain().focus().toggleBulletList().run(), editor.isActive("bulletList"))}
        {action("Numbered", () => editor.chain().focus().toggleOrderedList().run(), editor.isActive("orderedList"))}
        {action("Table", () => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run())}
        {action("Undo", () => editor.chain().focus().undo().run())}
        {action("Redo", () => editor.chain().focus().redo().run())}
        {action("Paste rich text", () => { void pasteRichFromClipboard(); })}
        {action("Paste Markdown", () => setShowMarkdownInput((old) => !old))}
      </div>
      {showMarkdownInput && (
        <div className="seo-markdown-import">
          <label htmlFor="seo-markdown-paste">Paste Markdown source (e.g., ## Heading and **bold**)</label>
          <textarea id="seo-markdown-paste" value={markdownInput} onChange={(e) => setMarkdownInput(e.target.value)} rows={6} />
          <button type="button" className="seo-editor-action is-active" onClick={importMarkdown}>Insert at cursor</button>
        </div>
      )}
      <EditorContent editor={editor} />
      {notice && <p role="status" className="seo-editor-notice">{notice}</p>}
      <p className="seo-editor-hint">Paste from Word, Google Docs or websites with Ctrl+V. Use Paste Markdown for Markdown text. Article title is the only H1; use H2–H4 inside the article.</p>
    </section>
  );
}
