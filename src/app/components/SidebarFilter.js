'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image';
import Select from 'react-select';

const options = [
  { value: 'thin', label: 'Thin' },
  { value: 'regular', label: 'Regular' },
  { value: 'bold', label: 'Bold' },
];

export default function SidebarFilter({ onFilterChange, showCategoryFilter = true }) {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true)

  const [value, setValue] = useState(50);


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


  const [selectedOption, setSelectedOption] = useState(null);


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
              
                
                <div className='crm-nes-styles1 d-block w-100'>
                  <h3> Types: </h3> 
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
                <div className='crm-nes-styles1 d-block w-100'>
                    <div className='d-flex align-items-center justify-content-between w-100'>
                      <h3> Size: </h3>  
                      <strong className='small'>{value}</strong>
                    </div>
                    
                    <input
                        type="range"
                        className=" w-100 material-slider"
                        min="0"
                        max="100"
                        step="1"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                      />
                </div>

                <div className='crm-nes-styles1 d-flex align-items-center justify-content-between w-100'>
                     <h3> Style: </h3> 

                     <div className='rights-sectionu01'>

                        <Select
                            isMulti
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                          />
                     </div>
                        {/* <ul className="options_names  m-0 new-filter-05 flex-wrap align-items-center mt-3">
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
                        </ul> */}
                </div>

                <div className='crm-nes-styles1 d-flex align-items-center justify-content-between w-100'>
                     <h3> Category: </h3> 

                     <div className='rights-sectionu01'>

                        <Select
                            isMulti
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                          />
                     </div>
                        {/* <ul className="options_names  m-0 new-filter-05 flex-wrap align-items-center mt-3">
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
                        </ul> */}
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
