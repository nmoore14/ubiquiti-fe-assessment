import React, { useState } from 'react';

interface FilterDropdownProps<T> {
  items: T[];
  type: 'checkbox' | 'dropdown' | 'select';
  onSelect: (selectedItem: string) => void;
  onClickReset: () => void;
}

function FilterDropdown<String>({ items, type, onSelect, onClickReset }: FilterDropdownProps<String>): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const filterItems:any = items.map((item, index) => (
    <div
      key={index}
      className='flex flex-row nowrap justify-start items-center productLineItem'
    >
      <input type='checkbox' value={item} onChange={ () => onSelect(item) }/>
      <label>{item}</label>
    </div>
  ))

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
          {type === 'checkbox' && filterItems}
          <button
            className='btn btnGhost btnWarning'
            onClick={ onClickReset }
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
