export default function BooksList(props) {
                
    return (
     <div> 
        <form>
            <label>Book Name</label>
            <input type="text" value={props.input} onChange={props.inputHandler}/>
            <button type="button" onClick={props.onAdd}>Add Book</button>
        </form>
        <ul>
            {props.list.map((book)=>{
                return (
                    <li key={book.id}>
                        <span>{book.name}</span>&nbsp;&nbsp;
                        <button onClick={()=>{props.onRemove(book.id)}}>Delete</button>
                    </li>
                    )
            })}
        </ul>   
    </div>     
    )
    
}