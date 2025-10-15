'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';
import Image from 'next/image';

export default function SidebarFilter({ onFilterChange, showCategoryFilter = true }) {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true)


  const [filters, setFilters] = useState({
    categories: [],
    colors: [],
    types: [],
  })

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    colors: [],
    types: [],
  })

  useEffect(() => {
    axios.get('https://iconsguru.ascinatetech.com/api/sidebar-filters')
      .then(res => {
        const data = res.data
        setFilters({
          categories: Array.isArray(data.categories) ? data.categories : [],
          colors: Array.isArray(data.colors) ? data.colors : [],
          types: Array.isArray(data.types) ? data.types : [],
        })
      })
      .catch(err => console.error('Sidebar filter fetch error:', err))
      .finally(() => setIsLoading(false))
  }, [])

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(selectedFilters)
    }
  }, [selectedFilters])

 

  const handleCheckboxChange = (filterType, value) => {
    setSelectedFilters(prev => {
      const isChecked = prev[filterType].includes(value)
      return {
        ...prev,
        [filterType]: isChecked
          ? prev[filterType].filter(v => v !== value)
          : [...prev[filterType], value],
      }
    })
  }

  return (
    <aside className="sidebarsd_div d-inline-block w-100 p-0">

      {/* Categories */}
      <div className="comon_heading01 d-flex align-items-center mt-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(0,0,0,1)">
          <path d="M5 7C5 6.17157 5.67157 5.5 6.5 5.5C7.32843 5.5 8 6.17157 8 7C8 7.82843 7.32843 8.5 6.5 8.5C5.67157 8.5 5 7.82843 5 7ZM6.5 3.5C4.567 3.5 3 5.067 3 7C3 8.933 4.567 10.5 6.5 10.5C8.433 10.5 10 8.933 10 7C10 5.067 8.433 3.5 6.5 3.5ZM12 8H20V6H12V8ZM16 17C16 16.1716 16.6716 15.5 17.5 15.5C18.3284 15.5 19 16.1716 19 17C19 17.8284 18.3284 18.5 17.5 18.5C16.6716 18.5 16 17.8284 16 17ZM17.5 13.5C15.567 13.5 14 15.067 14 17C14 18.933 15.567 20.5 17.5 20.5C19.433 20.5 21 18.933 21 17C21 15.067 19.433 13.5 17.5 13.5ZM4 16V18H12V16H4Z"></path>
        </svg>
        <h4 className="ms-2"> Filter </h4>
      </div>

      <div className="sub_headings01 d-inline-block w-100 mt-0">
        {/* Show loader if loading */}
        {isLoading ? (
          <p className="d-block w-100">
             <div className="loading-animations">
                    <Image
                      loading="lazy"
                      src="/category.svg"
                      alt="iconsguru"
                      width={245}
                      height={346}
                    />
              </div>
          </p>
        ) : (
          <>
            {/* Colors */}
            <div className="d-flex align-items-center mt-4">
              <h5 className="ms-2 mb-0"> Colors </h5>
            </div>

            <ul className="options_names cololi-list new-filter-05 p-0 m-0 d-flex flex-wrap align-items-center mt-4">
              {filters.colors.map((color, i) => {
                const id = `color-${i}`
                return (
                  <li className="cmout form-check position-relative" key={i}>
                    <input
                      id={id}
                      type="checkbox"
                      className="form-check-input"
                      onChange={() => handleCheckboxChange('colors', color)}
                      checked={selectedFilters.colors.includes(color)}
                    />
                    <label className="form-check-label" htmlFor={id}>
                      {color.trim()}
                    </label>
                  </li>
                )
              })}
            </ul>

            {/* Types */}
            <div className="mb-4">
              <div className="d-flex align-items-center mt-4">
             
                <h5 className="ms-2 mb-0"> Types </h5>
              </div>

              <ul className="options_names p-0 m-0 new-filter-05 d-flex flex-wrap align-items-center mt-4">
                {filters.types.map((type, i) => {
                  const id = `type-${i}`
                  return (
                    <li className="cmout form-check position-relative" key={i}>
                      <input
                        id={id}
                        type="checkbox"
                        className="form-check-input"
                        onChange={() => handleCheckboxChange('types', type)}
                        checked={selectedFilters.types.includes(type)}
                      />
                      <label className="form-check-label" htmlFor={id}>
                        {type.trim()}
                      </label>
                    </li>
                  )
                })}
              </ul>
            </div>
          {showCategoryFilter && (
              <>
            <div className="d-flex align-items-center">
                 
                  <h5 className="ms-2 mb-0"> Categories </h5>
            </div>
                <ul className="options_names p-0 m-0 new-filter-05 d-flex flex-wrap align-items-center mt-4">
                  {(showAll ? filters.categories : filters.categories.slice(0, 4)).map((cat, i) => (
                    <li className="cmout form-check position-relative" key={i}>
                      <input
                        id={`cat-${i}`}
                        type="checkbox"
                        className="form-check-input"
                        onChange={() => handleCheckboxChange('categories', cat)}
                        checked={selectedFilters.categories.includes(cat)}
                      />
                      <label className="form-check-label" htmlFor={`cat-${i}`}>
                        {cat.trim()}
                      </label>
                    </li>
                  ))}
                  {filters.categories.length > 4 && (
                  <button
                    type="button"
                    className="btn btn-sm  px-0"
                    onClick={() => setShowAll(!showAll)}
                  >
                    {showAll ? '+ Less' : '+ More'}
                  </button>
                )}
                </ul>
                
            </>
            )}
          </>
        )}
      </div>
    </aside>
  )
}
