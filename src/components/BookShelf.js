import React,{ Component } from 'react'
import Book from './Book'

class BookShlef extends Component{

  renderShelfName = (shelfType)=>{
    let typeName='';
    switch(shelfType){
        case '0': typeName = 'Currently Reading';break;
        case '1': typeName = 'Want to Read';break;
        case '2': typeName = 'Read';break;
    }
    return typeName;
}

  render(){
    let {shelfType,books,onUpdateBook} = this.props;
    console.log(books);
    
    return(
        <div className="bookshelf" key={this.props.index}>
        <h2 className="bookshelf-title">{this.renderShelfName(shelfType)}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book,index)=>(
              <li key={index}>
                <Book
                onUpdateBook={onUpdateBook}
                id={book.id}
                shelf={book.shelf}
                name={book.title}
                author={book.authors}
                backgroundImageURL={book.imageLinks.smallThumbnail}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

BookShlef.defaultTypes={
  books:[],
  onUpdateBook:()=>{},
  shelfType:'0'
}

export default BookShlef