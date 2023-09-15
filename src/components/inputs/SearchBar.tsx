import { useState, ChangeEvent, useEffect } from 'react';
import { ISearchItem } from '../../types';

interface SearchBarProps {
  searchItems: ISearchItem[]; // Define the prop for custom search items
  searchSelect: (deviceId:string) => void;
}

export default function SearchBar({ searchItems, searchSelect }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ISearchItem[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    const filteredResults = searchItems.filter((result) =>
      result.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [searchTerm]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const hideResults = () => {
    setShowDropdown(false)
  }

  const handleItemClick = (result: ISearchItem) => {
    setShowDropdown(false)
    searchSelect(result.id)
  }

  const renderBoldText = (text: string) => {
    const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());
    if (index === -1) {
      return text;
    }
    const beforeMatch = text.slice(0, index);
    const match = text.slice(index, index + searchTerm.length);
    const afterMatch = text.slice(index + searchTerm.length);
    return (
      <span>
        {beforeMatch}
        <span className='searchMatch'>{match}</span>
        {afterMatch}
      </span>
    );
  };

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Search"
        className='searchInput'
        value={searchTerm}
        onChange={ handleInputChange }
        onBlur={ hideResults }
      />
      {showDropdown && (
        <ul className="searchDropdown searchTermsList">
          { searchResults.length < 1 &&
            <li
              className='flex flex-row justify-between items-center searchTermDisabled'
            >
              No Results...
            </li>
          }
          {searchResults.length >= 1 && searchResults.map((result) => (
            <li
              className='flex flex-row justify-between items-center searchTerm'
              key={result.id}
              onMouseDown={ () => handleItemClick(result) }
            >
                { renderBoldText(result.name) }
              <span className='searchTermShortName'>
                { result.shortName }
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
