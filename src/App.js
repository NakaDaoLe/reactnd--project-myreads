import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './components/SearchBook'
import OpenSearch from './components/OpenSearch'
import {Route} from 'react-router-dom'
import * as BooksAPI from './utils/BooksAPI'
import Shelfs from './components/Shelfs'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  onUpdateBook = async (bookId,shelf) => {
    let res = await BooksAPI.update(bookId,shelf);
    console.log(res);
    this.getBooks();
  }

  render() {
    return (
      <div className="app">

        <Route exact path='/' render={()=>(
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <Shelfs/>
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
