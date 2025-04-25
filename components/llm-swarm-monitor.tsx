"use client"

import { useState, useEffect, useRef } from "react"
import {
  AlertCircle,
  BarChart3,
  Brain,
  CircleOff,
  Clock,
  Command,
  Database,
  Eye,
  FileWarning,
  Fingerprint,
  Gauge,
  Lock,
  Maximize2,
  Minimize2,
  Power,
  RefreshCw,
  RotateCw,
  Search,
  Server,
  Settings,
  Shield,
  Terminal,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useToast } from "@/components/ui/use-toast"
import { ModelPerformanceChart } from "@/components/model-performance-chart"
import { StatusIndicator } from "@/components/status-indicator"
import { askGrok } from "@/lib/grok-api"
import { AgentMonitor } from "@/components/agent-monitor"

export default function LLMSwarmMonitor() {
  const [activeTab, setActiveTab] = useState("overview")
  const [systemStatus, setSystemStatus] = useState("online")
  const [cpuUsage, setCpuUsage] = useState(68)
  const [memoryUsage, setMemoryUsage] = useState(42)
  const [networkLatency, setNetworkLatency] = useState(24)
  const [activeModels, setActiveModels] = useState(16)
  const [totalModels, setTotalModels] = useState(24)
  const [queryVolume, setQueryVolume] = useState(1243)
  const [responseTime, setResponseTime] = useState(0.86)
  const [threatLevel, setThreatLevel] = useState(12)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [powerLevel, setPowerLevel] = useState(75)
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "> VAULT-TEC LLM SWARM MONITOR v1.2.8",
    "> INITIALIZING NEURAL NETWORK CONNECTIONS...",
    "> ESTABLISHING SECURE CHANNELS...",
    "> LOADING MONITORING PROTOCOLS...",
    "> SYSTEM ONLINE. WELCOME, OVERSEER.",
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [grokResponse, setGrokResponse] = useState("")
  const [userQuery, setUserQuery] = useState("")

  const { toast } = useToast()
  const terminalRef = useRef<HTMLDivElement>(null)
  const playSound = (type: string) => {
    // Audio functionality removed to prevent errors
    console.log(`Sound effect: ${type}`)
    // We'll keep the visual feedback without the audio
  }

  // Simulated data for charts
  const modelData = [
    { name: "GPT-4o", performance: 92, load: 78, status: "optimal" },
    { name: "Claude 3", performance: 88, load: 65, status: "optimal" },
    { name: "Llama 3", performance: 84, load: 82, status: "warning" },
    { name: "Mistral", performance: 79, load: 45, status: "optimal" },
    { name: "Grok-1", performance: 86, load: 91, status: "critical" },
    { name: "PaLM 2", performance: 81, load: 72, status: "optimal" },
    { name: "Gemini", performance: 90, load: 88, status: "warning" },
    { name: "Falcon", performance: 76, load: 54, status: "optimal" },
  ]

  // Simulate changing metrics
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage((prev) => Math.min(100, Math.max(30, prev + (Math.random() * 10 - 5))))
      setMemoryUsage((prev) => Math.min(100, Math.max(20, prev + (Math.random() * 8 - 4))))
      setNetworkLatency((prev) => Math.min(100, Math.max(10, prev + (Math.random() * 6 - 3))))
      setQueryVolume((prev) => prev + Math.floor(Math.random() * 10 - 2))
      setResponseTime(
        (prev) => Math.max(0.2, Math.min(2.0, prev + (Math.random() * 0.2 - 0.1))).toFixed(2) as unknown as number,
      )

      if (Math.random() > 0.95) {
        const newStatus = systemStatus === "online" ? "alert" : "online"
        setSystemStatus(newStatus)

        if (newStatus === "alert") {
          addTerminalMessage("> WARNING: ANOMALY DETECTED IN NEURAL PATHWAY SECTOR 7G")
          playSound("alert")
          toast({
            title: "System Alert",
            description: "Anomaly detected in neural pathway. Initiating countermeasures.",
            variant: "destructive",
          })
        } else {
          addTerminalMessage("> SYSTEM STABILIZED: NEURAL PATHWAYS NORMALIZED")
          playSound("success")
        }
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [systemStatus])

  // Auto-scroll terminal
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [terminalHistory])

  const addTerminalMessage = (message: string) => {
    setTerminalHistory((prev) => [...prev, message])
  }

  const handlePowerChange = (value: number[]) => {
    const newPower = value[0]
    setPowerLevel(newPower)
    addTerminalMessage(`> ADJUSTING NEURAL NETWORK POWER ALLOCATION: ${newPower}%`)

    if (newPower > 90) {
      addTerminalMessage("> WARNING: HIGH POWER CONSUMPTION MAY LEAD TO SYSTEM INSTABILITY")
      playSound("alert")
    }
  }

  const handleModelToggle = (modelName: string, enabled: boolean) => {
    addTerminalMessage(`> ${enabled ? "ACTIVATING" : "DEACTIVATING"} ${modelName} NEURAL PATHWAYS`)
    playSound(enabled ? "success" : "alert")

    // In a real app, this would actually enable/disable the model
    toast({
      title: `${modelName} ${enabled ? "Activated" : "Deactivated"}`,
      description: enabled
        ? `${modelName} is now processing queries in the swarm.`
        : `${modelName} has been removed from the processing swarm.`,
    })
  }

  const handleSystemReset = () => {
    addTerminalMessage("> INITIATING SYSTEM RESET SEQUENCE...")
    setIsLoading(true)

    setTimeout(() => {
      addTerminalMessage("> PURGING NEURAL CACHES...")
    }, 500)

    setTimeout(() => {
      addTerminalMessage("> REESTABLISHING BASELINE PARAMETERS...")
    }, 1500)

    setTimeout(() => {
      addTerminalMessage("> SYSTEM RESET COMPLETE. ALL FUNCTIONS NOMINAL.")
      setIsLoading(false)
      setSystemStatus("online")
      playSound("success")

      toast({
        title: "System Reset Complete",
        description: "All neural networks have been restored to baseline parameters.",
      })
    }, 3000)
  }

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  const handleGrokQuery = async () => {
    if (!userQuery.trim()) return

    setIsLoading(true)
    addTerminalMessage(`> USER QUERY: ${userQuery}`)

    try {
      const response = await askGrok(userQuery)
      setGrokResponse(response)
      addTerminalMessage(`> GROK RESPONSE RECEIVED: ${response.substring(0, 50)}...`)
    } catch (error) {
      console.error("Error querying Grok:", error)
      setGrokResponse("Error communicating with Grok. Please try again.")
      addTerminalMessage("> ERROR: NEURAL PATHWAY COMMUNICATION FAILURE")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative w-full h-screen bg-black text-green-400 font-mono overflow-hidden">
      {/* CRT Overlay Effect */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/10"></div>
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent scan-line"></div>
      </div>

      {/* Header */}
      <header className="border-b border-green-500/30 bg-black/80 backdrop-blur-sm p-4 flex items-center justify-between z-20 relative">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center">
            <Brain className="w-6 h-6 text-black" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-wider text-green-400">
              VAULT-TEC <span className="text-amber-400">LLM SWARM</span>
            </h1>
            <p className="text-xs text-green-500/70">NEURAL NETWORK MONITORING SYSTEM v1.2.8</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <StatusIndicator status={systemStatus} />

          <div className="flex gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-green-500/30 bg-black hover:bg-green-950 hover:text-green-400"
                    onClick={handleSystemReset}
                    disabled={isLoading}
                  >
                    {isLoading ? <RotateCw className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Reset System</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-green-500/30 bg-black hover:bg-green-950 hover:text-green-400"
                    onClick={handleFullscreen}
                  >
                    {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-amber-500/30 bg-black hover:bg-amber-950 hover:text-amber-400"
                  >
                    <Settings className="w-4 h-4 text-amber-400" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>System Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4 p-4 h-[calc(100vh-64px)] overflow-hidden">
        {/* Left Sidebar */}
        <div className="col-span-2 flex flex-col gap-4">
          <div className="bg-black/60 border border-green-500/30 rounded-lg p-4 flex-1">
            <h3 className="text-xs uppercase mb-4 text-green-500 font-bold tracking-wider flex items-center gap-2">
              <Server className="w-4 h-4" /> LLM Swarm Status
            </h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>CPU Usage</span>
                  <span
                    className={cpuUsage > 80 ? "text-red-400" : cpuUsage > 60 ? "text-amber-400" : "text-green-400"}
                  >
                    {cpuUsage.toFixed(1)}%
                  </span>
                </div>
                <Progress
                  value={cpuUsage}
                  className="h-1 bg-green-950"
                  indicatorClassName={cpuUsage > 80 ? "bg-red-500" : cpuUsage > 60 ? "bg-amber-500" : "bg-green-500"}
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Memory</span>
                  <span>{memoryUsage.toFixed(1)}%</span>
                </div>
                <Progress value={memoryUsage} className="h-1 bg-green-950" indicatorClassName="bg-cyan-500" />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Network</span>
                  <span>{networkLatency.toFixed(1)} ms</span>
                </div>
                <Progress
                  value={networkLatency}
                  max={100}
                  className="h-1 bg-green-950"
                  indicatorClassName="bg-blue-500"
                />
              </div>

              <div className="pt-2 border-t border-green-500/20">
                <div className="flex justify-between text-xs mb-2">
                  <span>Active Models</span>
                  <span className="text-amber-400">
                    {activeModels}/{totalModels}
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-1">
                  {Array.from({ length: totalModels }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-full aspect-square rounded-sm ${i < activeModels ? "bg-amber-500" : "bg-green-900/30 border border-green-900"}`}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-green-500/20 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span>Query Volume</span>
                  <span className="font-bold text-cyan-400">{queryVolume}/hr</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span>Avg Response</span>
                  <span className="font-bold text-cyan-400">{responseTime}s</span>
                </div>

                <div className="flex justify-between items-center text-xs">
                  <span>Threat Level</span>
                  <span
                    className={`font-bold ${threatLevel > 50 ? "text-red-400" : threatLevel > 25 ? "text-amber-400" : "text-green-400"}`}
                  >
                    {threatLevel}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/60 border border-green-500/30 rounded-lg p-4">
            <h3 className="text-xs uppercase mb-4 text-green-500 font-bold tracking-wider flex items-center gap-2">
              <Gauge className="w-4 h-4" /> Power Controls
            </h3>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs mb-2">
                  <span>Neural Network Power</span>
                  <span
                    className={powerLevel > 90 ? "text-red-400" : powerLevel > 70 ? "text-amber-400" : "text-green-400"}
                  >
                    {powerLevel}%
                  </span>
                </div>
                <Slider
                  defaultValue={[75]}
                  max={100}
                  step={1}
                  value={[powerLevel]}
                  onValueChange={handlePowerChange}
                  className="py-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="border-green-500/30 bg-black hover:bg-green-950 text-xs">
                  <Lock className="w-3 h-3 mr-1" /> Lock
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-red-500/30 bg-black hover:bg-red-950 text-red-400 hover:text-red-300 text-xs"
                >
                  <Power className="w-3 h-3 mr-1" /> Shutdown
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-span-7 flex flex-col gap-4">
          <div className="bg-black/60 border border-green-500/30 rounded-lg p-4 flex-1">
            <Tabs
              defaultValue="overview"
              value={activeTab}
              onValueChange={setActiveTab}
              className="h-full flex flex-col"
            >
              <div className="flex justify-between items-center mb-4">
                <TabsList className="bg-green-950/30">
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
                  >
                    <Eye className="w-4 h-4 mr-1" /> Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="models"
                    className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
                  >
                    <Brain className="w-4 h-4 mr-1" /> Models
                  </TabsTrigger>
                  <TabsTrigger
                    value="analytics"
                    className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
                  >
                    <BarChart3 className="w-4 h-4 mr-1" /> Analytics
                  </TabsTrigger>
                  <TabsTrigger
                    value="security"
                    className="data-[state=active]:bg-green-500 data-[state=active]:text-black"
                  >
                    <Shield className="w-4 h-4 mr-1" /> Security
                  </TabsTrigger>
                </TabsList>

                <div className="flex items-center gap-2 text-xs text-green-500/70">
                  <Clock className="w-3 h-3" />
                  <span>Last updated: {new Date().toLocaleTimeString()}</span>
                </div>
              </div>

              <TabsContent value="overview" className="flex-1 overflow-hidden m-0">
                {/* Replace SwarmVisualizer with AgentMonitor */}
                <AgentMonitor />
              </TabsContent>

              <TabsContent value="models" className="flex-1 overflow-auto m-0">
                <div className="grid grid-cols-2 gap-4">
                  {modelData.map((model) => (
                    <div
                      key={model.name}
                      className="bg-green-950/20 border border-green-500/20 rounded p-4 flex flex-col"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              model.status === "optimal"
                                ? "bg-green-500"
                                : model.status === "warning"
                                  ? "bg-amber-500"
                                  : "bg-red-500"
                            }`}
                          ></div>
                          <h4 className="font-bold">{model.name}</h4>
                        </div>

                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked={model.status !== "offline"}
                            onChange={(e) => handleModelToggle(model.name, e.target.checked)}
                          />
                          <div className="w-9 h-5 bg-green-900/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>

                      <div className="space-y-3 mb-3">
                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Performance</span>
                            <span>{model.performance}%</span>
                          </div>
                          <Progress
                            value={model.performance}
                            className="h-1 bg-green-950"
                            indicatorClassName="bg-cyan-500"
                          />
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-1">
                            <span>Load</span>
                            <span
                              className={
                                model.load > 90 ? "text-red-400" : model.load > 75 ? "text-amber-400" : "text-green-400"
                              }
                            >
                              {model.load}%
                            </span>
                          </div>
                          <Progress
                            value={model.load}
                            className="h-1 bg-green-950"
                            indicatorClassName={
                              model.load > 90 ? "bg-red-500" : model.load > 75 ? "bg-amber-500" : "bg-green-500"
                            }
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-xs mt-auto">
                        <div className="bg-green-950/30 p-2 rounded">
                          <div className="text-green-500/70">Tokens/s</div>
                          <div className="font-bold">{Math.floor(Math.random() * 100 + 50)}</div>
                        </div>

                        <div className="bg-green-950/30 p-2 rounded">
                          <div className="text-green-500/70">Queries</div>
                          <div className="font-bold">{Math.floor(Math.random() * 1000 + 100)}</div>
                        </div>

                        <div className="bg-green-950/30 p-2 rounded">
                          <div className="text-green-500/70">Errors</div>
                          <div className="font-bold">{Math.floor(Math.random() * 10)}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="flex-1 overflow-auto m-0">
                <div className="h-full flex flex-col">
                  <div className="flex-1">
                    <ModelPerformanceChart />
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-4">
                    <div className="bg-green-950/20 border border-green-500/20 rounded p-3">
                      <div className="text-xs text-green-500/70 mb-1">Avg. Token Usage</div>
                      <div className="text-xl font-bold text-green-400">1,248</div>
                      <div className="text-xs text-green-500/70 mt-1">per request</div>
                    </div>

                    <div className="bg-green-950/20 border border-green-500/20 rounded p-3">
                      <div className="text-xs text-green-500/70 mb-1">Cost Efficiency</div>
                      <div className="text-xl font-bold text-amber-400">$0.0042</div>
                      <div className="text-xs text-green-500/70 mt-1">per 1K tokens</div>
                    </div>

                    <div className="bg-green-950/20 border border-green-500/20 rounded p-3">
                      <div className="text-xs text-green-500/70 mb-1">Daily Cost</div>
                      <div className="text-xl font-bold text-cyan-400">$128.76</div>
                      <div className="text-xs text-green-500/70 mt-1">-12% from yesterday</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="security" className="flex-1 overflow-auto m-0">
                <div className="space-y-4">
                  <div className="bg-red-950/20 border border-red-500/20 rounded p-4">
                    <h4 className="text-red-400 font-bold flex items-center gap-2 mb-3">
                      <AlertCircle className="w-4 h-4" /> Security Alerts
                    </h4>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-xs">
                        <FileWarning className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-amber-400">Unusual query pattern detected from IP 192.168.1.45</p>
                          <p className="text-green-500/70">Timestamp: 2023-04-25 14:32:18</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-xs">
                        <CircleOff className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-red-400">Unauthorized access attempt blocked</p>
                          <p className="text-green-500/70">Timestamp: 2023-04-25 12:18:05</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-950/20 border border-green-500/20 rounded p-4">
                      <h4 className="text-green-400 font-bold flex items-center gap-2 mb-3">
                        <Fingerprint className="w-4 h-4" /> Authentication Status
                      </h4>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <span>2FA Enabled</span>
                          <span className="text-green-400">Yes</span>
                        </div>

                        <div className="flex justify-between items-center text-xs">
                          <span>API Keys Active</span>
                          <span className="text-amber-400">3/5</span>
                        </div>

                        <div className="flex justify-between items-center text-xs">
                          <span>Last Password Change</span>
                          <span className="text-green-400">3 days ago</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-950/20 border border-green-500/20 rounded p-4">
                      <h4 className="text-green-400 font-bold flex items-center gap-2 mb-3">
                        <Database className="w-4 h-4" /> Data Protection
                      </h4>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center text-xs">
                          <span>Encryption</span>
                          <span className="text-green-400">AES-256</span>
                        </div>

                        <div className="flex justify-between items-center text-xs">
                          <span>Last Backup</span>
                          <span className="text-green-400">2 hours ago</span>
                        </div>

                        <div className="flex justify-between items-center text-xs">
                          <span>Data Retention</span>
                          <span className="text-amber-400">30 days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="col-span-3 flex flex-col gap-4">
          <div className="bg-black/60 border border-green-500/30 rounded-lg p-4 flex-1">
            <h3 className="text-xs uppercase mb-4 text-green-500 font-bold tracking-wider flex items-center gap-2">
              <Terminal className="w-4 h-4" /> Command Terminal
            </h3>

            <div
              ref={terminalRef}
              className="h-[calc(100%-2rem)] overflow-auto font-mono text-xs bg-black/80 border border-green-500/20 rounded p-2 terminal-scrollbar"
            >
              {terminalHistory.map((line, i) => (
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
          </div>

          <div className="bg-black/60 border border-amber-500/30 rounded-lg p-4">
            <h3 className="text-xs uppercase mb-4 text-amber-500 font-bold tracking-wider flex items-center gap-2">
              <Command className="w-4 h-4" /> Grok Interface
            </h3>

            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask Grok about LLM swarm status..."
                  className="w-full bg-black border border-amber-500/30 rounded px-3 py-2 text-sm focus:outline-none focus:border-amber-500"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleGrokQuery()}
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1 bg-amber-600 hover:bg-amber-700 text-black h-6 w-6 p-0"
                  onClick={handleGrokQuery}
                  disabled={isLoading}
                >
                  {isLoading ? <RotateCw className="w-3 h-3 animate-spin" /> : <Search className="w-3 h-3" />}
                </Button>
              </div>

              {grokResponse && (
                <div className="bg-amber-950/20 border border-amber-500/20 rounded p-3 text-xs">
                  <div className="text-amber-500/70 mb-1 flex items-center gap-1">
                    <Zap className="w-3 h-3" /> Grok Response:
                  </div>
                  <div className="text-amber-400/90">{grokResponse}</div>
                </div>
              )}

              <div className="flex justify-between text-xs text-amber-500/70">
                <span>Grok API Status: Online</span>
                <span>Model: Grok-1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
