import './Search.css';
import React from 'react';
import imgSearch from '../../../assets/img/Search.svg'
import imgClose from '../../../assets/img/Close.svg'

function Search({ searchValue, setSearchValue }) {
    return (
        <div className='search__items'>
            <img className='search__img search__img-search' src={imgSearch} alt='img'></img>
            <input value={searchValue} onChange={item => setSearchValue(item.target.value)} className='search__input' placeholder='Search....'></input>
            {searchValue && (
                <img onClick={() => setSearchValue('')} className='search__img search__img-close' src={imgClose} alt='img'></img>
            )
            }
        </div>
    )
}

export default Search;