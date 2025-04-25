"use client"

import { useEffect, useRef } from "react"

interface TerminalOutputProps {
  lines: string[]
}

export function TerminalOutput({ lines }: TerminalOutputProps) {
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [lines])

  return (
    <div
      ref={terminalRef}
      className="h-full overflow-auto font-mono text-xs bg-black/80 border border-green-500/20 rounded p-2 terminal-scrollbar"
    >
      {lines.map((line, i) => (
        <div key={i} className="mb-1">
          <span
            className={
              line.includes("WARNING") || line.includes("ERROR")
                ? "text-red-400"
                : line.includes("SYSTEM ONLINE") || line.includes("COMPLETE") || line.includes("STABILIZED")
                  ? "text-cyan-400"
                  : "text-green-400"
            }
          >
            {line}
          </span>
        </div>
      ))}
    </div>
  )
}
