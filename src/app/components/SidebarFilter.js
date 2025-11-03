'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';
import Image from 'next/image';
import NavicationDetailspage from './NavicationDetailspage';

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

            <div className="accordion mt-3" id="accordionPanelsStayOpenExample">
                <div className="accordion-item d-none">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button pe-4 ps-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <span className='me-2'> 
                           <Image
                            loading="lazy"
                            src="/7148740_category_variety_random_shuffle_icon.svg"
                            alt="iconsguru"
                            width={18}
                            height={18}
                          />
                           
                        </span>  Category
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionPanelsStayOpenExample">
                      <div className="accordion-body">
                          <NavicationDetailspage/>
                      </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button pe-4 ps-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnea" aria-expanded="true" aria-controls="collapseOne">
                        <span className='me-2'> 
                          
                           <Image
                            loading="lazy"
                            src="/9035340_color_filter_outline_icon.svg"
                            alt="iconsguru"
                            width={24}
                            height={24}
                          />
                           
                        </span>    
                        Colors
                      </button>
                    </h2>
                    <div id="collapseOnea" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionPanelsStayOpenExample">
                      <div className="accordion-body">
                           <ul className="options_names cololi-list new-filter-05 p-0 m-0 flex-wrap align-items-center mt-3">
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
                      </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button pe-4 ps-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOneb" aria-expanded="true" aria-controls="collapseOne">
                       <span className='me-2'> 
                           <Image
                            loading="lazy"
                            src="/7148740_category_variety_random_shuffle_icon.svg"
                            alt="iconsguru"
                            width={18}
                            height={18}
                          />
                           
                        </span> 
                         Types
                      </button>
                    </h2>
                    <div id="collapseOneb" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionPanelsStayOpenExample">
                       <div className="accordion-body">
                          <ul className="options_names p-0 m-0 new-filter-05 flex-wrap align-items-center mt-3">
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
                    </div>
                </div>
                <div className="accordion-item">
                   <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button pe-4 ps-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOnec" aria-expanded="true" aria-controls="collapseOne">
                        <span className='me-2'> 
                          
                           <Image
                            loading="lazy"
                            src="/catesicons2.svg"
                            alt="iconsguru"
                            width={18}
                            height={18}
                          />
                           
                        </span>   
                        Sort by
                      </button>
                    </h2>
                    <div id="collapseOnec" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <ul className="options_names p-0 m-0 new-filter-05 flex-wrap align-items-center mt-3">
                    
                          <li className="cmout form-check position-relative" >
                            <input
                              id="name"
                              type="checkbox"
                              className="form-check-input"
                            />
                            <label className="form-check-label">
                              
                              Recent
                            </label>
                          </li>
                          <li className="cmout form-check position-relative" >
                            <input
                              id="name"
                              type="checkbox"
                              className="form-check-input"
                            />
                            <label className="form-check-label">
                            
                              Trending
                            </label>
                          </li>
                      </ul>
                    </div>
                </div>
            </div>

            {/* Types */}
            
           
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
                        <span className='imgs01'>
                            <Image
                              loading="lazy"
                              src="/3D.webp"
                              alt="iconsguru"
                              width={28}
                              height={28}
                            />
                        </span>
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
