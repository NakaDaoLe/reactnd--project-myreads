import React,{ Component } from 'react'
import * as BooksAPI from '../utils/BooksAPI'

class ChangeButton extends Component{

  handleChange = (e)=> {
    this.props.onUpdateBook(this.props.bookId,e.target.value);
  }

  render(){
      let {shelf}=this.props;

      return(
          <div className="book-shelf-changer">
          <select value='move' onChange={this.handleChange}>
            <option value="move" disabled>Move to...</option>
            {shelf!=='currentlyReading'&&(<option value="currentlyReading">Currently Reading</option>)}
            {shelf!=='wantToRead'&&(<option value="wantToRead">Want to Read</option>)}
            {shelf!=='read'&&(<option value="read">Read</option>)}
            {shelf!=='none'&&(<option value="none">None</option>)}
          </select>
        </div>
      )
  }
}

ChangeButton.defaultProps={
  bookId:'',
  shelf:'',
  onUpdateBook:()=>{}
}

export default ChangeButton