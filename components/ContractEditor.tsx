"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function ContractEditor({ content, setContent }: any) {

  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    onUpdate({ editor }) {
      setContent(editor.getText());
    }
  });

  return (
    <div className="border border-gray-800 rounded p-4 bg-gray-900 text-white">
      <EditorContent editor={editor} />
    </div>
  );
}
