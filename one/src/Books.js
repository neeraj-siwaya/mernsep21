import React from 'react';
import BooksList from './BooksList';

export default class Books extends React.Component {
    
    constructor(props){
            super(props)
            this.state = {
                books: [
                    {id:1, name: 'Who moved my cheese'},
                    {id:2, name: 'The Alchemist'},
                    {id:3, name: 'The Choice'},
                    {id:4, name: 'You can win'}
                ],
                bookName: '',
                nextId:5
            }
        }
    
    getBookName =(event)=>{
        this.setState(()=>{
            return {
                bookName: event.target.value
            }
        })
    }    

    addBook = ()=>{
        this.setState((currentState)=>{
            return{
                books: currentState.books.concat({ 
                      id: this.state.nextId,
                      name: this.state.bookName
            }),
             nextId: this.state.nextId + 1,
             bookName: ''
        }
    })
    }

    removeBook=(id)=>{
       
            this.setState((currentState)=>{
                return{
                    books: currentState.books.filter((book)=>{ 
                    return book.id !== id
                })
            }
        })
    }
    render() {
        return (
        <div>
        <BooksList list={this.state.books} input={this.state.bookName} 
        onRemove={this.removeBook} inputHandler={this.getBookName}
        onAdd={this.addBook}/> 
        </div>
    )
    }
    
}
