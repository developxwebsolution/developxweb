'use client'

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { List } from "lucide-react" // ✅ use list-style icon for Contents
import useScrollToId from "@/hooks/useScrollToId"

type Item = {
  id: string
  label: string
}

type Props = {
  items: Item[]
  headerOffset?: number
  inlineOnMobile?: boolean
}

export default function TableOfContents({ items, headerOffset = 0, inlineOnMobile = false }: Props) {
  const scrollToId = useScrollToId({ headerOffset })
  const [open, setOpen] = useState(false)

  const panelVariants = {
    closed: { opacity: 0, scaleY: 0 },
    open: { opacity: 1, scaleY: 1 },
  }

  return (
    <div className="w-full">
      {/* Desktop / large screens */}
      <div className={`${inlineOnMobile ? 'block' : 'hidden lg:block'}`}>
        <div className="bg-white  dark:bg-[#F0F7FF]  rounded-md p-2 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold  text-black">Contents</h3>

            {/* Toggle button (icon-only) with theme-aware styles */}
            <button
              aria-label={open ? 'Hide contents' : 'Show contents'}
              aria-expanded={open}
              aria-controls="toc-list"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-gray-100 dark:bg-zinc-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-zinc-600 transition"
            >
              <List
                size={18}
                className={`${open ? 'text-[#5E9ED5]' : 'text-gray-700 dark:text-gray-200'} transition-transform duration-300 ${
                  open ? 'rotate-90' : 'rotate-0'
                }`}
              />
            </button>
          </div>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                id="toc-list"
                initial="closed"
                animate="open"
                exit="closed"
                variants={panelVariants}
                style={{ originY: 0 }}
                transition={{ duration: 0.25 }}
              >
                <ul className="space-y-1 mt-2">
                  {items.map((it) => (
                    <li key={it.id} className="flex items-start">
                      <span className="mt-2 w-[6px] h-[6px] bg-gray-500 dark:bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
                      <button
                        onClick={() => scrollToId(it.id)}
                        className="text-left w-full text-sm text-black hover:text-[#5E9ED5]"
                      >
                        {it.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile floating version (icon-only button) */}
      {!inlineOnMobile && (
        <div className="lg:hidden">
          <div className="fixed bottom-6 right-4 z-50">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? 'Close table of contents' : 'Open table of contents'}
              aria-expanded={open}
              aria-controls="toc-panel"
              className="w-12 h-12 rounded-full bg-white dark:bg-zinc-800 text-gray-800 dark:text-gray-200 shadow-lg flex items-center justify-center"
              title="Table of contents"
            >
              <List
                size={24}
                className={`${open ? 'text-[#5E9ED5]' : 'text-gray-800 dark:text-gray-200'} transition-transform duration-300 ${
                  open ? 'rotate-90' : 'rotate-0'
                }`}
              />
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                id="toc-panel"
                initial={{ y: 200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 200, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="fixed inset-x-8 bottom-4 z-40"
              >
                <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg p-3 sm:p-4 shadow-lg max-w-sm mx-auto">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-gray-800 dark:text-gray-200">Contents</h4>
                    <button onClick={() => setOpen(false)} className="text-gray-600 dark:text-gray-300">
                      Close
                    </button>
                  </div>
                  <div className="max-h-60 overflow-auto">
                    <ul className="space-y-2">
                      {items.map((it) => (
                        <li key={it.id} className="flex items-start">
                          <span className="mt-1 w-2 h-2 bg-gray-500 dark:bg-gray-400 rounded-full mr-2 flex-shrink-0"></span>
                          <button
                            onClick={() => {
                              scrollToId(it.id)
                              setOpen(false)
                            }}
                            className="text-left w-full text-sm text-gray-700 dark:text-gray-300 hover:text-[#5E9ED5]"
                          >
                            {it.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}
