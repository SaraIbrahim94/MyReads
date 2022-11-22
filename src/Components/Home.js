import React from 'react'
import { useEffect, useContext } from "react";
import BookShelf from "./BookShelf";
import { getAll } from "../BooksAPI";
import { Link } from 'react-router-dom';
import { Context } from "./Context";

function Home() {
  const { AllBooksData, setBooks } = useContext(Context);
 // console.log(AllBooksData)
    const AllBooks = () => {
      getAll()
        .then(response => {
          return response.json()
        })
        .then(data => {
          setBooks(data.books);
        })
    }
    useEffect(() => {
      AllBooks()
    }, [])
    
    /*const CurrentlyReadingBooks = GetBooksBasedShelf("currentlyReading", AllBooksData);
    const WantTpReadingBooks = GetBooksBasedShelf("wantToRead", AllBooksData);
    const ReadBooks = GetBooksBasedShelf("read", AllBooksData);
    const [CurrentlyReadingBooks_, setCurrentlyReadingBooks] = useState(CurrentlyReadingBooks);
    console.log('CR : '+CurrentlyReadingBooks_)*/
    
    return (
        <div>
            <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                <BookShelf data={{ Shelf_title: 'Currently Reading', books: AllBooksData }}/> 
               {/*     <BookShelf data={{ Shelf_title: 'Currently Reading', books: AllBooksData }}/> 
                 <BookShelf data={{ Shelf_title: 'Currently Reading', books: CurrentlyReadingBooks }}/> 
                <BookShelf data={{ Shelf_title: 'Want to Read', books: WantTpReadingBooks }}/> 
                <BookShelf data={{ Shelf_title: 'Read', books: ReadBooks }}/>  */}
                </div>
            </div>
            <div className="open-search">
            <Link to="Search"> Add a book </Link>
            </div>
            </div>
        </div>
    )
}

/*
function GetBooksBasedShelf(ShelfName, AllBooks){
    let resultBooks = [];
      AllBooks.map(book => {
          if(book.shelf === ShelfName)
            resultBooks.push(book);
        })
    return resultBooks;
  }
  */

export default Home;