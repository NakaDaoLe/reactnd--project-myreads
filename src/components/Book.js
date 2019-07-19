import React,{ Component } from 'react'
import ChangeButton from './ChangeButton'

class Book extends Component{
  state={
    width:128,
    height:188,
  }

  render(){
      const {width,height} = this.state;
      const {name,author,backgroundImageURL,id,shelf} = this.props;

      return(
        <div className="book">
          
          <div className="book-top">
              <div className="book-cover" style={
                { width,
                  height,
                  backgroundImage: `url(${backgroundImageURL})` }}>
              </div>
            <ChangeButton onUpdateBook={this.props.onUpdateBook} bookId={id} shelf={shelf}/>
          </div>
          <div className="book-title">{name}</div>
          <div className="book-authors">{author}</div>
        </div>
      )
  }
}

Book.defaultProps = {
  name:'name',
  author:'author',
  backgroundImageURL:'',
  id:'0',
  shelf:'',
  onUpdateBook:()=>{}
}

export default Book