type Highlight = { label: string; value: string; sub: string };

export default function AtAGlance({ highlights }: { highlights: Highlight[] }) {
  return (
    <section className="bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {highlights.map((h, i) => (
            <div key={i} className="text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-primary">{h.value}</p>
              <p className="text-sm font-semibold text-gray-700 mt-1">{h.label}</p>
              <p className="text-xs text-gray-400">{h.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
