"use client"

import { useState } from "react"
import {
  ArrowLeft,
  User,
  Settings,
  Dumbbell,
  Heart,
  TurtleIcon as TennisBall,
  Bike,
  FishIcon as Swimming,
  MonitorIcon as Running,
  Footprints,
} from "lucide-react"

export default function FitnessApp() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="flex gap-4 max-w-5xl w-full mx-auto">
      {/* Weight Screen */}
      <div className="bg-gray-900 rounded-3xl p-5 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex-1">
        <div className="flex justify-between items-center mb-6">
          <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <ArrowLeft size={18} />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <User size={18} />
          </button>
        </div>

        <div className="bg-gray-800 rounded-xl p-4 mb-6">
          <div className="flex justify-center mb-2">
            <div className="text-5xl font-bold text-teal-400">45</div>
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>30</span>
            <span>35</span>
            <span>40</span>
            <span className="text-teal-400">45</span>
            <span>50</span>
            <span>55</span>
            <span>60</span>
          </div>

          <div className="h-2 bg-gray-700 rounded-full mb-1 relative">
            <div className="absolute h-2 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full w-[60%]"></div>
          </div>

          <div className="flex justify-center">
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-teal-400"></div>
          </div>

          <div className="text-center mt-1">
            <span className="text-xs text-gray-400">kg</span>
          </div>
        </div>

        <div className="flex mb-6">
          <div className="flex-1">
            <div className="text-xs text-white mb-1">Lorem ipsum</div>
            <div className="text-gray-500 text-xs">400</div>
            <div className="text-gray-500 text-xs">300</div>
            <div className="text-gray-500 text-xs">200</div>
            <div className="text-gray-500 text-xs">100</div>
            <div className="text-gray-500 text-xs">0</div>
          </div>
          <div className="flex-[5]">
            <div className="flex justify-end">
              <div className="text-xs text-gray-500">dolor</div>
            </div>
            <div className="h-[100px] bg-gray-800 rounded-xl p-2 relative">
              <svg className="w-full h-full" viewBox="0 0 100 50">
                <path
                  d="M0,50 L10,45 L20,48 L30,40 L40,35 L50,30 L60,25 L70,20 L80,15 L90,10 L100,5"
                  fill="none"
                  stroke="#2dd4bf"
                  strokeWidth="2"
                />
                <path
                  d="M0,50 L100,50 L100,5 L90,10 L80,15 L70,20 L60,25 L50,30 L40,35 L30,40 L20,48 L10,45 L0,50"
                  fill="url(#gradient)"
                  opacity="0.3"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2dd4bf" />
                    <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <button className="w-full bg-teal-400 text-gray-900 font-medium py-3 rounded-xl">Dolor</button>
        </div>

        <div className="flex justify-between">
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <Settings size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <Dumbbell size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* Activity Screen */}
      <div className="bg-gray-900 rounded-3xl p-5 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex-1">
        <div className="flex justify-between items-center mb-6">
          <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <ArrowLeft size={18} />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <User size={18} />
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          <button
            className={`flex-1 py-2 rounded-lg text-sm ${activeTab === 0 ? "bg-teal-400 text-gray-900" : "bg-gray-800 text-gray-400"}`}
            onClick={() => setActiveTab(0)}
          >
            Lorem
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-sm ${activeTab === 1 ? "bg-teal-400 text-gray-900" : "bg-gray-800 text-gray-400"}`}
            onClick={() => setActiveTab(1)}
          >
            Ipsum
          </button>
          <button
            className={`flex-1 py-2 rounded-lg text-sm ${activeTab === 2 ? "bg-teal-400 text-gray-900" : "bg-gray-800 text-gray-400"}`}
            onClick={() => setActiveTab(2)}
          >
            Dolor
          </button>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-2">
            <span>S</span>
            <span>M</span>
            <span>T</span>
            <span>W</span>
            <span>T</span>
            <span>F</span>
            <span>S</span>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div key={day} className="h-24">
                <div className="bg-gray-800 h-full rounded-lg relative">
                  <div
                    className="absolute bottom-0 w-full bg-teal-400 rounded-b-lg"
                    style={{ height: `${Math.random() * 70 + 10}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-800 rounded-xl p-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-400">Lorem</div>
                <div className="flex items-baseline">
                  <span className="text-white font-medium">67 889</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-teal-400 text-sm">+30%</span>
                <Heart className="text-teal-400 w-4 h-4 fill-teal-400" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-400">Lorem</div>
                <div className="flex items-baseline">
                  <span className="text-white font-medium">67 889</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-sm">11 km</span>
                <span className="text-white text-sm">234 kcal</span>
                <Heart className="text-teal-400 w-4 h-4 fill-teal-400" />
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-gray-400">Lorem</div>
                <div className="flex items-baseline">
                  <span className="text-white font-medium">54 889</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-sm">15 km</span>
                <span className="text-white text-sm">305 kcal</span>
                <Heart className="text-teal-400 w-4 h-4 fill-teal-400" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <Settings size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <Dumbbell size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* Sports Screen */}
      <div className="bg-gray-900 rounded-3xl p-5 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex-1">
        <div className="flex justify-between items-center mb-6">
          <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <ArrowLeft size={18} />
          </button>
          <button className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <User size={18} />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-teal-400 mb-2">
              <TennisBall size={24} />
            </div>
            <div className="text-xs text-gray-400">Lorem ipsum</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-teal-400 mb-2">
              <Bike size={24} />
            </div>
            <div className="text-xs text-gray-400">Lorem ipsum</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-teal-400 mb-2">
              <Swimming size={24} />
            </div>
            <div className="text-xs text-gray-400">Lorem ipsum</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-teal-400 mb-2">
              <Dumbbell size={24} />
            </div>
            <div className="text-xs text-gray-400">Lorem ipsum</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-teal-400 mb-2">
              <Running size={24} />
            </div>
            <div className="text-xs text-gray-400">Lorem ipsum</div>
          </div>

          <div className="bg-gray-800 rounded-xl p-4 flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center text-teal-400 mb-2">
              <Footprints size={24} />
            </div>
            <div className="text-xs text-gray-400">Lorem ipsum</div>
          </div>
        </div>

        <div className="flex justify-between">
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <Settings size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <Dumbbell size={18} />
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-teal-400">
            <Heart size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
