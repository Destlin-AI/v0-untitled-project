export default function FuturisticHUD() {
  return (
    <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Column - Info Panels */}
      <div className="space-y-6">
        {/* Panel 1 */}
        <div className="relative">
          <div className="border-l-2 border-t-2 border-cyan-400 w-8 h-8 absolute -top-1 -left-1"></div>
          <div className="border-r-2 border-t-2 border-cyan-400 w-8 h-8 absolute -top-1 -right-1"></div>
          <div className="bg-cyan-900/20 border border-cyan-800 p-4 pt-6">
            <div className="text-cyan-400 text-sm font-mono uppercase mb-2">Lorem ipsum dolor</div>
            <div className="space-y-2">
              <div className="h-2 bg-cyan-400/30 w-full"></div>
              <div className="h-2 bg-cyan-400/30 w-full"></div>
              <div className="h-2 bg-cyan-400/30 w-full"></div>
            </div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="absolute -bottom-1 left-3 w-1 h-4 border-l border-b border-cyan-400"></div>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="relative">
          <div className="bg-cyan-900/20 border border-cyan-800 p-4">
            <div className="text-cyan-400 text-sm font-mono uppercase mb-2">Lorem ipsum dolor</div>
            <div className="space-y-2">
              <div className="h-2 bg-cyan-400/30 w-full"></div>
              <div className="h-2 bg-cyan-400/30 w-full"></div>
            </div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="absolute -bottom-1 left-3 w-1 h-4 border-l border-b border-cyan-400"></div>
          </div>
          <div className="border-r-2 border-b-2 border-cyan-400 w-8 h-8 absolute -bottom-1 -right-1"></div>
        </div>

        {/* Panel 3 */}
        <div className="relative">
          <div className="border-l-2 border-t-2 border-cyan-400 w-8 h-8 absolute -top-1 -left-1"></div>
          <div className="bg-cyan-900/20 border border-cyan-800 p-4">
            <div className="text-cyan-400 text-sm font-mono uppercase mb-2">Lorem ipsum dolor</div>
            <div className="space-y-2">
              <div className="h-2 bg-cyan-400/30 w-full"></div>
              <div className="h-2 bg-cyan-400/30 w-full"></div>
              <div className="h-2 bg-cyan-400/30 w-full"></div>
            </div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="absolute -bottom-1 left-3 w-1 h-4 border-l border-b border-cyan-400"></div>
          </div>
        </div>
      </div>

      {/* Middle Column - More Panels */}
      <div className="space-y-6">
        {/* Panel 4 */}
        <div className="relative">
          <div className="border-l-2 border-t-2 border-cyan-400 w-8 h-8 absolute -top-1 -left-1"></div>
          <div className="bg-cyan-900/20 border border-cyan-800 p-4">
            <div className="text-cyan-400 text-sm font-mono uppercase mb-2">Lorem ipsum dolor</div>
            <div className="space-y-2">
              <div className="h-2 bg-cyan-400/30 w-full"></div>
              <div className="h-2 bg-cyan-400/30 w-full"></div>
            </div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="absolute -bottom-1 left-3 w-1 h-4 border-l border-b border-cyan-400"></div>
          </div>
        </div>

        {/* Panel 5 */}
        <div className="relative">
          <div className="bg-cyan-900/20 border border-cyan-800 p-4">
            <div className="text-cyan-400 text-sm font-mono uppercase mb-2">Lorem ipsum dolor</div>
            <div className="space-y-2">
              <div className="h-2 bg-cyan-400/30 w-full"></div>
              <div className="h-2 bg-cyan-400/30 w-full"></div>
              <div className="h-2 bg-cyan-400/30 w-full"></div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="absolute -bottom-1 right-3 w-1 h-4 border-r border-b border-cyan-400"></div>
          </div>
        </div>

        {/* Panel 6 */}
        <div className="relative">
          <div className="border-l-2 border-t-2 border-cyan-400 w-8 h-8 absolute -top-1 -left-1"></div>
          <div className="border-r-2 border-t-2 border-cyan-400 w-8 h-8 absolute -top-1 -right-1"></div>
          <div className="bg-cyan-900/20 border border-cyan-800 p-4">
            <div className="text-cyan-400 text-sm font-mono uppercase mb-2">Lorem ipsum dolor</div>
            <div className="space-y-2">
              <div className="h-2 bg-cyan-400/30 w-full"></div>
              <div className="h-2 bg-cyan-400/30 w-full"></div>
            </div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="absolute -bottom-1 left-3 w-1 h-4 border-l border-b border-cyan-400"></div>
          </div>
        </div>
      </div>

      {/* Right Column - Circular Elements */}
      <div>
        <div className="grid grid-cols-3 gap-4">
          {/* Circular Element 1 */}
          <div className="relative">
            <div className="w-full aspect-square border border-cyan-800 rounded-full flex items-center justify-center">
              <div className="w-[85%] h-[85%] border border-cyan-400 rounded-full"></div>
              <div className="w-[70%] h-[70%] border border-cyan-400 rounded-full absolute"></div>
              <div className="w-[55%] h-[55%] border border-cyan-400 rounded-full absolute"></div>
              <div className="w-[40%] h-[40%] border border-cyan-400 rounded-full absolute"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-cyan-400"></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-cyan-400"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-1 bg-cyan-400"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-1 bg-cyan-400"></div>
            </div>
          </div>

          {/* Circular Element 2 */}
          <div className="relative">
            <div className="w-full aspect-square border border-cyan-800 rounded-full flex items-center justify-center">
              <div className="w-[85%] h-[85%] border border-cyan-400 rounded-full"></div>
              <div className="w-[60%] h-[60%] border border-cyan-400 rounded-full absolute"></div>
              <div className="w-[40%] h-[40%] border-4 border-cyan-400 rounded-full absolute"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-cyan-400 clip-triangle"></div>
              </div>
            </div>
          </div>

          {/* Circular Element 3 */}
          <div className="relative">
            <div className="w-full aspect-square border border-cyan-800 rounded-full flex items-center justify-center">
              <div className="w-[85%] h-[85%] border border-cyan-400 rounded-full"></div>
              <div className="w-[70%] h-[70%] border border-cyan-400 rounded-full absolute"></div>
              <div className="absolute inset-0">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-3 bg-cyan-400"
                    style={{
                      transform: `rotate(${i * 30}deg) translateY(-45%)`,
                      transformOrigin: "center calc(100% + 45px)",
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Circular Element 4 */}
          <div className="relative">
            <div className="w-full aspect-square border border-cyan-800 rounded-full flex items-center justify-center">
              <div className="w-[85%] h-[85%] border border-cyan-400 rounded-full"></div>
              <div className="w-[60%] h-[60%] border border-cyan-400 rounded-full absolute"></div>
              <div className="absolute inset-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="absolute w-full h-full" style={{ transform: `rotate(${i * 45}deg)` }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-cyan-400"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Circular Element 5 */}
          <div className="relative">
            <div className="w-full aspect-square border border-cyan-800 rounded-full flex items-center justify-center">
              <div className="w-[85%] h-[85%] border border-cyan-400 rounded-full"></div>
              <div className="w-[60%] h-[60%] border border-cyan-400 rounded-full absolute"></div>
              <div className="w-[40%] h-[40%] bg-cyan-400/20 rounded-full absolute"></div>
              <div className="absolute inset-0">
                <div className="absolute top-[25%] left-[25%] w-[50%] h-[50%] rounded-full border-2 border-cyan-400"></div>
              </div>
            </div>
          </div>

          {/* Circular Element 6 */}
          <div className="relative">
            <div className="w-full aspect-square border border-cyan-800 rounded-full flex items-center justify-center">
              <div className="w-[85%] h-[85%] border border-cyan-400 rounded-full"></div>
              <div className="w-[70%] h-[70%] border border-cyan-400 rounded-full absolute"></div>
              <div className="w-[55%] h-[55%] border border-cyan-400 rounded-full absolute"></div>
              <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] rounded-full bg-cyan-400/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Bars */}
        <div className="mt-8 space-y-6">
          {/* Horizontal Bars */}
          <div className="space-y-4">
            <div className="relative h-4 bg-cyan-900/20 border border-cyan-800">
              <div className="absolute inset-y-0 left-0 bg-cyan-400/50 w-3/4"></div>
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>

            <div className="relative h-4 bg-cyan-900/20 border border-cyan-800">
              <div className="absolute inset-y-0 left-0 bg-cyan-400/50 w-2/3"></div>
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>

            <div className="relative h-4 bg-cyan-900/20 border border-cyan-800">
              <div className="absolute inset-y-0 left-0 bg-cyan-400/50 w-1/2"></div>
              <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
            </div>
          </div>

          {/* Arrow Bars */}
          <div className="space-y-4">
            <div className="relative h-6 flex items-center">
              <div className="h-2 bg-cyan-400/50 w-full"></div>
              <div className="absolute right-0 top-0 h-0 w-0 border-t-[12px] border-t-transparent border-l-[16px] border-l-cyan-400/50 border-b-[12px] border-b-transparent"></div>
            </div>

            <div className="relative h-6 flex items-center">
              <div className="h-2 bg-cyan-400/50 w-full"></div>
              <div className="absolute right-0 top-0 h-0 w-0 border-t-[12px] border-t-transparent border-l-[16px] border-l-cyan-400/50 border-b-[12px] border-b-transparent"></div>
            </div>

            <div className="relative h-6 flex items-center">
              <div className="h-2 bg-cyan-400/50 w-full"></div>
              <div className="absolute right-0 top-0 h-0 w-0 border-t-[12px] border-t-transparent border-l-[16px] border-l-cyan-400/50 border-b-[12px] border-b-transparent"></div>
            </div>
          </div>

          {/* Dot Bars */}
          <div className="relative h-6 flex items-center">
            <div className="h-2 bg-cyan-900/20 w-full border border-cyan-800"></div>
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${i < 7 ? "bg-cyan-400" : "bg-cyan-900/50 border border-cyan-800"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
