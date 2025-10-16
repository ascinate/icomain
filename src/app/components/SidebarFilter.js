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
    <div className="sidebarsd_div d-inline-block w-100 p-0 box">

      {/* Categories */}
    

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

            <ul className="options_names cololi-list new-filter-05 p-0 m-0 d-flex flex-wrap align-items-center mt-3">
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

              <ul className="options_names p-0 m-0 new-filter-05 d-flex flex-wrap align-items-center mt-3">
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
                <ul className="options_names p-0 m-0 new-filter-05 d-flex flex-wrap align-items-center mt-3">
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
    </div>
  )
}
