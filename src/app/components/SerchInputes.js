'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchInputes({ totalIcons }) {
  const [value, setValue] = useState('')
  const [items, setItems] = useState([])
  const [active, setActive] = useState(false)

  const inputRef = useRef(null)
  const targetDivRef = useRef(null)
  const router = useRouter()

  // Fetch search results
  const searchIcons = async (query) => {
    if (query.length < 2) {
      setItems([])
      return
    }

    try {
      const res = await fetch(
        `https://iconsguru.ascinatetech.com/api/icons/search?query=${encodeURIComponent(query)}`
      )
      const data = await res.json()
      setItems(data.data || [])
    } catch (err) {
      console.error('Search error:', err)
    }
  }

  // Outside click close
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
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearchClick = () => {
    if (value.trim()) {
      router.push(`/details?search=${encodeURIComponent(value.trim())}`)
      setActive(false)
    }
  }

  return (
    <div className="position-relative col-lg-11">

      {/* Search Input */}
      <div className="search-sections-home d-flex align-items-center bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="#ccc"
        >
          <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168Z" />
        </svg>

        <input
          ref={inputRef}
          type="text"
          value={value}
          placeholder="What you are looking for?"
          className="form-control border-0"
          onFocus={() => setActive(true)}
          onChange={(e) => {
            setValue(e.target.value)
            searchIcons(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleSearchClick()
          }}
        />

        <button className="btn btn-search" onClick={handleSearchClick}>
          Search <span>icons</span>
        </button>
      </div>

      {/* Search Result Box */}
      {active && items.length > 0 && (
        <div
          ref={targetDivRef}
          className="search-result-box"
        >
          {items.map((icon) => (
            <div
              key={icon.id}
              className="search-item"
              onClick={() => {
                setValue(icon.icon_name)
                router.push(`/details?search=${encodeURIComponent(icon.icon_name)}`)
                setActive(false)
              }}
            >
              <img
                src={icon.icon_svg}
                alt={icon.icon_name}
                width={22}
                height={22}
              />
              <span>{icon.icon_name}</span>
            </div>
          ))}
        </div>
      )}


    </div>
  )
}
