"use client"

import { useState } from "react"
import {
  Home,
  Wifi,
  Disc,
  Map,
  Settings,
  Target,
  PenToolIcon as Tool,
  Wrench,
  ChevronLeft,
  Trash2,
  ChevronRight,
} from "lucide-react"

export default function CarStereo() {
  const [activeTheme, setActiveTheme] = useState<"blue" | "red" | "green" | "default">("blue")

  const themeColors = {
    blue: "rgb(59, 130, 246)",
    red: "rgb(239, 68, 68)",
    green: "rgb(34, 197, 94)",
    default: "rgb(156, 163, 175)",
  }

  const activeColor = themeColors[activeTheme]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
      {/* Blue Theme */}
      <div className="bg-black rounded-lg overflow-hidden shadow-xl border border-gray-800">
        <div className="h-8 bg-black flex items-center justify-between px-4 border-b border-gray-800">
          <div className="text-gray-400 text-xs">21:2</div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-gray-400" />
            <div className="w-4 h-4 flex items-center">
              <div className="w-full bg-gray-700 h-1.5 rounded-full">
                <div className="bg-blue-500 h-1.5 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-blue-500">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Wifi className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Disc className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Map className="w-6 h-6 text-white" />
          </div>

          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Tool className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Wrench className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="flex justify-between items-center p-4 border-t border-gray-800">
          <div className="text-xs text-gray-400 uppercase">Vector</div>
          <div className="text-xs text-blue-500 uppercase">Car System</div>
          <div className="flex gap-4">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
            <Trash2 className="w-5 h-5 text-gray-400" />
            <ChevronRight className="w-5 h-5 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Green Theme */}
      <div className="bg-black rounded-lg overflow-hidden shadow-xl border border-gray-800">
        <div className="h-8 bg-black flex items-center justify-between px-4 border-b border-gray-800">
          <div className="text-gray-400 text-xs">21:2</div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-gray-400" />
            <div className="w-4 h-4 flex items-center">
              <div className="w-full bg-gray-700 h-1.5 rounded-full">
                <div className="bg-green-500 h-1.5 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-green-500">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Wifi className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Disc className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Map className="w-6 h-6 text-white" />
          </div>

          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Tool className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Wrench className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="flex justify-between items-center p-4 border-t border-gray-800">
          <div className="text-xs text-gray-400 uppercase">Vector</div>
          <div className="text-xs text-green-500 uppercase">Car System</div>
          <div className="flex gap-4">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
            <Trash2 className="w-5 h-5 text-green-500" />
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Red Theme */}
      <div className="bg-black rounded-lg overflow-hidden shadow-xl border border-gray-800">
        <div className="h-8 bg-black flex items-center justify-between px-4 border-b border-gray-800">
          <div className="text-gray-400 text-xs">21:2</div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-gray-400" />
            <div className="w-4 h-4 flex items-center">
              <div className="w-full bg-gray-700 h-1.5 rounded-full">
                <div className="bg-red-500 h-1.5 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Wifi className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Disc className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Map className="w-6 h-6 text-white" />
          </div>

          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Tool className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-red-500">
            <Wrench className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="flex justify-between items-center p-4 border-t border-gray-800">
          <div className="text-xs text-red-500 uppercase">Vector</div>
          <div className="text-xs text-gray-400 uppercase">Car System</div>
          <div className="flex gap-4">
            <ChevronLeft className="w-5 h-5 text-red-500" />
            <Trash2 className="w-5 h-5 text-gray-400" />
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Default Theme */}
      <div className="bg-black rounded-lg overflow-hidden shadow-xl border border-gray-800">
        <div className="h-8 bg-black flex items-center justify-between px-4 border-b border-gray-800">
          <div className="text-gray-400 text-xs">21:2</div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-gray-400" />
            <div className="w-4 h-4 flex items-center">
              <div className="w-full bg-gray-700 h-1.5 rounded-full">
                <div className="bg-gray-400 h-1.5 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 p-4">
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Wifi className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Disc className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Map className="w-6 h-6 text-white" />
          </div>

          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Target className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Settings className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Tool className="w-6 h-6 text-white" />
          </div>
          <div className="aspect-square bg-gray-900 rounded-md flex items-center justify-center border border-gray-800">
            <Wrench className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="flex justify-between items-center p-4 border-t border-gray-800">
          <div className="text-xs text-gray-400 uppercase">Vector</div>
          <div className="text-xs text-gray-400 uppercase">Car System</div>
          <div className="flex gap-4">
            <ChevronLeft className="w-5 h-5 text-gray-400" />
            <Trash2 className="w-5 h-5 text-gray-400" />
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  )
}
