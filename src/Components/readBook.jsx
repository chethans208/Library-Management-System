import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    return (
        <div className="readBooks">
            <div className="card">
                <div className="booktitle">
                    <h1>Read Book: </h1>
                <h2>{book.title}</h2>
                <p>{book.shortDescription}</p>
            </div>
            </div>
        </div>
    );
}

export default ReadBook;