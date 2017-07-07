import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

// List books for searching and main page
class ListBooks extends React.Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	render() {
		// Define props and query state
		const { books } = this.props
		// Create an object to display shelf titles and to filter books accoring to shelf.title
		const shelfTitles = {
			'currentlyReading': 'Currently Reading',
			'wantToRead': 'Want to Read',
			'read': 'Read'
		}

		let showingBooks
		showingBooks = books

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
								<ol className="books-grid">
									{/* Filter through showingBooks and show only those that match book shelf title */}
									{showingBooks.filter((book) => (book.shelf === title )).map((book) => (
										<li key={book.id} >
											<div className="book">
												<div className="book-top">
													<div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
													<div className="book-shelf-changer">
														<select>
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
											</div>
										</li>
									))}
								</ol>
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

export default ListBooks
