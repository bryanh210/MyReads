import React, { Component } from 'react'
import './App'
import BookShelf from './BookShelf'

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
          return (book.shelf === 'currentlyReading')
        })
      },

      {
        id: 'wantToRead',
        title: 'Want To Read',
        bookOnShelf: books.filter((book)=>{
          return (book.shelf === 'wantToRead')
        })
      },

      {
        id: 'read',
        title: 'Read',
        bookOnShelf: books.filter((book)=>{
          return (book.shelf === 'read')
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
              <div>
                {Shelves.map((shelf) =>{
                  return(
                  <BookShelf
                   className="bookshelf-title"
                   title={Shelves.title}
                   key={shelf.id}
                   isRightBook={Shelves.bookOnShelf}
                   books={books}
                   updateBookShelf={updateBookShelf}
                   >{shelf.title}

                  </BookShelf>
              )
            })}
              </div>
          </div>
        </div>


      </div>
    )
  }
}

export default BookShelves
