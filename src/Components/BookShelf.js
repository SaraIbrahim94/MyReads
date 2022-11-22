import Books from './Books'
import { useContext } from "react";
import { Context } from "./Context";

function BookShelf({ data }) {
  //let books = data.books;
  //console.log(data.setBooks);
  const { AllBooksData, setBooks } = useContext(Context);

  const currentlyReading = AllBooksData.map((book) => {
    if(book.shelf == 'currentlyReading'){
      return(
        <Books key={book.id} book={book}></Books>
      )
    }
  })

  const WantToRead = AllBooksData.map((book) => {
    if(book.shelf == 'wantToRead'){
      return(
        <Books key={book.id} book={book}></Books>
      )
    }
  })

  const Read = AllBooksData.map((book) => {
    if(book.shelf == 'read'){
      return(
        <Books key={book.id} book={book}></Books>
      )
    }
  })
  return (
    <div>
         <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
            {currentlyReading}
            </ol>
          </div>
        </div>

         <div className="bookshelf">
          <h2 className="bookshelf-title">Want To Read</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
            {WantToRead}
            </ol>
          </div>
        </div>

         <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
            {Read}
            </ol>
          </div>
        </div>
    </div>
  );
}

export default BookShelf;
