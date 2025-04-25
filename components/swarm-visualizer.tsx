"use client"

import { useEffect, useRef } from "react"

export function SwarmVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return

      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Node class
    class Node {
      x: number
      y: number
      radius: number
      color: string
      vx: number
      vy: number
      type: string
      connections: Node[]
      pulseRadius: number
      pulseOpacity: number
      isPulsing: boolean
      pulseColor: string

      constructor(x: number, y: number, radius: number, color: string, type: string) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.type = type
        this.connections = []
        this.pulseRadius = radius
        this.pulseOpacity = 0
        this.isPulsing = false
        this.pulseColor = color
      }

      update(width: number, height: number) {
        // Move node
        this.x += this.vx
        this.y += this.vy

        // Bounce off edges
        if (this.x < this.radius || this.x > width - this.radius) {
          this.vx = -this.vx
        }

        if (this.y < this.radius || this.y > height - this.radius) {
          this.vy = -this.vy
        }

        // Update pulse
        if (this.isPulsing) {
          this.pulseRadius += 0.5
          this.pulseOpacity -= 0.01

          if (this.pulseOpacity <= 0) {
            this.isPulsing = false
            this.pulseRadius = this.radius
            this.pulseOpacity = 0
          }
        }

        // Randomly start pulsing
        if (!this.isPulsing && Math.random() < 0.005) {
          this.startPulse()
        }
      }

      startPulse(color?: string) {
        this.isPulsing = true
        this.pulseRadius = this.radius
        this.pulseOpacity = 0.7
        if (color) this.pulseColor = color
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Draw pulse
        if (this.isPulsing) {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.pulseRadius, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${this.pulseColor}, ${this.pulseOpacity})`
          ctx.fill()
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgb(${this.color})`
        ctx.fill()

        // Draw node border
        ctx.strokeStyle = "rgba(0, 255, 0, 0.3)"
        ctx.lineWidth = 0.5
        ctx.stroke()

        // Draw node type indicator
        ctx.fillStyle = "#000"
        ctx.font = "8px monospace"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(this.type, this.x, this.y)
      }
    }

    // Create nodes
    const nodes: Node[] = []
    const nodeCount = 24

    // Node types and colors
    const nodeTypes = [
      { type: "G4", color: "0, 255, 0" }, // Green
      { type: "C3", color: "0, 255, 255" }, // Cyan
      { type: "L3", color: "255, 255, 0" }, // Yellow
      { type: "M7", color: "255, 0, 255" }, // Magenta
      { type: "GK", color: "255, 165, 0" }, // Orange
    ]

    for (let i = 0; i < nodeCount; i++) {
      const nodeType = nodeTypes[Math.floor(Math.random() * nodeTypes.length)]
      const node = new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        Math.random() * 5 + 5,
        nodeType.color,
        nodeType.type,
      )
      nodes.push(node)
    }

    // Connect nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      const connectionCount = Math.floor(Math.random() * 3) + 1

      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * nodes.length)
        if (targetIndex !== i && !node.connections.includes(nodes[targetIndex])) {
          node.connections.push(nodes[targetIndex])
        }
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "rgba(0, 255, 0, 0.1)"
      ctx.lineWidth = 0.5

      const gridSize = 30
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw connections
      for (const node of nodes) {
        for (const connection of node.connections) {
          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connection.x, connection.y)

          // Create gradient for connection
          const gradient = ctx.createLinearGradient(node.x, node.y, connection.x, connection.y)
          gradient.addColorStop(0, `rgba(${node.color}, 0.3)`)
          gradient.addColorStop(1, `rgba(${connection.color}, 0.3)`)

          ctx.strokeStyle = gradient
          ctx.lineWidth = 1
          ctx.stroke()

          // Draw data packets moving along connections
          if (Math.random() < 0.02) {
            const packetPos = Math.random()
            const packetX = node.x + (connection.x - node.x) * packetPos
            const packetY = node.y + (connection.y - node.y) * packetPos

            ctx.beginPath()
            ctx.arc(packetX, packetY, 2, 0, Math.PI * 2)
            ctx.fillStyle = `rgb(${node.color})`
            ctx.fill()

            // Start pulse on receiving node
            if (Math.random() < 0.3) {
              connection.startPulse(node.color)
            }
          }
        }
      }

      // Update and draw nodes
      for (const node of nodes) {
        node.update(canvas.width, canvas.height)
        node.draw(ctx)
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" style={{ background: "rgba(0, 20, 0, 0.2)" }} />
}
