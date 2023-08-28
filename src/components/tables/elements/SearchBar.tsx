import * as React from 'react'

export default function SearchBar() {
  const [searchItem, setSearchItem] = React.useState('')

  const handleInput = (e: any) => {
    e.preventDefault()
    setSearchItem(e.target.value)
    console.log(searchItem)
  }

  return (
    <div>
      <input
        onChange={ handleInput }
        className='searchInput'
        placeholder='Search'
      />
    </div>
  )
}
