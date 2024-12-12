'use client'
import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { IoMoon } from "react-icons/io5"

export default function ToggleTheme() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])

  if (!mounted) return <div className="w-5 h-5 " />;

  if (resolvedTheme === 'dark') {
    return <FiSun className="w-5 h-5 cursor-pointer hover:text-orange-400" onClick={() => setTheme('light')} />
  }

  if (resolvedTheme === 'light') {
    return <IoMoon className="w-5 h-5 cursor-pointer hover:text-blue-900" onClick={() => setTheme('dark')} />
  }

}