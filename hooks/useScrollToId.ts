'use client'

import { useCallback } from 'react'

export default function useScrollToId({ headerOffset = 0 }: { headerOffset?: number }) {
  return useCallback(
    (id: string) => {
      if (!id) return
      const el = document.getElementById(id)
      if (!el) return

      // Compute the position accounting for a fixed header
      const elementPosition = el.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = Math.max(0, elementPosition - headerOffset)

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    },
    [headerOffset]
  )
}
