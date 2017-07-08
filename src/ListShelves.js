import React from 'react';
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListShelves extends React.Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	render() {
		const { books } = this.props
		// Create an object to display shelf titles and to filter books accoring to shelf.title
		const shelfTitles = {
			'currentlyReading': 'Currently Reading',
			'wantToRead': 'Want to Read',
			'read': 'Read'
		}

		let showingBooks = books

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

export default ListShelves
