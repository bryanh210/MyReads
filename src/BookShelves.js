import React, { Component } from 'react'
// import './App.css'

class BookShelves extends Component{

  state = {
    
  }

//only include the part where it displays books
  render(){
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf" />
          </div>
        </div>


      </div>
    )
  }
}

export default BookShelves
