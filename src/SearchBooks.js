import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks.js'

// Searches for books 
class SearchBooks extends React.Component {
	state = {
		books: []
	}

	handleInput = (e) => {
		const MAX_RESULTS = 10
		const booksProp = this.props.books
		let query = e.target.value
		let newBookList
		let booksObj = {}
		booksProp.forEach((book) => {
			booksObj[book.id] = book
		})

		if (query !== '') {
			BooksAPI.search(query, MAX_RESULTS).then( (books) => {

				// Make a new array with correct state of shelves.
				// use .map() to loop through each book in result and
				// make sure it has the correct state of shelves.
				newBookList = books.map((book) => {
					// If book.id is in books object then return the book from the books object
					// else change shelf to none and return the book from the books array.
					if(book.id in booksObj) {
						return booksObj[book.id]
					} else {
						book.shelf = 'none'
						return book
					}
				})
				this.setState({books: newBookList})
			})
		}
	}

	render() {
		let searchingBooks = this.state.books

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						<input autoFocus={focus} type="text" placeholder="Search by title or author" onChange={(event) => this.handleInput(event)}/>
					</div>
				</div>
				<div className="search-books-results">
					<ListBooks 
						bookList={searchingBooks}
						handleChange={this.props.handleChange}
					/>
				</div>
			</div>
		)
	}
}

export default SearchBooks