// React utilities
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Files
import iconSearch from '../img/search_FILL0.png';
//Styles
import 'bootstrap/dist/css/bootstrap.css';
import './SearchBar.css';


export default function SearchBar() {
    // Hooks
    const navigate = useNavigate();
    const [name, setName] = useState('')
    // Save every change that occurs in the SearchBar
    function handleInputChange(e) {
        e.preventDefault();
        setName(e.target.value);
    }
    // Send the content that is in the SearchBar
    function handleSubmit(e) {
        e.preventDefault();
        if (name) {
            navigate(`/home?name=${name}`)
        }
    }

    return (
        <div className='containerSearchBar d-flex'>
            <form className="d-flex input-group" role="search" onSubmit={(e) => { handleSubmit(e) }}>
                <button
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                    type='submit'
                >
                    <img src={iconSearch} alt="search Icon" width="25" height="25" />
                </button>
                <input
                    className="form-control me-2"
                    value={name}
                    name={"name"}
                    onChange={(e) => { handleInputChange(e) }}
                    placeholder='Type your search...'
                />
            </form>
        </div>
    )
}