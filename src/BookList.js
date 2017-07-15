import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './ListBooks.js'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class BookList extends React.Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	state = {
		books: [],
		shelves: {}
	}

	updateShelf = (book, shelf) => {
		BooksAPI.update(book, shelf)
		this.setState({shelves:})
		console.log('updateShelf')
	}

	updateShelves = (book, shelf) => {
		BooksAPI.update(book, shelf)
	}

	render() {
		const { books, shelves } = this.props
		
		this.state.books = books
		let shelfTitles = shelves
		let showingBooks = this.state.books

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					{Object.keys(shelfTitles).map((title) => (
						<div key={title}>
							<div className="bookshelf">
								<h2 className="bookshelf-title">{shelfTitles[title]}</h2>
							<div className="bookshelf-books">
								{/* Filter through showingBooks and filter only those that match book shelf title */}
								<ListBooks
									bookList={showingBooks.filter((book) => (book.shelf === title))}
								/>
							</div>
						</div>
						<div className="open-search">
							<Link to="/search">Add a book></Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)}
}

export default BookList
