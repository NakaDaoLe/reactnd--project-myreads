import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book'

class SearchBook extends Component{
  state={
    query:'',
    books:[],
    loading:false
  }

  handleInputChange = (e) =>{
    this.setState({query:e.target.value.trim()});
    this.searchQuery(e.target.value);
  }

  searchQuery = async (query) =>{
    let result = '';
    this.setState({loading:true})
    let resonse = await BooksAPI.search(this.state.query);
    this.setState({loading:false})
    if(resonse===undefined){
      result = 'not found';
    }else if(resonse.error){
      result = 'not found';
    }else{
      result = resonse;
    }
    this.setState({books:result});
  }

  render(){
    const {books,loading} = this.state
    return(
        <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/' >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleInputChange}
            />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">

            {books !== 'not found' && (
              books.map((book,index)=>(
                <li key={index}>
                  <Book name={book.title} author={book.authors} backgroundImageURL={book.imageLinks.smallThumbnail}/>
                </li>
            ))
            )}

            {loading && (
                <div className="results-loading">
                  loading...
                </div>
            )}

            {books === 'not found'&& !loading && (
              <div>Not found</div>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook