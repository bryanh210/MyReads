import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class Search extends React.Component{

  state = {
    query: '',
    bookResult: []
  }

//Need to understand these things
//.then isn't part of the API's promise. It's something we add on
Search = (query) => {
  this.setState({query: query.trim() })
  BooksAPI.search = (query.trim(), 50).then( (bookResults) =>{
    // if there's no book matching the query
    if(!bookResults){
      console.log('no books matching the query')
      this.setState({bookResult: []})
    } else{
      bookResults.sort(sortBy('title'));
      this.setState({bookResult: bookResults})
    }
  })
}

clearQuery = (query) =>{
  this.setState({query: ''})
}

//omit the a, replace it with Link
  render(){

    const {books, updateBookShelf, wholeLibrary} = this.props
    const {query, bookResult} = this.state
  //
  //   let showingBooks;
  //   if(query){
  //     const match = new RegExp(escapeRegExp(this.state.query), 'i')
  //     showingBooks = this.props.books.filter((book) =>{ return (match.test(book.title))})}
  //     else{
  //       showingBooks = books
  //     }
  // showingBooks.sort(sortBy('title'));


    return(

      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"

            to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */
          }
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.Search(event.target.value)}
            />
        </div>
      </div>



      <div className="search-books-results">
          {bookResult.map((book) =>{
        <ol className="books-grid"
          key="book.id"
          style={{ width: 128, height: 193,
            backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{(book.authors.length >1) ? book.authors.join(" , "): book.authors}</div>
        </ol>
      })}
    </div>

    <div className="open-search">
      <a>Add a book</a>
    </div>

  </div>

    )
  }

}

export default Search
