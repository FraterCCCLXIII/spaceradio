import type { TableData } from '../../content/orchard-program/types'
import { toDisplayText } from '../../lib/typography'

export function DataTable({ caption, headers, rows }: TableData) {
  return (
    <div className="overflow-x-auto rounded-xl border border-charcoal-600/40">
      {caption && (
        <p className="border-b border-charcoal-600/40 bg-void-panel px-4 py-2 font-mono text-[10px] uppercase tracking-[0.14em] text-orbit">
          {toDisplayText(caption)}
        </p>
      )}
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-charcoal-600/40 bg-void-elevated">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 font-mono text-[10px] font-normal uppercase tracking-[0.12em] text-muted"
              >
                {toDisplayText(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-charcoal-700/30 last:border-0 even:bg-void-panel/40"
            >
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-charcoal-200">
                  {toDisplayText(cell)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
