import React from 'react';
import BooksList from './BooksList';
import axios from 'axios';

export default class Books extends React.Component {
    
    
    constructor(props){
        super(props)
        this.state = {
            books: [],
            bookName: '',
            nextId:5,
            loading:true
        }
        console.log("Books component is created.");
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
        console.log("Books component is rendered.");
        if(this.state.loading) {
            return <h1>Loading books...</h1>
        }
        return (
        <div>
        <BooksList list={this.state.books} input={this.state.bookName} 
        onRemove={this.removeBook} inputHandler={this.getBookName}
        onAdd={this.addBook}/> 
        </div>
    )
    }
    //other life-cycle method
    componentDidMount(){
        console.log("Books component is mounted.");
        let instance = axios.create({
            baseURL: 'http://localhost:4000/books'
        });
        // fetching books from the api
        instance.get()
        .then((response)=>{
            console.log('Following data is received: ', response.data)
            this.setState((currentState)=>{
                return{
                    books: response.data,
                    loading: false
            }
        })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Books component is updated.");
    }
    componentWillUnmount(){
        console.log("Books component is unmounted.");
    }

    
}
