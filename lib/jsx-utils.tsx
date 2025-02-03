export function formatText(text: string) {
  return text.split(/(\*\*.*?\*\*)/).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const boldText = part.slice(2, -2)
      return (
        <span
          key={i}
          className="font-semibold text-zinc-900 dark:text-zinc-100"
        >
          {boldText}
        </span>
      )
    }
    return part
  })
}
