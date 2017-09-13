import React, { Component } from 'react'
// import App from './App'
// import BookShelves from './BookShelves'
import Book from './Book'

class BookShelf extends Component{
  // <className="book-list-item"
  // key={book1.id}
  // bookTitle={book1.title}
  //
  // isRightBook={book1.isRightBook}
  // updateBookShelf={updateBookShelf}>{book1.title}</div>


//if statement in here
  render(){
    const { shelfTitle, isRightBook, books, updateBookShelf, shelf} = this.props

    return(

      <div className="bookshelf-books">
        <div className="bookshelf-title">{this.props.children}</div>
          <ol className="books-grid">
            <li>
                  <div>
                  {books.map((book1) =>{
                    if(book1.shelf===shelf.id){
                      return (
                        <Book
                        className="book"
                        key={ book1.id}
                        shelfTitle={ shelfTitle}
                        isRightBook={isRightBook}
                        books={books}
                        updateBookShelf={updateBookShelf}
                        bookTitle={book1.title}
                        book={book1}

                        >
                         {book1.title}
                        </Book>
                        )
                    }
              })}
                  </div>
            </li>
          </ol>
      </div>

    )
  }
}

export default BookShelf
