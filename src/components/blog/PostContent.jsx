export default function PostContent({ blocks }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'p':
            return (
              <p key={i} className="text-base leading-relaxed text-brand-950/70">
                {block.text}
              </p>
            )
          case 'h2':
            return (
              <h2 key={i} className="pt-4 font-display text-2xl font-extrabold text-brand-950">
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="pt-2 font-display text-lg font-bold text-brand-950">
                {block.text}
              </h3>
            )
          case 'ul':
            return (
              <ul key={i} className="space-y-2.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base leading-relaxed text-brand-950/70">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i} className="space-y-2.5 pl-1">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-base leading-relaxed text-brand-950/70">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-xs font-bold text-brand-700">
                      {j + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            )
          case 'quote':
            return (
              <blockquote
                key={i}
                className="border-l-4 border-accent-500 bg-brand-50/60 py-3 pl-5 pr-4 text-base italic leading-relaxed text-brand-950/70"
              >
                {block.text}
              </blockquote>
            )
          case 'note':
            return (
              <div key={i} className="rounded-2xl border border-brand-100 bg-brand-50/50 p-5 text-sm leading-relaxed text-brand-950/70">
                <span className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-brand-700">
                  {block.label || 'Note'}
                </span>
                {block.text}
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
