import React from 'react';
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks.js'
import PropTypes from 'prop-types'

// Lists the shelves and iterates through the shelves object
class ListShelves extends React.Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}

	render() {
		let shelfTitles = this.props.shelves
		let showingBooks = this.props.books

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
									handleChange={ this.props.handleChange }
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
