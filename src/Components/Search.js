import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useCallback, useEffect } from "react";
import debounce from 'lodash.debounce';
import Books from './Books'

const api = "https://reactnd-books-api.udacity.com";

let token = localStorage.token;
const headers = {
    Accept: "application/json",
    Authorization: token,
  };

function Search() {
    const [SearchResult, setSearchResult] = useState([]);
    const [query, setSearchInput] = useState("");

    const SearchQueryHandler = (event) => {
        setSearchInput(event.target.value);
       // SearchQuery();
    }
    const debouncedSearchQuery= useCallback(
        debounce(SearchQueryHandler, 300)
   , []);

   const SearchQuery = () => {
        let maxResults = 17;
        if(query !== ""){
            fetch(`${api}/search`, {
                method: "POST",
                headers: {
                ...headers,
                "Content-Type": "application/json",
                },
                body: JSON.stringify({ query, maxResults }),
            })
            .then(response => {
                return response.json()
            })
            .then(data => {
                setSearchResult(data.books)
            })
        }
     }
  

    useEffect(() => {
        SearchQuery()
    }, [query]);

    //console.log(Search.length)
    if(SearchResult.length > 0 ){
        console.log('First :' + SearchResult.length )
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"> Close</Link>

                <div className="search-books-input-wrapper">
                    <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    onChange={debouncedSearchQuery}
                    />
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    {SearchResult.map((book) => (
                        <Books key={book.id} book={book}></Books>
                    ))} 
                </ol>
                </div>
            </div>
        )
    }else{
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/"> Close</Link>

                <div className="search-books-input-wrapper">
                    <input
                    type="text"
                    placeholder="Search by title, author, or ISBN"
                    onChange={debouncedSearchQuery}
                    />
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                   No result for your Search
                </ol>
                </div>
            </div>
        )
    }

}


export default Search;
