import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './components/SearchBook'
import BookShelf from './components/BookShelf'
import OpenSearch from './components/OpenSearch'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={()=>(
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <BookShelf shelfType='0'/>
            <BookShelf shelfType='1'/>
            <BookShelf shelfType='2'/>
          </div>
          <OpenSearch />
        </div>
        )}/>

        <Route exact path='/search' render={()=>(
          <SearchBook />
        )}/>
      </div>
    )
  }
}

export default BooksApp
