# Collaborative Email Builder

A real-time, browser-based email collaboration tool designed for marketing professionals. This project allows multiple users to edit email templates simultaneously with live synchronization and cursor presence.

## Features

- **Real-time Collaboration**: Simultaneous editing powered by Yjs and Tiptap.
- **Peer-to-Peer Syncing**: Uses WebRTC for direct browser-to-browser communication, reducing server load.
- **Rich Text Editing**: Full-featured editor with support for bold, italics, headings, and more.
- **Live Cursor Presence**: See where other collaborators are working in real-time.
- **Email-Specific UI**: Interface tailored for building marketing emails, including subject line management and template canvas.
- **Responsive Design**: Built with Tailwind CSS for a modern, mobile-friendly experience.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Editor**: [Tiptap](https://tiptap.dev/)
- **Collaboration**: [Yjs](https://yjs.dev/) & [y-webrtc](https://github.com/yjs/y-webrtc)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development Workflow

This project follows a strict branching strategy:

- **`main`**: The stable production release branch. **Do not branch off or merge directly into `main`**.
- **`development`**: The active development branch. All new features, bug fixes, and changes should be branched off from `development` and merged back into `development`.

Once changes in `development` have been sufficiently tested, they will be merged into `main` to create a new production release.

## Project Structure

- `app/`: Contains the Next.js application routes and components.
- `app/components/CollaborativeEditor.tsx`: The core Tiptap editor component integrated with Yjs.
- `app/page.tsx`: The main application layout and email builder interface.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Tiptap Documentation](https://tiptap.dev/docs)
- [Yjs Documentation](https://docs.yjs.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
