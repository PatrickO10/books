import React from 'react';
import * as BooksAPI from './BooksAPI.js'
import ListShelves from './ListShelves.js'

// List books and iterates through the book list
class ListBooks extends React.Component {

	render() {

		let showingBooks = this.props.bookList

		return (
			<ol className="books-grid">
				{showingBooks.map((book) => (
					<li key={book.id} className="book">
						<div className="book-top">
							<div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
							<div className="book-shelf-changer">
								<select value={book.shelf} onChange={(event) => this.props.handleChange(book, event)}>
									<option value="moveTo" disabled>Move to...</option>
									<option value="currentlyReading">Currently Reading</option>
									<option value="wantToRead">Want to Read</option>
									<option value="read">Read</option>
									<option value="none">None</option>
								</select>
							</div>
						</div>
						<div className="book-title">{book.title}</div>
						<div className="book-authors">{book.authors.join(', ')}</div>
					</li>
				))}

			</ol>
			)
	}
}

export default ListBooks