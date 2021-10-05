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
            <form onChange={handleSubmit} >
                <input className='searchTab' type="text" placeholder="Search For Players" onChange={(e) => setOnSearchValue(e.target.value)}/>
                {/* <button style={{marginLeft: '5px', padding: '5px 10px 5px 10px', fontSize: '16px'}} className="btn submit-btn" type="submit">Search</button> */}
            </form>
        </div>

    )
}

export default SearchBar