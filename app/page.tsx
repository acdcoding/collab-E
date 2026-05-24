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
