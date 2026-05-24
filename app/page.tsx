import CollaborativeEditor from "./components/CollaborativeEditor";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900 font-sans">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center font-bold rounded-md">
            C
          </div>
          <h1 className="text-xl font-semibold">Collaborative Email Builder</h1>
        </div>
        <div className="flex items-center space-x-4 text-sm font-medium">
          <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
            Preview
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm">
            Export HTML
          </button>
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-sm"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-sm"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </header>

      <main className="flex-1 flex w-full max-w-6xl mx-auto p-6 gap-6">
        <aside className="w-64 bg-white border border-gray-200 rounded-lg p-4 shadow-sm hidden md:block">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Blocks
          </h2>
          <div className="space-y-2">
            {["Text", "Image", "Button", "Divider", "Spacer", "Social"].map((block) => (
              <div
                key={block}
                className="p-3 border border-gray-100 bg-gray-50 rounded cursor-grab hover:bg-gray-100 hover:border-gray-300 transition-all text-sm font-medium flex items-center"
              >
                <div className="w-4 h-4 bg-gray-300 rounded-sm mr-3"></div>
                {block}
              </div>
            ))}
          </div>
        </aside>

        <section className="flex-1 flex flex-col">
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Email Subject Line
            </label>
            <input
              type="text"
              id="subject"
              placeholder="e.g., Exciting news from our team!"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              defaultValue="Your New Collaborative Marketing Campaign"
            />
          </div>

          <div className="flex-1 bg-white border border-gray-200 shadow-sm rounded-lg flex flex-col min-h-[500px]">
            <div className="bg-gray-100 border-b border-gray-200 p-2 text-center text-xs text-gray-500 font-medium tracking-wide">
              TEMPLATE CANVAS
            </div>
            <div className="flex-1 p-6 lg:p-10 bg-gray-50 flex justify-center overflow-y-auto">
              <div className="w-full max-w-[600px] min-h-full bg-white shadow-md">
                <CollaborativeEditor />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
