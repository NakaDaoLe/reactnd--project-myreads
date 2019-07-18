import React,{ Component } from 'react'
import Book from './Book'

class BookShlef extends Component{
    render(){
        return(
            <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                <li><Book /></li>
                <li><Book /></li>
                <li><Book /></li>
                <li><Book /></li>
              </ol>
              <ol className="books-grid">
                <li><Book /></li>
                <li><Book /></li>
                <li><Book /></li>
                <li><Book /></li>
              </ol>
            </div>
          </div>
        )
    }
}

export default BookShlef