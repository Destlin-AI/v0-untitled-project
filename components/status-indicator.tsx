"use client"

import { useEffect, useState } from "react"

interface StatusIndicatorProps {
  status: "online" | "alert" | "offline"
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  const [blinking, setBlinking] = useState(false)

  useEffect(() => {
    if (status === "alert") {
      const interval = setInterval(() => {
        setBlinking((prev) => !prev)
      }, 500)

      return () => clearInterval(interval)
    } else {
      setBlinking(false)
    }
  }, [status])

  return (
    <div className="flex items-center gap-2">
      <div
        className={`w-3 h-3 rounded-full ${
          status === "online"
            ? "bg-green-500"
            : status === "alert"
              ? `bg-amber-500 ${blinking ? "animate-pulse" : ""}`
              : "bg-red-500"
        }`}
      ></div>

      <span className="text-xs uppercase font-bold tracking-wider">
        {status === "online" && <span className="text-green-400">System Online</span>}
        {status === "alert" && <span className="text-amber-400">System Alert</span>}
        {status === "offline" && <span className="text-red-400">System Offline</span>}
      </span>
    </div>
  )
}
