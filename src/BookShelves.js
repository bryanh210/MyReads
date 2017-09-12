import React, { Component } from 'react'
import './App'

//this component is to render the different shelves
class BookShelves extends Component{

  // state = {
  //   currentlyReading: "Currently Reading",
  //   wantToRead: "Want To Read",
  //   read: "Read"
  //
  // }



//only include the part where it displays books
  render(){

    const {books, updateBookShelf} = this.props

  const Shelves = [
      {
        id: 'currentlyreading',
        title: 'Currently Reading',
        bookOnShelf: books.filter((book)=>{
          book.shelf === 'currentlyReading'
        })
      },

      {
        id: 'wantToRead',
        title: 'Want To Read',
        bookOnShelf: books.filter((book)=>{
          book.shelf === 'wantToRead'
        })
      },

      {
        id: 'read',
        title: 'Read',
        bookOnShelf: books.filter((book)=>{
          book.shelf === 'read'
        })
      }
  ]

    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf"  />
            {Shelves.map((shelf) =>{
              return(
              <h2 className="bookshelf-title" title={Shelves.title} key={shelf.id} book={Shelves.bookOnShelf} books={books}>{shelf.title}</h2>
              )
            })}
          </div>
        </div>


      </div>
    )
  }
}

export default BookShelves
