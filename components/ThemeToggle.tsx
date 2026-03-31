'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
// import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = theme === 'dark'

  return (
    // <button
    //   onClick={() => setTheme(isDark ? 'light' : 'dark')}
    //   className="p-2 rounded flex items-center gap-2 text-white hover:bg-gray bg-black transition relative cursor-pointer"
    //   aria-label="Toggle theme"
    // >
    //   <span className="relative w-5 h-5">
    
    //     <Sun
    //       className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
    //         isDark
    //           ? 'opacity-0 rotate-90 scale-75'
    //           : 'opacity-100 rotate-0 scale-100'
    //       }`}
    //     />

    //     <Moon
    //       className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
    //         isDark
    //           ? 'opacity-100 rotate-0 scale-100'
    //           : 'opacity-0 -rotate-90 scale-75'
    //       }`}
    //     />
    //   </span>
    
    // </button>
    <></>
  )
}