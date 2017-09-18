import React, {Component} from 'react'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import  Book from './Book'


class Search extends React.Component{

  state = {
    query: '',
    bookResult: []
  }

//Need to understand these things
//.then isn't part of the API's promise. It's something we add on
Search = (query) => {
  this.setState({query: query.trim() })
  BooksAPI.search(query.trim(), 50).then( (bookResults) =>{
    // if there's no book matching the query
    if(!bookResults || bookResults.error){
      console.log('no books matching the query or error')
      this.setState({bookResult: []})
    } else{
      bookResults.sort(sortBy('title'))
      this.setState({bookResult: bookResults})
      console.log('Found book(s)')
      // console.log(bookResults)
    }
  }).catch((error) => {
    //catch any errors in console
    console.error(error)
  })
}

// clearQuery = (query) =>{
//   this.setState({query: ''})
// }

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
console.log(this.state.bookResult)

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
              placeholder="Search by title"
              value={query}
              onChange={(event) => this.Search(event.target.value)}
            />
        </div>
      </div>



      <div className="search-books-results">
        <ol className="books-grid">
          {bookResult.map((book) =>{
          return (<li key={book.id} className="book">
            <Book
              key={book.id}
              books={books}
              updateBookShelf={updateBookShelf}
              bookTitle={book.title}
              book={book}>
            </Book>
            </li>
            )
    })
  }
      </ol>
</div>



  </div>

    )
  }

}

export default Search
