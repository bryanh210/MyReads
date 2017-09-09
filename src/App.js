import React from 'react'
//import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import DisplayBooks from './DisplayBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
     showSearchPage: false,
    books: [],


  }

componentDidMount(){
  BooksAPI.getAll().then((books) =>{
    this.setState({books})
    console.log(books)
  })
}

//backend update
//loop thru state object. If shelf matches, then add that in. otherwise, skip
// updateBooks = (book, shelf) =>{
//   bookAPI.update(book, shelf).then(()=>{
//     book.shelf = shelf;
//     this.setState({books: this.state.filter((b) =>{
//       b.id !== book.id).concat([book])
//   }); }) }

UpdateBooks = (book, shelf) =>{
  BooksAPI.update(book, shelf).then(()=>{
    book.shelf = shelf;
    this.setState({
      books: this.state.filter(b => b.id !== book.id).concat([ book ])
    })
  })
}

render() {
  return (
    <div>
      <DisplayBooks
        books={this.state.books}
      />

    </div>
  )
}
}

export default BooksApp
