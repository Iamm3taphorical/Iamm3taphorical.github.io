"use client"

import React, { useEffect, useRef, useState } from 'react'

const ShaderBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [isMobile, setIsMobile] = useState(false)

    // Check if mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Vertex shader
    const vsSource = `
    attribute vec4 aVertexPosition;
    void main() {
      gl_Position = aVertexPosition;
    }
  `

    // Fragment shader - Blue theme with vertical waves (90 degree rotation)
    const fsSource = `
    precision mediump float;
    uniform vec2 iResolution;
    uniform float iTime;
    uniform float iMobile;

    const float overallSpeed = 0.15;
    const float gridSmoothWidth = 0.015;
    const float scale = 5.0;
    
    // Blue theme colors
    const vec4 lineColor = vec4(0.23, 0.51, 0.96, 1.0); // Primary blue
    const float minLineWidth = 0.02;
    const float maxLineWidth = 0.15;
    const float lineSpeed = 0.8 * overallSpeed;
    const float lineAmplitude = 1.0;
    const float lineFrequency = 0.2;
    const float warpSpeed = 0.15 * overallSpeed;
    const float warpFrequency = 0.4;
    const float warpAmplitude = 0.8;
    const float offsetFrequency = 0.4;
    const float offsetSpeed = 1.0 * overallSpeed;
    const float minOffsetSpread = 0.5;
    const float maxOffsetSpread = 1.5;

    #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
    #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
    #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))

    float random(float t) {
      return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
    }

    float getPlasmaX(float y, float verticalFade, float offset) {
      return random(y * lineFrequency + iTime * lineSpeed) * verticalFade * lineAmplitude + offset;
    }

    void main() {
      vec2 fragCoord = gl_FragCoord.xy;
      vec2 uv = fragCoord.xy / iResolution.xy;
      
      // ROTATED 90 degrees - swap x and y for vertical wave
      vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.y * 2.0 * scale;
      
      // Swap coordinates for vertical orientation
      float temp = space.x;
      space.x = space.y;
      space.y = temp;

      float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);
      float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);

      // Warp effect
      space.x += random(space.y * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + verticalFade);
      space.y += random(space.x * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * verticalFade;

      vec4 lines = vec4(0.0);
      
      // Blue theme background gradient
      vec4 bgColor1 = vec4(0.043, 0.067, 0.122, 1.0); // Dark blue
      vec4 bgColor2 = vec4(0.059, 0.090, 0.161, 1.0); // Slightly lighter dark blue

      // Reduce lines on mobile for performance
      int lineCount = iMobile > 0.5 ? 8 : 12;
      
      for(int l = 0; l < 12; l++) {
        if(l >= lineCount) break;
        
        float normalizedLineIndex = float(l) / float(lineCount);
        float offsetTime = iTime * offsetSpeed;
        float offsetPosition = float(l) + space.y * offsetFrequency;
        float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
        float halfWidth = mix(minLineWidth, maxLineWidth, rand * verticalFade) / 2.0;
        float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, verticalFade);
        float linePosition = getPlasmaX(space.y, verticalFade, offset);
        float line = drawSmoothLine(linePosition, halfWidth, space.x) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.x);

        // Moving circles along lines
        float circleY = mod(float(l) + iTime * lineSpeed * 2.0, 20.0) - 10.0;
        vec2 circlePosition = vec2(getPlasmaX(circleY, verticalFade, offset), circleY);
        float circle = drawCircle(circlePosition, 0.015, space) * 3.0;

        line = line + circle;
        
        // Blue gradient for lines
        vec4 thisLineColor = mix(
          vec4(0.23, 0.51, 0.96, 1.0),  // Blue
          vec4(0.49, 0.82, 0.98, 1.0),  // Sky blue / accent
          normalizedLineIndex
        );
        
        lines += line * thisLineColor * rand * 0.8;
      }

      // Gradient background
      vec4 fragColor = mix(bgColor1, bgColor2, uv.y);
      fragColor *= (verticalFade * 0.7 + 0.3);
      fragColor.a = 1.0;
      fragColor += lines;

      gl_FragColor = fragColor;
    }
  `

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const gl = canvas.getContext('webgl', {
            antialias: false,
            powerPreference: 'low-power' // Better for mobile battery
        })
        if (!gl) return

        // Compile shader
        const loadShader = (type: number, source: string) => {
            const shader = gl.createShader(type)
            if (!shader) return null
            gl.shaderSource(shader, source)
            gl.compileShader(shader)
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compile error:', gl.getShaderInfoLog(shader))
                gl.deleteShader(shader)
                return null
            }
            return shader
        }

        const vertexShader = loadShader(gl.VERTEX_SHADER, vsSource)
        const fragmentShader = loadShader(gl.FRAGMENT_SHADER, fsSource)
        if (!vertexShader || !fragmentShader) return

        const shaderProgram = gl.createProgram()
        if (!shaderProgram) return
        gl.attachShader(shaderProgram, vertexShader)
        gl.attachShader(shaderProgram, fragmentShader)
        gl.linkProgram(shaderProgram)

        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            console.error('Shader program link error:', gl.getProgramInfoLog(shaderProgram))
            return
        }

        // Setup buffers
        const positionBuffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1.0, -1.0,
            1.0, -1.0,
            -1.0, 1.0,
            1.0, 1.0,
        ]), gl.STATIC_DRAW)

        const programInfo = {
            program: shaderProgram,
            attribLocations: {
                vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
            },
            uniformLocations: {
                resolution: gl.getUniformLocation(shaderProgram, 'iResolution'),
                time: gl.getUniformLocation(shaderProgram, 'iTime'),
                mobile: gl.getUniformLocation(shaderProgram, 'iMobile'),
            },
        }

        // Handle resize with debounce for mobile
        let resizeTimeout: NodeJS.Timeout
        const resizeCanvas = () => {
            clearTimeout(resizeTimeout)
            resizeTimeout = setTimeout(() => {
                const dpr = Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5)
                canvas.width = window.innerWidth * dpr
                canvas.height = window.innerHeight * dpr
                canvas.style.width = window.innerWidth + 'px'
                canvas.style.height = window.innerHeight + 'px'
                gl.viewport(0, 0, canvas.width, canvas.height)
            }, 100)
        }

        window.addEventListener('resize', resizeCanvas)
        resizeCanvas()

        // Animation loop with frame limiting for mobile
        let startTime = Date.now()
        let animationId: number
        let lastFrameTime = 0
        const targetFPS = isMobile ? 24 : 60
        const frameInterval = 1000 / targetFPS

        const render = (currentTime: number) => {
            animationId = requestAnimationFrame(render)

            // Frame rate limiting
            const elapsed = currentTime - lastFrameTime
            if (elapsed < frameInterval) return
            lastFrameTime = currentTime - (elapsed % frameInterval)

            const time = (Date.now() - startTime) / 1000

            gl.clearColor(0.0, 0.0, 0.0, 1.0)
            gl.clear(gl.COLOR_BUFFER_BIT)
            gl.useProgram(programInfo.program)

            gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height)
            gl.uniform1f(programInfo.uniformLocations.time, time)
            gl.uniform1f(programInfo.uniformLocations.mobile, isMobile ? 1.0 : 0.0)

            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
            gl.vertexAttribPointer(programInfo.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0)
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition)

            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)
        }

        animationId = requestAnimationFrame(render)

        return () => {
            window.removeEventListener('resize', resizeCanvas)
            cancelAnimationFrame(animationId)
            clearTimeout(resizeTimeout)
        }
    }, [isMobile])

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10"
            style={{ pointerEvents: 'none' }}
        />
    )
}

export default ShaderBackground
