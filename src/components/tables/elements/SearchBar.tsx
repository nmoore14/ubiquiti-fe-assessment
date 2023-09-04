import React, { useState, ChangeEvent, useEffect } from 'react';

interface SearchResult {
  id: number;
  name: string;
  // Add other properties as needed
}

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  // Simulated data for search results (replace with your data fetching logic)
  const allSearchResults: SearchResult[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    // Add more results
  ];

  useEffect(() => {
    // Simulated API call or data filtering logic
    const filteredResults = allSearchResults.filter((result) =>
      result.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [searchTerm]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowDropdown(true);
  };

  const handleItemClick = (result: SearchResult) => {
    setSearchTerm(result.name);
    setShowDropdown(false);
  };

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
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        className='searchInput'
        value={searchTerm}
        onChange={handleInputChange}
      />
      {showDropdown && (
        <ul className="searchDropdown searchTermsList">
          {searchResults.map((result) => (
            <li
              className='searchTerm'
              key={result.id}
              onClick={() => handleItemClick(result)}
            >
              {renderBoldText(result.name)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

