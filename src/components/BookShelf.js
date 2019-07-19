import React,{ Component } from 'react'
import Book from './Book'
import * as BooksAPI from '../utils/BooksAPI'

class BookShlef extends Component{
  state={
    books:[]
  }

  async componentDidMount(){
    let books = await BooksAPI.getAll();
    this.setState({books:books.filter(book=>this.isMatchCurrentShelf(book))})
  }

  renderShelfName = (shelfType)=>{
    let typeName='';
    switch(shelfType){
      case '0': typeName = 'Currently Reading';break;
      case '1': typeName = 'Want to Read';break;
      case '2': typeName = 'Read';break;
    }
    return typeName;
  }

  isMatchCurrentShelf = (book) =>{
    let isMatch = false;
    if(book.shelf==="currentlyReading"&&this.props.shelfType==='0'){
      isMatch = true;
    }else if(book.shelf==="wantToRead"&&this.props.shelfType==='1'){
      isMatch = true;
    }else if(book.shelf==="read"&&this.props.shelfType==='2'){
      isMatch = true;
    }
    return isMatch;
  }

  render(){
      //const {books} = this.state;

      return(
          <div className="bookshelf">
          <h2 className="bookshelf-title">{this.renderShelfName(this.props.shelfType)}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.state.books.map((book,index)=>(
                <li key={index}>
                  <Book id={book.id} name={book.title} author={book.authors} backgroundImageURL={book.imageLinks.smallThumbnail}/>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )
  }
}

export default BookShlef