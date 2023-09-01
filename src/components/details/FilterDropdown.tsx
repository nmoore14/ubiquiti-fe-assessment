import React, { useState } from 'react';

interface FilterDropdownProps<T> {
  items: T[];
  type: 'checkbox' | 'dropdown' | 'select';
  onSelect: (selectedItem: T) => void;
}

function FilterDropdown<String>({ items, type, onSelect }: FilterDropdownProps<String>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<String | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemSelect = (item: String) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
    console.log(item)
  };

  return (
    <div className="productLineDropdown">
      <button
        className={ isOpen ? 'btn btnGhost btnActive' : 'btn btnGhost' }
        onClick={toggleDropdown}
      >
        Filter
      </button>
      {isOpen && (
        <div className='dropdown'>
          <h3>Product Line</h3>
          {type === 'checkbox' && (
            <>
              {items.map((item:String, index) => (
                <div
                  key={index}
                  className='flex flex-row nowrap justify-start items-center productLineItem'
                >
                  <input type='checkbox' value={item} onChange={ handleItemSelect }/>
                  <label>{item}</label>
                </div>
              ))}
            </>
          )}
        </div>
      )}
      {selectedItem && (
        <p>Selected: {selectedItem.toString()}</p>
      )}
    </div>
  );
}

export default FilterDropdown;
