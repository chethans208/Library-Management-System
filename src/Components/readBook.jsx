import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ReadBook = () => {
    let [book, setBook] = useState([])

    let params = useParams()
    useEffect(() => {
        let fetchdata = async () => {
            let response = await fetch(`http://localhost:1000/books/${params.id}`)
            let data = await response.json()
            setBook(data)
        }
        fetchdata();
    }, [])
    
    let navigate = useNavigate()
    let readless = () => {
        navigate('/admin/book-list')
    }
    return (
        <div className="readBooks">
            <div className="card">
                <div className="booktitle">
                    <h1>Read Book: </h1>
                    <h2>{book.title}</h2>
                    <p>{book.shortDescription}</p>
                    <button onClick={readless} style={{color:"black",padding:"5px 10px"}}>Read less</button>
                </div>
            </div>
        </div>
    );
}

export default ReadBook;