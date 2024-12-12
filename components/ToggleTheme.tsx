'use client'
import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return <div className="w-5 h-5 bg-red-500" />;

  if (resolvedTheme === 'dark') {
    return <FiSun className="w-5 h-5" onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <FiMoon className="w-5 h-5" onClick={() => setTheme('dark')} />
  }

}