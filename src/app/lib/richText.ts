// Shared rich-text renderer for IPTV reseller Guides content.
// Used by BOTH the public guide page and the admin editor's live preview,
// so what the admin sees in "Preview" is pixel-identical to what publishes.

export function formatRichText(text: string): string {
    const lines = text.split(/\r?\n/);
    let html = "";

  let inList = false;
    let listType: "ul" | "ol" | null = null;
    let inTable = false;
    let tableHeaders: string[] = [];
    let tableRows: string[][] = [];

  let inCodeBlock = false;
    let codeBlockLang = "";
    let codeBlockLines: string[] = [];

  let inAlert = false;
    let alertType = "";
    let alertLines: string[] = [];

  const flushList = () => {
        if (inList && listType) {
                html += `</${listType}>\n`;
                inList = false;
                listType = null;
        }
  };

  const flushTable = () => {
        if (inTable) {
                html += `<div style="overflow-x: auto; width: 100%; margin: 1.5rem 0 2rem; border-radius: 12px; border: 1px solid var(--border-color); background: rgba(255, 255, 255, 0.02);">\n`;
                html += `<table style="width: 100%; border-collapse: collapse; font-size: 0.95rem; text-align: left;">\n`;

          if (tableHeaders.length > 0) {
                    html += `<thead>\n<tr style="border-bottom: 2px solid var(--border-color); background: rgba(255,255,255,0.03);">\n`;
                    tableHeaders.forEach((h) => {
                                html += `<th style="padding: 1rem 1.25rem; font-weight: 700; color: var(--text-primary);">${inlineMarkdown(h)}</th>\n`;
                    });
                    html += `</tr>\n</thead>\n`;
          }

          html += `<tbody>\n`;
                tableRows.forEach((row) => {
                          html += `<tr style="border-bottom: 1px solid var(--border-color); transition: background 0.2s;">\n`;
                          row.forEach((cell) => {
                                      html += `<td style="padding: 1rem 1.25rem; color: var(--text-secondary);">${inlineMarkdown(cell)}</td>\n`;
                          });
                          html += `</tr>\n`;
                });
                html += `</tbody>\n</table>\n</div>\n`;

          inTable = false;
                tableHeaders = [];
                tableRows = [];
        }
  };

  const flushCodeBlock = () => {
        if (inCodeBlock) {
                const codeContent = codeBlockLines.join("\n");
                let color = "var(--text-secondary)";
                if (codeBlockLang === "http") color = "#38bdf8";
                else if (codeBlockLang === "json") color = "#a78bfa";
                else if (codeBlockLang === "bash" || codeBlockLang === "sh") color = "#34d399";

          html += `<pre style="background: rgba(0,0,0,0.45); border: 1px solid var(--border-color); border-radius: 12px; padding: 1.25rem; overflow-x: auto; font-family: monospace; font-size: 0.875rem; color: ${color}; margin: 1.5rem 0;">`;
                html += `<code style="font-family: inherit;">${escapeHtml(codeContent)}</code>`;
                html += `</pre>\n`;

          inCodeBlock = false;
                codeBlockLines = [];
        }
  };

  const flushAlert = () => {
        if (inAlert) {
                const alertContent = alertLines.join(" ");
                let borderCol = "var(--accent-purple)";
                let bg = "rgba(139,92,246,0.04)";
                let icon = "📝";
                let title = "Note";

          if (alertType === "TIP") {
                    borderCol = "var(--accent-cyan)";
                    bg = "rgba(6,182,212,0.04)";
                    icon = "💡";
                    title = "Tip";
          } else if (alertType === "WARNING") {
                    borderCol = "#ef4444";
                    bg = "rgba(239,68,68,0.04)";
                    icon = "⚠️";
                    title = "Warning";
          } else if (alertType === "IMPORTANT") {
                    borderCol = "var(--accent-cyan)";
                    bg = "rgba(6,182,212,0.05)";
                    icon = "⚡";
                    title = "Important";
          }

          let displayTitle = title;
                let cleanContent = alertContent;
                const boldMatch =
                          alertContent.match(/^\*\*([^*]+)\*\*:(.*)$/) || alertContent.match(/^\*\*([^*]+)\*\*(.*)$/);
                if (boldMatch) {
                          displayTitle = boldMatch[1];
                          cleanContent = boldMatch[2];
                }

          html += `<div class="glass-card" style="padding: 1.25rem 1.5rem; border-left: 4px solid ${borderCol}; border-radius: 8px; margin: 1.5rem 0; background: ${bg}">`;
                html += `<strong style="color: ${borderCol}; display: inline-flex; align-items: center; gap: 6px;">${icon} ${displayTitle}</strong>`;
                html += `<p style="margin: 0.5rem 0 0; font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6;">${inlineMarkdown(cleanContent.trim())}</p>`;
                html += `</div>\n`;

          inAlert = false;
                alertLines = [];
        }
  };

  for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

      // 1. Code blocks
      if (trimmed.startsWith("[CODE_START_HTTP]") || trimmed.startsWith("[CODE_START_JSON]") || trimmed.startsWith("```")) {
              if (inCodeBlock) {
                        flushCodeBlock();
              } else {
                        flushList();
                        flushTable();
                        flushAlert();
                        inCodeBlock = true;
                        if (trimmed.startsWith("[CODE_START_HTTP]")) codeBlockLang = "http";
                        else if (trimmed.startsWith("[CODE_START_JSON]")) codeBlockLang = "json";
                        else codeBlockLang = trimmed.slice(3).toLowerCase();
              }
              continue;
      }
        if (trimmed.startsWith("[CODE_END]") || (trimmed === "```" && inCodeBlock)) {
                flushCodeBlock();
                continue;
        }
        if (inCodeBlock) {
                codeBlockLines.push(line);
                continue;
        }

      // 2. Alerts / blockquotes
      if (trimmed.startsWith("> [!")) {
              flushList();
              flushTable();
              flushAlert();
              inAlert = true;
              const typeMatch = trimmed.match(/>\s*\[!([A-Z]+)\]/);
              alertType = typeMatch ? typeMatch[1] : "NOTE";

          const rest = trimmed.replace(/>\s*\[![A-Z]+\]/, "").trim();
              if (rest) alertLines.push(rest);
              continue;
      }
        if (inAlert && line.startsWith(">")) {
                const rest = line.substring(1).trim();
                alertLines.push(rest);
                continue;
        } else if (inAlert && !line.startsWith(">") && trimmed !== "") {
                flushAlert();
        }

      // 3. Tables
      if (trimmed.startsWith("|")) {
              flushList();
              flushAlert();

          const cells = trimmed
                .split("|")
                .map((c) => c.trim())
                .filter((c, idx, arr) => idx > 0 && idx < arr.length - 1);
              const isSeparator = cells.every((c) => c.startsWith(":") || c.endsWith(":") || c.startsWith("-") || c.includes("---"));

          if (isSeparator) {
                    continue;
          }

          if (!inTable) {
                    inTable = true;
                    tableHeaders = cells;
          } else {
                    tableRows.push(cells);
          }
              continue;
      } else if (inTable && !trimmed.startsWith("|")) {
              flushTable();
      }

      // 4. Standalone image line: ![alt](url "title")
      const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)"]+)(?:\s+"([^"]*)")?\)$/);
        if (imageMatch) {
                flushList();
                flushTable();
                flushAlert();
                const [, alt, src, caption] = imageMatch;
                html += `<figure style="margin: 1.75rem 0; border-radius: 14px; overflow: hidden; border: 1px solid var(--border-color);">`;
                html += `<img src="${src}" alt="${escapeHtml(alt)}" title="${escapeHtml(caption || alt)}" loading="lazy" style="width: 100%; height: auto; display: block;" />`;
                if (caption) {
                          html += `<figcaption style="padding: 0.65rem 1rem; font-size: 0.85rem; color: var(--text-muted); background: rgba(255,255,255,0.02); text-align: center;">${escapeHtml(caption)}</figcaption>`;
                }
                html += `</figure>\n`;
                continue;
        }

      // 5. Lists
      const bulletMatch = trimmed.match(/^[*\-+]\s+(.*)$/);
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);

      if (bulletMatch) {
              flushTable();
              flushAlert();
              if (!inList || listType !== "ul") {
                        flushList();
                        inList = true;
                        listType = "ul";
                        html += `<ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; list-style-type: disc; color: var(--text-secondary);">\n`;
              }
              html += `<li style="margin-bottom: 0.5rem; line-height: 1.6;">${inlineMarkdown(bulletMatch[1])}</li>\n`;
              continue;
      }

      if (numMatch) {
              flushTable();
              flushAlert();
              if (!inList || listType !== "ol") {
                        flushList();
                        inList = true;
                        listType = "ol";
                        html += `<ol style="margin-left: 1.5rem; margin-bottom: 1.5rem; list-style-type: decimal; color: var(--text-secondary);">\n`;
              }
              html += `<li style="margin-bottom: 0.5rem; line-height: 1.6;">${inlineMarkdown(numMatch[2])}</li>\n`;
              continue;
      }

      if (trimmed === "") {
              flushList();
              flushTable();
              flushAlert();
              continue;
      }

      // 6. Headings
      const h3Match = trimmed.match(/^###\s+(.*)$/);
        const h4Match = trimmed.match(/^####\s+(.*)$/);
        const h2Match = trimmed.match(/^##\s+(.*)$/);

      if (h3Match) {
              flushList();
              flushTable();
              flushAlert();
              html += `<h3 style="font-family: 'Outfit', sans-serif; font-size: 1.5rem; font-weight: 800; color: var(--text-primary); margin: 2rem 0 1rem;">${inlineMarkdown(h3Match[1])}</h3>\n`;
              continue;
      }
        if (h4Match) {
                flushList();
                flushTable();
                flushAlert();
                html += `<h4 style="font-family: 'Outfit', sans-serif; font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 1.75rem 0 1rem;">${inlineMarkdown(h4Match[1])}</h4>\n`;
                continue;
        }
        if (h2Match) {
                flushList();
                flushTable();
                flushAlert();
                html += `<h2 style="font-family: 'Outfit', sans-serif; font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin: 2.25rem 0 1.25rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">${inlineMarkdown(h2Match[1])}</h2>\n`;
                continue;
        }

      // Default paragraph
      flushList();
        flushTable();
        flushAlert();
        html += `<p style="margin-bottom: 1.25rem; line-height: 1.8; color: var(--text-secondary);">${inlineMarkdown(trimmed)}</p>\n`;
  }

  flushList();
    flushTable();
    flushAlert();
    flushCodeBlock();

  return html;
}

export function inlineMarkdown(text: string): string {
    let html = text;

  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong style="color: var(--text-primary); font-weight: 700;">$1</strong>');
    html = html.replace(/\*([^*]+)\*/g, '<em style="color: var(--text-secondary); font-style: italic;">$1</em>');
    html = html.replace(/`([^`]+)`/g, '<code style="background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 0.9em; color: var(--accent-cyan);">$1</code>');
    // Inline image: ![alt](url)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy" style="max-width: 100%; border-radius: 10px; margin: 0.5rem 0;" />');
    // Links: [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="animated-underline" style="color: var(--accent-cyan); text-decoration: none; font-weight: 600;">$1</a>');

  return html;
}

export function escapeHtml(text: string): string {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
}
