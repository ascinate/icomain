"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Select from "react-select";

export default function SidebarFilter({
  onFilterChange,
  onSizeChange,
  showCategoryFilter = true,
}) {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [value, setValue] = useState(35);

  const [filters, setFilters] = useState({
    categories: [],
    colors: [],
    types: [],
  });

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    colors: [],
    types: [],
  });

  useEffect(() => {
    axios
      .get("https://iconsguru.ascinatetech.com/api/sidebar-filters")
      .then((res) => {
        const data = res.data;
        setFilters({
          categories: Array.isArray(data.categories) ? data.categories : [],
          colors: Array.isArray(data.colors) ? data.colors : [],
          types: Array.isArray(data.types) ? data.types : [],
        });
      })
      .catch((err) => console.error("Sidebar filter fetch error:", err))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    if (onFilterChange) {
      onFilterChange(selectedFilters);
    }
  }, [selectedFilters]);

  const handleCheckboxChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const isChecked = prev[filterType].includes(value);
      return {
        ...prev,
        [filterType]: isChecked
          ? prev[filterType].filter((v) => v !== value)
          : [...prev[filterType], value],
      };
    });
  };

  // select type code

  const typeOptions = filters.types.map((type) => ({
    value: type,
    label: type.trim(),
  }));

  const selectedTypeOptions = selectedFilters.types.map((type) => ({
    value: type,
    label: type.trim(),
  }));



  // category selects
const categoryOptions = [
  { value: '', label: 'All Categories' },
  ...filters.categories.map(cat => ({
    value: cat,
    label: cat.trim(),
  })),
]

const handleCategorySelect = (selectedOption) => {
  setSelectedFilters(prev => ({
    ...prev,
    categories: selectedOption?.value
      ? [selectedOption.value]
      : []
  }))
}

  const selectedCategoryOption =
  categoryOptions.find(
    opt => opt.value === (selectedFilters.categories[0] || '')
  ) || null





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
              <div className="crm-nes-styles1 d-block w-100">
                <h3> Types: </h3>
                <ul className="options_names cololi-list new-filter-05 p-1 m-0  align-items-center mt-3">
                  {filters.colors.map((color, i) => {
                    const id = `color-${i}`;
                    return (
                      <li
                        className="cmout form-check position-relative"
                        key={i}
                      >
                        <input
                          id={id}
                          type="checkbox"
                          className="form-check-input"
                          onChange={() => handleCheckboxChange("colors", color)}
                          checked={selectedFilters.colors.includes(color)}
                        />
                        <label className="form-check-label" htmlFor={id}>
                          {color.trim()}
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="crm-nes-styles1 d-block w-100">
                <div className="d-flex align-items-center justify-content-between w-100">
                  <h3> Size: </h3>
                  <strong className="small">{value}</strong>
                </div>

                <input
                  type="range"
                  className="w-100 material-slider"
                  min="16"
                  max="35"
                  step="1"
                  value={value}
                  onChange={(e) => {
                    const newSize = Number(e.target.value);
                    setValue(newSize);
                    onSizeChange?.(newSize);
                  }}
                />
              </div>

              <div className="crm-nes-styles1 d-flex align-items-center justify-content-between w-100">
                <h3> Style: </h3>

                <div className="rights-sectionu01">
                  <Select
                    isMulti
                    options={typeOptions}
                    value={selectedTypeOptions}
                    onChange={(selected) => {
                      setSelectedFilters((prev) => ({
                        ...prev,
                        types: selected
                          ? selected.map((item) => item.value)
                          : [],
                      }));
                    }}
                    placeholder="Select.."
                    className="basic-single"
                    classNamePrefix="react-select"
                  />
                </div>
              </div>
              
             
                <>
                  <div className="crm-nes-styles1 d-flex align-items-center justify-content-between w-100">
                    <h3> Categories: </h3>
                    <Select
                      options={categoryOptions}
                      value={selectedCategoryOption}
                      onChange={handleCategorySelect}
                      placeholder="Select category"
                      isClearable
                      classNamePrefix="react-select"
                    />
                  </div>
                </>
           
            </div>
            {/* Types */}
          </>
        )}
      </div>
    </div>
  );
}
