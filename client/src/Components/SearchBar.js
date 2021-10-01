import { useState } from 'react'

function SearchBar({ setSearchInput }) {
    const [ searchValue, setOnSearchValue ] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if (searchValue.length > 0) {
            setSearchInput(searchValue)
        }
    }

    return (
        <div className ='searchBar'>
            <form  onChange={handleSubmit} >
                <input style={{marginLeft: '5px'}} className='searchTab' type="text" placeholder="Search For Players" onChange={(e) => setOnSearchValue(e.target.value)}/>
            </form>
        </div>

    )
}

export default SearchBar