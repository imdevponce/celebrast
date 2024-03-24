'use client'
import { useState, useEffect } from 'react'

export default function useViewportWidth () {
  const [width, setWidth] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return width
}
