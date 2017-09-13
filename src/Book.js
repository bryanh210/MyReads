import React, { Component } from 'react'

class Book extends Component{



  render(){

  const { shelfTitle, isRightBook, books, updateBookShelf, shelf, bookTitle, book} = this.props


    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
            backgroundImage: `url(${book.imageLinks.thumnail})`}}>
            <select onChange={(e) => {updateBookShelf(book, e)}}  >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}
