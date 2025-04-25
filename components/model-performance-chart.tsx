"use client"

import { useEffect, useRef } from "react"

export function ModelPerformanceChart() {
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

    // Generate data
    const generateData = () => {
      const data = []
      const modelCount = 8
      const timePoints = 24

      for (let i = 0; i < modelCount; i++) {
        const modelData = {
          name: ["GPT-4o", "Claude 3", "Llama 3", "Mistral", "Grok-1", "PaLM 2", "Gemini", "Falcon"][i],
          color: [
            "0, 255, 0", // Green
            "0, 255, 255", // Cyan
            "255, 255, 0", // Yellow
            "255, 0, 255", // Magenta
            "255, 165, 0", // Orange
            "0, 128, 255", // Blue
            "255, 0, 128", // Pink
            "128, 255, 0", // Lime
          ][i],
          values: [] as number[],
        }

        let value = 50 + Math.random() * 30

        for (let j = 0; j < timePoints; j++) {
          value += (Math.random() - 0.5) * 10
          value = Math.max(0, Math.min(100, value))
          modelData.values.push(value)
        }

        data.push(modelData)
      }

      return data
    }

    const data = generateData()

    // Draw chart
    const drawChart = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const padding = 40
      const chartWidth = canvas.width - padding * 2
      const chartHeight = canvas.height - padding * 2

      // Draw grid
      ctx.strokeStyle = "rgba(0, 255, 0, 0.1)"
      ctx.lineWidth = 0.5

      // Horizontal grid lines
      for (let i = 0; i <= 10; i++) {
        const y = padding + (chartHeight / 10) * i

        ctx.beginPath()
        ctx.moveTo(padding, y)
        ctx.lineTo(padding + chartWidth, y)
        ctx.stroke()

        // Y-axis labels
        ctx.fillStyle = "rgba(0, 255, 0, 0.7)"
        ctx.font = "10px monospace"
        ctx.textAlign = "right"
        ctx.textBaseline = "middle"
        ctx.fillText(`${100 - i * 10}%`, padding - 10, y)
      }

      // Vertical grid lines
      const timePoints = data[0].values.length
      for (let i = 0; i <= timePoints; i++) {
        const x = padding + (chartWidth / timePoints) * i

        ctx.beginPath()
        ctx.moveTo(x, padding)
        ctx.lineTo(x, padding + chartHeight)
        ctx.stroke()

        // X-axis labels (every 4 hours)
        if (i % 4 === 0 && i < timePoints) {
          ctx.fillStyle = "rgba(0, 255, 0, 0.7)"
          ctx.font = "10px monospace"
          ctx.textAlign = "center"
          ctx.textBaseline = "top"
          ctx.fillText(`${i}h`, x, padding + chartHeight + 10)
        }
      }

      // Draw chart title
      ctx.fillStyle = "rgba(0, 255, 0, 0.9)"
      ctx.font = "12px monospace"
      ctx.textAlign = "center"
      ctx.textBaseline = "top"
      ctx.fillText("MODEL PERFORMANCE OVER TIME (LAST 24 HOURS)", canvas.width / 2, 10)

      // Draw data lines
      for (const model of data) {
        ctx.strokeStyle = `rgba(${model.color}, 0.8)`
        ctx.lineWidth = 2
        ctx.beginPath()

        for (let i = 0; i < model.values.length; i++) {
          const x = padding + (chartWidth / (model.values.length - 1)) * i
          const y = padding + chartHeight - (chartHeight * model.values[i]) / 100

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        ctx.stroke()

        // Draw last point with label
        const lastIndex = model.values.length - 1
        const lastX = padding + (chartWidth / (model.values.length - 1)) * lastIndex
        const lastY = padding + chartHeight - (chartHeight * model.values[lastIndex]) / 100

        ctx.beginPath()
        ctx.arc(lastX, lastY, 4, 0, Math.PI * 2)
        ctx.fillStyle = `rgb(${model.color})`
        ctx.fill()

        ctx.fillStyle = `rgba(${model.color}, 0.9)`
        ctx.font = "10px monospace"
        ctx.textAlign = "left"
        ctx.textBaseline = "middle"
        ctx.fillText(`${model.name}: ${model.values[lastIndex].toFixed(1)}%`, lastX + 8, lastY)
      }
    }

    drawChart()

    // Update chart periodically
    const updateInterval = setInterval(() => {
      for (const model of data) {
        const lastValue = model.values[model.values.length - 1]
        let newValue = lastValue + (Math.random() - 0.5) * 5
        newValue = Math.max(0, Math.min(100, newValue))

        model.values.shift()
        model.values.push(newValue)
      }

      drawChart()
    }, 5000)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      clearInterval(updateInterval)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" style={{ background: "rgba(0, 20, 0, 0.2)" }} />
}
