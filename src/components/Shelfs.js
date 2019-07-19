import React,{ Component } from 'react'
import BookShelf from './BookShelf'
import * as BooksAPI from '../utils/BooksAPI'

class Shelfs extends Component{

    state={
        books:[],
        shelfs:['currentlyReading','wantToRead','read']
      }
    
    componentDidMount = async()=>{
        let books = await BooksAPI.getAll();
        console.log(books);
        this.setState({books})
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
        let {books,shelfs} = this.state;
        return(
            <div className="list-books-content">
                {shelfs.map((shelf,index)=>(
                    <BookShelf
                    onUpdateBook={this.onUpdateBook} 
                    shelfType={index.toString()}
                    key={index}
                    books={books.filter(book=>book.shelf===shelf)}
                    />
                ))}
            </div>
        )
    }
}

export default Shelfs