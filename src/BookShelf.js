import React, { Component } from 'react'
// import App from './App'
// import BookShelves from './BookShelves'

class BookShelf extends Component{
  // <className="book-list-item"
  // key={book1.id}
  // bookTitle={book1.title}
  //
  // isRightBook={book1.isRightBook}
  // updateBookShelf={updateBookShelf}>{book1.title}</div>


//if statement in here
  render(){
    const { title, id, isRightBook, books, updateBookShelf, shelf} = this.props

    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
                <div>
                 {shelf.title}
                {books.map((book1) =>{
                   return (
                     <div className="book-list-item" key ={ book1.id}>

                      {book1.title}


                       </div>

              )
            })}
                </div>

          </li>
          </ol>
      </div>

    )
  }
}

export default BookShelf
