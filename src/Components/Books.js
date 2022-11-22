import {useState, useEffect, useCallback, useContext} from 'react';
import { update } from "../BooksAPI";
import { Context } from "./Context";
import { getAll } from "../BooksAPI";
import { get } from "../BooksAPI";

function Books(props) {
    let bookSehlf = ''
    if(props.book.shelf !== undefined || props.book.shelf !== '')
    bookSehlf = props.book.shelf;
    
    const [ShelfValue, setShelfBook] = useState(bookSehlf);
    //const [OptionValue, setOption] = useState(ShelfValue);
    const { AllBooksData, setBooks } = useContext(Context);

    if(props.book.shelf === '' || props.book.shelf === undefined){
      get(props.book.id).then(response => {
        return response.json()
      })
      .then(data => {
        //console.log(data)
        if(data.book.shelf !== ShelfValue){
          setShelfBook(data.book.shelf);
        }
       // else console.log('');
      });
    }
   // console.log(ShelfValue)

    const OptionUpdateInDB = (event) => {
      if(ShelfValue !== undefined ){
        update(props.book, ShelfValue)
        AllBooks();
      }
    }

    const OptionChanged = (event) => {
      setShelfBook(event.target.value);
    }

    useEffect(() => {
      OptionUpdateInDB()
    }, [ShelfValue]);

    const AllBooks = () => {
      getAll()
        .then(response => {
          return response.json()
        })
        .then(data => {
          setBooks(data.books);
        })
    }

    function getAuthours(){
      if(props.book.authors?.length == 1){
          return(
            <span key={1}>
                {props.book.authors} <br></br>
            </span>
          )
        }
        else if (props.book.authors?.length > 1){
          props.book.authors.map((author, index) => {
            return(
              <span key={index}>
                  {author} <br></br>
              </span>
            )
          })
        }
      }

    const autohrs = getAuthours();

    function getImgeLink (){
      return (props.book.imageLinks? props.book.imageLinks.smallThumbnail : '' );
    }

    const imgURL = getImgeLink();
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${imgURL})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select value={ShelfValue} onChange={OptionChanged}>
                <option disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{props.book.title}</div>
          <div className="book-authors">
            {autohrs}
          </div>
        </div>
      </li>
    );
  }

 export default Books;