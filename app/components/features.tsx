export function Features() {
  return (
    <div className="text-white min-h-screen w-full flex justify-center py-16">
      <div className="grid gap-8 w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="h-96 rounded-2xl bg-neutral-800 flex items-center justify-center">
            Lightning-Fast Interface
          </div>

          <div className="h-96 rounded-2xl bg-neutral-800 flex items-center justify-center">
            AI-Powered Summaries
          </div>

          <div className="h-96 rounded-2xl bg-neutral-800 flex items-center justify-center">
            Smart Search
          </div>
        </div>
      </div>
    </div>
  );
}
