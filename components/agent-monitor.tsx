"use client"

import { useState, useEffect } from "react"
import {
  AlertCircle,
  Brain,
  CheckCircle2,
  Clock,
  MessageSquare,
  Pause,
  Play,
  RefreshCw,
  Trash2,
  XCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Agent types and statuses
type AgentStatus = "active" | "idle" | "error" | "offline"
type AgentType = "researcher" | "writer" | "analyst" | "assistant" | "coder" | "creative"

interface Agent {
  id: string
  name: string
  avatar: string
  status: AgentStatus
  type: AgentType
  load: number
  uptime: string
  messages: number
  lastActive: string
  description: string
}

// Import missing icons
import { BarChart, Code, MessageCircle, Palette } from "lucide-react"

const agentTypeIcons: Record<AgentType, JSX.Element> = {
  researcher: <Brain className="w-4 h-4" />,
  writer: <MessageSquare className="w-4 h-4" />,
  analyst: <BarChart className="w-4 h-4" />,
  assistant: <MessageCircle className="w-4 h-4" />,
  coder: <Code className="w-4 h-4" />,
  creative: <Palette className="w-4 h-4" />,
}

export function AgentMonitor() {
  const [agents, setAgents] = useState<Agent[]>([
    {
      id: "agent-001",
      name: "NEXUS-R1",
      avatar: "/placeholder.svg?height=80&width=80",
      status: "active",
      type: "researcher",
      load: 78,
      uptime: "14h 23m",
      messages: 1432,
      lastActive: "Just now",
      description: "Research specialist with focus on data mining and information retrieval",
    },
    {
      id: "agent-002",
      name: "SCRIBE-W2",
      avatar: "/placeholder.svg?height=80&width=80",
      status: "active",
      type: "writer",
      load: 45,
      uptime: "8h 12m",
      messages: 876,
      lastActive: "2m ago",
      description: "Content generation and narrative construction specialist",
    },
    {
      id: "agent-003",
      name: "CORTEX-A1",
      avatar: "/placeholder.svg?height=80&width=80",
      status: "idle",
      type: "analyst",
      load: 12,
      uptime: "23h 59m",
      messages: 2145,
      lastActive: "15m ago",
      description: "Data analysis and pattern recognition with predictive capabilities",
    },
    {
      id: "agent-004",
      name: "ECHO-S3",
      avatar: "/placeholder.svg?height=80&width=80",
      status: "active",
      type: "assistant",
      load: 92,
      uptime: "3d 7h",
      messages: 8721,
      lastActive: "Just now",
      description: "General purpose assistant with conversational expertise",
    },
    {
      id: "agent-005",
      name: "CIPHER-C1",
      avatar: "/placeholder.svg?height=80&width=80",
      status: "error",
      type: "coder",
      load: 0,
      uptime: "1h 17m",
      messages: 342,
      lastActive: "32m ago",
      description: "Code generation and debugging specialist with multi-language support",
    },
    {
      id: "agent-006",
      name: "MUSE-CR2",
      avatar: "/placeholder.svg?height=80&width=80",
      status: "offline",
      type: "creative",
      load: 0,
      uptime: "0h 0m",
      messages: 1205,
      lastActive: "2h ago",
      description: "Creative content generation with visual and narrative capabilities",
    },
    {
      id: "agent-007",
      name: "SENTINEL-R2",
      avatar: "/placeholder.svg?height=80&width=80",
      status: "active",
      type: "researcher",
      load: 65,
      uptime: "5h 42m",
      messages: 723,
      lastActive: "1m ago",
      description: "Specialized in security research and threat assessment",
    },
    {
      id: "agent-008",
      name: "ORACLE-A2",
      avatar: "/placeholder.svg?height=80&width=80",
      status: "active",
      type: "analyst",
      load: 87,
      uptime: "2d 14h",
      messages: 4532,
      lastActive: "Just now",
      description: "Predictive analysis and forecasting with temporal modeling",
    },
    {
      id: "agent-009",
      name: "FORGE-C2",
      avatar: "/placeholder.svg?height=80&width=80",
      status: "idle",
      type: "coder",
      load: 23,
      uptime: "18h 33m",
      messages: 1876,
      lastActive: "45m ago",
      description: "Architecture design and system integration specialist",
    },
  ])

  const [isLoading, setIsLoading] = useState(false)

  // Simulate agent activity
  useEffect(() => {
    const interval = setInterval(() => {
      setAgents((prevAgents) =>
        prevAgents.map((agent) => {
          // Randomly update agent status
          if (Math.random() > 0.95) {
            const statuses: AgentStatus[] = ["active", "idle", "error", "offline"]
            const newStatus = statuses[Math.floor(Math.random() * statuses.length)]
            return {
              ...agent,
              status: newStatus,
              load:
                newStatus === "active"
                  ? Math.floor(Math.random() * 60) + 40
                  : newStatus === "idle"
                    ? Math.floor(Math.random() * 30)
                    : 0,
              lastActive: newStatus === "active" ? "Just now" : agent.lastActive,
            }
          }

          // Update load for active agents
          if (agent.status === "active") {
            return {
              ...agent,
              load: Math.min(100, Math.max(30, agent.load + (Math.random() * 10 - 5))),
              messages: agent.messages + (Math.random() > 0.7 ? 1 : 0),
              lastActive: "Just now",
            }
          }

          return agent
        }),
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleAgentAction = (id: string, action: "start" | "pause" | "restart" | "delete") => {
    setIsLoading(true)

    // Simulate action processing
    setTimeout(() => {
      setAgents((prevAgents) =>
        prevAgents.map((agent) => {
          if (agent.id === id) {
            switch (action) {
              case "start":
                return { ...agent, status: "active", load: Math.floor(Math.random() * 30) + 40 }
              case "pause":
                return { ...agent, status: "idle", load: Math.floor(Math.random() * 20) }
              case "restart":
                return { ...agent, status: "active", load: 10, messages: agent.messages }
              default:
                return agent
            }
          }
          return agent
        }),
      )
      setIsLoading(false)
    }, 1000)
  }

  const getStatusColor = (status: AgentStatus) => {
    switch (status) {
      case "active":
        return "bg-green-500"
      case "idle":
        return "bg-amber-500"
      case "error":
        return "bg-red-500"
      case "offline":
        return "bg-gray-500"
    }
  }

  const getStatusIcon = (status: AgentStatus) => {
    switch (status) {
      case "active":
        return <CheckCircle2 className="w-4 h-4 text-green-500" />
      case "idle":
        return <Pause className="w-4 h-4 text-amber-500" />
      case "error":
        return <AlertCircle className="w-4 h-4 text-red-500" />
      case "offline":
        return <XCircle className="w-4 h-4 text-gray-500" />
    }
  }

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm font-bold text-green-400 flex items-center gap-2">
          <Brain className="w-4 h-4" /> LLM Agent Swarm Monitor
        </h3>
        <div className="flex items-center gap-2 text-xs text-green-500/70">
          <Clock className="w-3 h-3" />
          <span>Last updated: {new Date().toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 overflow-auto flex-1 pb-2">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="bg-black/80 border border-green-500/30 rounded-lg p-3 flex flex-col relative overflow-hidden group"
          >
            {/* Status indicator */}
            <div className={`absolute top-0 left-0 w-1 h-full ${getStatusColor(agent.status)}`}></div>

            {/* Agent header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-md bg-green-900/30 border border-green-500/30 overflow-hidden flex items-center justify-center">
                  <img
                    src={agent.avatar || "/placeholder.svg"}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = "/placeholder.svg?height=80&width=80"
                    }}
                  />
                </div>
                <div
                  className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${getStatusColor(agent.status)}`}
                ></div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1">
                  <h4 className="font-bold text-sm truncate">{agent.name}</h4>
                  <div className="text-xs text-green-500/70">{agentTypeIcons[agent.type]}</div>
                </div>
                <p className="text-xs text-green-500/70 truncate">{agent.description}</p>
              </div>

              {getStatusIcon(agent.status)}
            </div>

            {/* Agent metrics */}
            <div className="space-y-2 mb-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Load</span>
                  <span
                    className={
                      agent.load > 80
                        ? "text-red-400"
                        : agent.load > 60
                          ? "text-amber-400"
                          : agent.load > 0
                            ? "text-green-400"
                            : "text-gray-500"
                    }
                  >
                    {agent.load}%
                  </span>
                </div>
                <Progress
                  value={agent.load}
                  className="h-1 bg-green-950"
                  indicatorClassName={
                    agent.load > 80 ? "bg-red-500" : agent.load > 60 ? "bg-amber-500" : "bg-green-500"
                  }
                />
              </div>
            </div>

            {/* Agent stats */}
            <div className="grid grid-cols-3 gap-2 text-xs mb-3">
              <div className="bg-green-950/30 p-1.5 rounded">
                <div className="text-green-500/70">Uptime</div>
                <div className="font-bold">{agent.uptime}</div>
              </div>

              <div className="bg-green-950/30 p-1.5 rounded">
                <div className="text-green-500/70">Messages</div>
                <div className="font-bold">{agent.messages.toLocaleString()}</div>
              </div>

              <div className="bg-green-950/30 p-1.5 rounded">
                <div className="text-green-500/70">Last Active</div>
                <div className="font-bold">{agent.lastActive}</div>
              </div>
            </div>

            {/* Agent controls */}
            <div className="flex gap-1 mt-auto">
              {agent.status === "active" ? (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 h-7 text-xs border-amber-500/30 bg-black hover:bg-amber-950 hover:text-amber-400"
                  onClick={() => handleAgentAction(agent.id, "pause")}
                  disabled={isLoading}
                >
                  <Pause className="w-3 h-3 mr-1" /> Pause
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 h-7 text-xs border-green-500/30 bg-black hover:bg-green-950 hover:text-green-400"
                  onClick={() => handleAgentAction(agent.id, "start")}
                  disabled={isLoading}
                >
                  <Play className="w-3 h-3 mr-1" /> Start
                </Button>
              )}

              <Button
                size="sm"
                variant="outline"
                className="h-7 w-7 p-0 border-cyan-500/30 bg-black hover:bg-cyan-950 hover:text-cyan-400"
                onClick={() => handleAgentAction(agent.id, "restart")}
                disabled={isLoading}
              >
                <RefreshCw className="w-3 h-3" />
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="h-7 w-7 p-0 border-red-500/30 bg-black hover:bg-red-950 hover:text-red-400"
                disabled={isLoading}
              >
                <Trash2 className="w-3 h-3" />
              </Button>
            </div>

            {/* Scan line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"></div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        <div className="bg-green-950/20 border border-green-500/20 rounded p-3">
          <div className="text-xs text-green-500/70 mb-1">Total Agents</div>
          <div className="text-xl font-bold text-green-400">{agents.length}</div>
          <div className="text-xs text-green-500/70 mt-1">
            {agents.filter((a) => a.status === "active").length} active
          </div>
        </div>

        <div className="bg-green-950/20 border border-green-500/20 rounded p-3">
          <div className="text-xs text-green-500/70 mb-1">Total Messages</div>
          <div className="text-xl font-bold text-amber-400">
            {agents.reduce((sum, agent) => sum + agent.messages, 0).toLocaleString()}
          </div>
          <div className="text-xs text-green-500/70 mt-1">across all agents</div>
        </div>

        <div className="bg-green-950/20 border border-green-500/20 rounded p-3">
          <div className="text-xs text-green-500/70 mb-1">Avg. Load</div>
          <div className="text-xl font-bold text-cyan-400">
            {Math.round(agents.reduce((sum, agent) => sum + agent.load, 0) / agents.length)}%
          </div>
          <div className="text-xs text-green-500/70 mt-1">system-wide</div>
        </div>

        <div className="bg-green-950/20 border border-green-500/20 rounded p-3">
          <div className="text-xs text-green-500/70 mb-1">System Health</div>
          <div className="text-xl font-bold text-green-400">Optimal</div>
          <div className="text-xs text-green-500/70 mt-1">all systems nominal</div>
        </div>
      </div>
    </div>
  )
}
