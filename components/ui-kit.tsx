"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Plus,
  Minus,
  Check,
  X,
  Star,
  Heart,
  Menu,
  Grid,
  User,
  MapPin,
  AlertCircle,
} from "lucide-react"

export default function UIKit() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())
  const [sliderValue, setSliderValue] = useState(50)
  const [toggleValue, setToggleValue] = useState(true)
  const [starRating, setStarRating] = useState(3)
  const [counterValue, setCounterValue] = useState(22)

  const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY"]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <h1 className="text-6xl font-bold text-green-500">UI</h1>
        <h2 className="text-2xl text-green-500">Elements</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Buttons Section */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <Button size="sm" className="bg-green-700 hover:bg-green-600 text-white">
              SMALL BUTTON
            </Button>
            <Button size="sm" className="bg-green-600 hover:bg-green-500 text-white">
              SMALL HOVER
            </Button>
            <Button size="sm" className="bg-green-700 ring-2 ring-green-400 text-white">
              SMALL FOCUS
            </Button>
            <Button size="sm" className="bg-green-500 text-white">
              SMALL ACTIVE
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button className="bg-green-700 hover:bg-green-600 text-white">MEDIUM BUTTON</Button>
            <Button className="bg-green-600 hover:bg-green-500 text-white">MEDIUM HOVER</Button>
            <Button className="bg-green-700 ring-2 ring-green-400 text-white">MEDIUM FOCUS</Button>
            <Button className="bg-green-500 text-white">MEDIUM ACTIVE</Button>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button size="lg" className="bg-green-700 hover:bg-green-600 text-white">
              LARGE BUTTON
            </Button>
            <Button size="lg" className="bg-green-600 hover:bg-green-500 text-white">
              LARGE HOVER
            </Button>
            <Button size="lg" className="bg-green-700 ring-2 ring-green-400 text-white">
              LARGE FOCUS
            </Button>
            <Button size="lg" className="bg-green-500 text-white">
              LARGE ACTIVE
            </Button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex flex-wrap gap-4">
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
            <div key={value} className="relative w-12 h-12">
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-green-500">
                {value}
              </div>
              <svg className="w-12 h-12 transform -rotate-90">
                <circle cx="24" cy="24" r="20" fill="transparent" stroke="#1a1a1a" strokeWidth="4" />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="transparent"
                  stroke="#4ade80"
                  strokeWidth="4"
                  strokeDasharray={`${value * 1.256} 126`}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Step Indicators */}
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3, 4, 5].map((step) => (
            <div
              key={step}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step <= 3 ? "bg-green-500" : "bg-gray-700"
              }`}
            >
              {step <= 2 ? <Check className="w-5 h-5 text-black" /> : <span className="text-sm font-bold">{step}</span>}
            </div>
          ))}
        </div>

        {/* Calendar */}
        <div className="bg-black border border-green-800 rounded-md p-4">
          <div className="grid grid-cols-7 text-center text-xs mb-2">
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-xs">
            {Array.from({ length: 35 }, (_, i) => {
              const day = i + 1
              const isCurrentMonth = day <= 31
              const isSelected = day === 2

              return (
                <div
                  key={i}
                  className={`w-6 h-6 flex items-center justify-center rounded-sm ${
                    isSelected ? "bg-green-500 text-black" : isCurrentMonth ? "text-white" : "text-gray-600"
                  }`}
                >
                  {isCurrentMonth ? day : day - 31}
                </div>
              )
            })}
          </div>

          <div className="mt-4 space-y-1">
            {months.slice(0, 7).map((month, idx) => (
              <div key={month} className={`text-xs px-2 py-1 ${idx === 0 ? "bg-green-500 text-black" : ""}`}>
                {month}
              </div>
            ))}
          </div>
        </div>

        {/* Slider */}
        <div className="bg-black border border-green-800 rounded-md p-4">
          <h3 className="text-center text-xl mb-4">SLIDER</h3>
          <div className="space-y-4">
            <div className="relative h-1 bg-green-900 rounded-full">
              <div className="absolute h-1 bg-green-500 rounded-full" style={{ width: `${sliderValue}%` }}></div>
              <div
                className="absolute w-4 h-4 bg-green-500 rounded-full -mt-1.5"
                style={{ left: `${sliderValue}%`, transform: "translateX(-50%)" }}
              ></div>
            </div>

            <div className="flex justify-between">
              <ChevronLeft className="text-green-500" />
              <p className="text-xs text-green-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <ChevronRight className="text-green-500" />
            </div>

            <p className="text-xs text-green-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Toggles and Checkboxes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className={`w-10 h-5 rounded-full p-1 ${toggleValue ? "bg-green-500" : "bg-gray-700"}`}>
              <div
                className={`w-3 h-3 rounded-full bg-black transform transition-transform ${
                  toggleValue ? "translate-x-5" : "translate-x-0"
                }`}
              ></div>
            </div>
            <span className="text-xs">IPSUM DOLOR</span>
          </div>

          {[1, 2, 3, 4].map((idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div
                className={`w-5 h-5 rounded-full border ${idx === 1 ? "border-green-500 bg-green-500" : "border-gray-600"}`}
              >
                {idx === 1 && <Check className="w-4 h-4 text-black" />}
              </div>
              <span className="text-xs">IPSUM DOLOR</span>
            </div>
          ))}
        </div>

        {/* Star Ratings */}
        <div className="space-y-4">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < rating ? "text-green-500 fill-green-500" : "text-gray-700"}`} />
              ))}
            </div>
          ))}
        </div>

        {/* Dropdown */}
        <div className="space-y-2">
          <div className="bg-gray-800 p-2 flex justify-between items-center">
            <span className="text-xs">DROPDOWN</span>
            <ChevronDown className="w-4 h-4" />
          </div>
          <div className="bg-gray-800 p-2">
            <span className="text-xs">DROPDOWN</span>
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" className="bg-green-700 text-white">
            <Minus className="w-4 h-4" />
          </Button>
          <div className="bg-gray-800 px-4 py-2">
            <span>{counterValue}</span>
          </div>
          <Button size="sm" variant="outline" className="bg-green-700 text-white">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <div className="flex gap-4">
            <a href="#" className="text-green-500 underline text-sm">
              HYPERLINK
            </a>
            <a href="#" className="text-green-700 underline text-sm">
              HYPERLINK
            </a>
          </div>
          <div className="flex gap-4">
            <span className="text-green-500 text-sm">PSEUDO-LINK</span>
            <span className="text-green-700 text-sm">PSEUDO-LINK</span>
          </div>
          <div className="flex gap-4 mt-4">
            <span className="text-green-500 text-sm">ACTIVE</span>
            <span className="text-gray-700 text-sm">INACTIVE</span>
            <span className="text-gray-700 text-sm">INACTIVE</span>
          </div>
        </div>

        {/* Input Fields */}
        <div className="space-y-2">
          <Input className="bg-gray-800 border-gray-700 text-white" placeholder="INPUT" />
          <Input className="bg-gray-800 border-green-500 text-white" placeholder="INPUT HOVER" />
          <div className="relative">
            <Input className="bg-gray-800 border-red-500 text-white pr-10" placeholder="ERROR" />
            <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 w-5 h-5" />
          </div>
          <div className="relative">
            <Input className="bg-gray-800 border-green-500 text-white pr-10" placeholder="INPUT" />
            <Check className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 w-5 h-5" />
          </div>
          <div className="flex gap-2 mt-4">
            <Input className="bg-gray-800 border-gray-700 text-white flex-grow" placeholder="INPUT" />
            <Button size="lg" className="bg-green-700 text-white">
              LARGE BUTTON
            </Button>
          </div>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-5 gap-2">
          {[Menu, ChevronLeft, ChevronRight, Check, X, Heart, Star, User, MapPin, Grid].map((Icon, idx) => (
            <div key={idx} className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded-sm">
              <Icon className="w-4 h-4 text-green-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
