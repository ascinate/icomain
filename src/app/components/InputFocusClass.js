'use client'

import { useEffect, useRef, useState } from 'react'

export default function InputFocusClass() {
  const [active, setActive] = useState(false)
  const inputRef = useRef(null)
  const targetDivRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        targetDivRef.current &&
        !targetDivRef.current.contains(event.target)
      ) {
        setActive(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click here"
        onFocus={() => setActive(true)}
        className="border p-2"
      />

      <div
        ref={targetDivRef}
        className={`box ${active ? 'active' : ''}`}
      >
        Target Div
      </div>

      <style jsx>{`
        .box {
          margin-top: 20px;
          padding: 20px;
          background: #eee;
          transition: 0.3s;
        }
        .box.active {
          background: #4f46e5;
          color: white;
        }
      `}</style>
    </div>
  )
}
