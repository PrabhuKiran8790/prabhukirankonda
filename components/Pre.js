'use client'

import { useState, useRef } from 'react'
import { Copy, CopyCheck } from 'lucide-react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Pre = (props) => {
  const textInput = useRef(null)
  const [hovered, setHovered] = useState(false)
  const [copied, setCopied] = useState(false)

  const onEnter = () => {
    setHovered(true)
  }
  const onExit = () => {
    setHovered(false)
    setCopied(false)
  }
  const onCopy = () => {
    setCopied(true)
    notify()
    navigator.clipboard.writeText(textInput.current.textContent)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  const notify = () =>
    toast.success('Copied', {
      position: 'top-right',
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: localStorage.getItem('theme'),
    })

  return (
    <div ref={textInput} onMouseEnter={onEnter} onMouseLeave={onExit} className="relative">
      {hovered && (
        <button
          aria-label="Copy code"
          type="button"
          className={`absolute right-2 top-2 h-8 w-8 ring-0 rounded bg-transparent ${
            copied
              ? 'border-green-400 focus:border-green-400 focus:outline-none'
              : 'border-gray-300'
          }`}
          onClick={onCopy}
        >
          {copied ? (
            <CopyCheck size={20} className={copied ? 'text-green-400' : 'text-white'} />
          ) : (
            <Copy size={20} className={copied ? 'text-green-400' : 'text-white'} />
          )}
        </button>
      )}
      <ToastContainer
        position="top-right"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        theme="colored"
      />
      <pre className="bg-zinc-900 dark:bg-zinc-800/40 text-base font-normal shadow-2xl font-mono rounded-lg">
        {props.children}
      </pre>
    </div>
  )
}

export default Pre
