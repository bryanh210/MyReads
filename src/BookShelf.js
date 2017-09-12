import React, { Component } from 'react'
import App from './App'
import BookShelves from './BookShelves'

class BookShelf extends Component{



//if statement in here
  render(){
    const { title, id, book, books, updateBookShelf} = this.props

    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>

                books.map((book) =>{
                   (
                    <div className="book"
                    title={title}
                    id={id}
                    book={book}
                    updateBookShelf={updateBookShelf}/>
              )
            })

          </li>
          </ol>
      </div>

    )
  }
}
