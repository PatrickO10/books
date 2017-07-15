import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks.js'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends React.Component {
	state = {
		books: []
	}

	handleInput = (e) => {

		if (e) {
			BooksAPI.search(e.target.value, 10).then( (books) => {
				this.setState({books})
			})
		}
	}

	render() {
		const { books } = this.props

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
					<ListBooks bookList = {searchingBooks} />
				</div>
			</div>
		)
	}
}

export default SearchBooks