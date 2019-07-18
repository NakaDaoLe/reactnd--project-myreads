import React,{ Component } from 'react'
import {Link} from 'react-router-dom'
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book'

class SearchBook extends Component{
  state={
    query:'',
    books:[]
  }

  handleInputChange = (e) =>{
    this.setState({query:e.target.value.trim()});
    this.searchQuery(e.target.value);
  }

  searchQuery = async (query) =>{
    let result = '';
    let resonse = await BooksAPI.search(this.state.query);
    if(resonse===undefined){
      result = 'not found';
    }else if(resonse.error){
      result = 'not found';
    }else{
      result = resonse;
    }
    this.setState({books:result}); 
    console.log(this.state.books)
  }

  render(){
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

              {this.state.books !== 'not found' && (
                this.state.books.map((book,index)=>(
                  <li key={index}>
                    <Book name={book.title} author={book.authors} backgroundImageURL={book.imageLinks.smallThumbnail}/>
                  </li>
              ))
              )}

              {this.state.books === 'not found' && (
                <div>Not found</div>
              )}
            </ol>
          </div>
        </div>
      )
  }
}

export default SearchBook