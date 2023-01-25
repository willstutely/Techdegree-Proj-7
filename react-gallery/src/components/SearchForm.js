import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// SearchForm functional component uses the useRef hook to set the searchTerm state
// to the user's input on the search form. 
const SearchForm = ({ setSearchTerm }) => {
    const input = useRef();
    const navigate = useNavigate();

    // function to take the user's input and update the searchTerm state
    // which makes a change to the searchTerm state and automatically call the performSearch
    // function in the App component.  It also uses the useNavigate hook to update the url path
    // dynamically to the user input.
    const handleSubmit = (e) => {
        e.preventDefault();
        let userInput = input.current.value;
        setSearchTerm(userInput)
        let path = `/search/${userInput}`
        navigate(path);
        e.target.reset()
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="search"
                ref={input}
                name="search"
                placeholder="Search"
            />
            <button type="submit" className="search-button">
                <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
        </form>
    )
}

export default SearchForm;

