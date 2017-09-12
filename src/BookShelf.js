import React, { Component } from 'react'
import App from './App'
import BookShelves from './Bookshelves'

class BookShelf extends Component{



//if statement in here
  render(){
    const { title, id, book, books, updateBookShelf} = this.props

    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <div className="book">
                books.map((book) =>{
                  return(



        )
      })
            </div>
          </li>
          </ol>
      </div>

    )
  }
}
