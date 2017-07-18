import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListShelves from './ListShelves.js'
import SearchBooks from './SearchBooks.js'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  shelves =  {
    'currentlyReading': 'Currently Reading',
    'wantToRead': 'Want to Read',
    'read': 'Read'
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  handleChange = (book, event) => {
    let shelf = event.target.value
    
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState((state) => ({
        books: state.books.filter(bookEl => bookEl.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <ListShelves 
              books={this.state.books}
              shelves={this.shelves}
              handleChange={this.handleChange}
            /> 
          )} 
        />
        <Route path='/search' render={({ history }) => (
            <SearchBooks
              books={this.state.books}
              handleChange={this.handleChange}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
