import React from 'react';
import * as BooksAPI from './BooksAPI'
import ListShelves from './ListShelves'

class ListBooks extends React.Component {
	state = {
		shelf: '',
		books: []
	}

	render() {
		const {bookList, handleChange} = this.props
		const {shelf, books} = this.state

		let showingBooks = bookList


		return (
			<ol className="books-grid">
				{showingBooks.map((book) => (
					<li key={book.id} className="book">
						<div className="book-top">
							<div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
							<div className="book-shelf-changer">
								<select value={this.state.shelf} onChange={(event) => handleChange(book, event)}>
									<option value="none" disabled>Move to...</option>
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