"use client";

import { useEffect, useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";
import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { Bold, Italic, Heading2 } from "lucide-react";

const colors = ["#958DF1", "#F98181", "#FBBC88", "#FAF594", "#70CFF8", "#94FADB", "#B9F18D"];
const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
const getRandomName = () => `User ${Math.floor(Math.random() * 100)}`;

export default function CollaborativeEditor() {
  const [status, setStatus] = useState("Connecting...");

  const [ydoc, setYdoc] = useState<Y.Doc | null>(null);
  const [provider, setProvider] = useState<WebrtcProvider | null>(null);

  useEffect(() => {
    // Timeout pushes the initialization to the next tick, avoiding the
    // "setState inside useEffect synchronously" anti-pattern in Next.js
    const timer = setTimeout(() => {
      const doc = new Y.Doc();
      const webrtcProvider = new WebrtcProvider("email-template-room", doc, {
        signaling: [
          'wss://signaling.yjs.dev',
          'wss://y-webrtc-signaling-eu.herokuapp.com',
          'wss://y-webrtc-signaling-us.herokuapp.com'
        ]
      });

      const handleStatus = (event: { connected: boolean }) => {
        setStatus(event.connected ? "Connected" : "Disconnected");
      };

      webrtcProvider.on("status", handleStatus);

      setYdoc(doc);
      setProvider(webrtcProvider);
    }, 0);

    return () => {
      clearTimeout(timer);
      if (provider && ydoc) {
        provider.destroy();
        ydoc.destroy();
      }
    };
  }, [provider, ydoc]);

  const editor = useEditor({
    extensions: ydoc && provider ? [
      StarterKit,
      Collaboration.configure({
        document: ydoc,
      }),
      CollaborationCursor.configure({
        provider: provider,
        user: {
          name: getRandomName(),
          color: getRandomColor(),
        },
      }),
    ] : [StarterKit], // To prevent the 'schema missing its top node' error, supply StarterKit first
    content: "<p>Hello! Start collaborating on your email template here...</p>",
    immediatelyRender: false,
  });

  if (!ydoc || !provider || !editor) {
    return <div className="p-8 text-center text-gray-500">Loading collaborative editor...</div>;
  }

  return (
    <div className="flex flex-col h-full border border-gray-200 rounded-lg shadow-sm bg-white overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-2" aria-live="polite">
          <div aria-hidden="true" className={`w-2.5 h-2.5 rounded-full ${status === 'Connected' ? 'bg-green-500' : 'bg-red-500'}`}></div>
          <span className="text-sm font-medium text-gray-700">{status}</span>
        </div>
        {editor && (
          <div className="flex space-x-2">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              aria-label="Bold"
              title="Bold"
              aria-pressed={editor.isActive('bold')}
              className={`p-1.5 rounded text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${editor.isActive('bold') ? 'bg-gray-200 text-gray-900' : 'hover:bg-gray-100'}`}
            >
              <Bold size={18} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              aria-label="Italic"
              title="Italic"
              aria-pressed={editor.isActive('italic')}
              className={`p-1.5 rounded text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${editor.isActive('italic') ? 'bg-gray-200 text-gray-900' : 'hover:bg-gray-100'}`}
            >
              <Italic size={18} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              aria-label="Heading 2"
              title="Heading 2"
              aria-pressed={editor.isActive('heading', { level: 2 })}
              className={`p-1.5 rounded text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200 text-gray-900' : 'hover:bg-gray-100'}`}
            >
              <Heading2 size={18} />
            </button>
          </div>
        )}
      </div>
      <div className="p-4 flex-grow overflow-y-auto">
        <EditorContent editor={editor} className="prose max-w-none w-full min-h-[300px] outline-none [&>.ProseMirror]:outline-none" />
      </div>
    </div>
  );
}
