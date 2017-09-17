import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelves from './BookShelves'
import Search from './Search'


class BooksApp extends React.Component {
  state = {

    books: [],


  }

componentDidMount(){
  BooksAPI.getAll().then((books) =>{
    this.setState({books})
    console.log(books)
    console.log(books[0].shelf)
    console.log(books[0].imageLinks.thumbnail)

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

updateBookShelf = (book, shelf) =>{
  BooksAPI.update(book, shelf).then(()=>{
    book.shelf = shelf;
    this.setState({
      books: this.state.books.filter(b => b.id !== book.id).concat([ book ])
    })
  })
}

//remember to put "Route"

render() {
  return (
    <div >
        <Route exact path='/' render={() => (
          <BookShelves
            books={this.state.books}
            updateBookShelf={this.updateBookShelf}
          />
     )}/>

     <Route Search exact path='/search' render={() => (
       <BookShelves
         books={this.state.books}
         updateBookShelf={this.updateBookShelf}
       />
  )}/>
</div>


  )
}
}




export default BooksApp
