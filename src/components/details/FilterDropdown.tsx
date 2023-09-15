import { useState } from 'react';

interface FilterDropdownProps {
  items: string[];
  type: 'checkbox' | 'dropdown' | 'select';
  onSelect: (selectedItem: string) => void;
  onClickReset: () => void;
}

export default function FilterDropdown({ items, type, onSelect, onClickReset }: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const filterItems:any = items.map((item, index) => (
    <div
      key={index}
      className='flex flex-row nowrap justify-start items-center productLineItem'
    >
      <label className='flex flex-row nowrap justify-start items-center'>
        <input type='checkbox' value={item} name={`${item}-checkbox`} onChange={ () => onSelect(item) }/>
        {item}
      </label>
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
