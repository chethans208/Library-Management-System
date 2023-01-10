import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/booklist.css';
const BookList = () => {
    let [book, setBooks] = useState([])
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch('http://localhost:1000/books')
            let data = await response.json()
            setBooks(data)
        }
        fetchdata();
    }, [book])
    // delete book from server
    let handleDelete = (id, title) => {
        fetch(`http://localhost:1000/books/${id}`, {
            method: "DELETE",
        });
        alert(`${title} will be deleted Permanently`)
    }
    let navigate = useNavigate();
    let handleRead = (id) => {
        navigate(`/admin/book-list/${id}`)
    }
    return (
        < div className="booklist" >
            <h1 style={{ textAlign: "center" }}>BooksList : {book.length}</h1>
            <div className="books_section">
                {book.map((data) => (
                    <div className="booksection">
                        <div className="bookimg" style={{ backgroundColor: "white" }}>
                            <img src={data.thumbnailUrl} alt="bookImage" height="250px" width="200px" />
                        </div>
                        <div className="book">
                            <h1 style={{ color: "blue" }}>Title : {data.title}</h1>
                            <h2>Authors : {data.authors.toString()}</h2>
                            <h3>No. of Pages : {data.pageCount}</h3>
                            <h4>Categories : {data.categories}</h4>
                            <button className="readmore" onClick={() => handleRead(data.id)}>Read More</button><br /><br />
                            <button onClick={() => handleDelete(data.id, data.title)} className="dlt">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            {/* <ReadBook data={handleRead} data1={id} /> */}
        </ div>
    );
}

export default BookList;