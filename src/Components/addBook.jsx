import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addbook.css';
const AddBook = () => {
    let [title, setTitle] = useState("")
    let [authors, setAuthors] = useState("")
    let [categories, setCategories] = useState("")
    let [pageCount, setPagecount] = useState("")
    let [shortDescription, setShort] = useState("")
    let [longDescription, setLong] = useState("")
    let [thumbnailUrl, setUrl] = useState("")

    let navigate = useNavigate()

    let handlebookSubmit = (e) => {
        e.preventDefault()
        let bookdata = { title, authors, categories, pageCount, shortDescription, longDescription, thumbnailUrl }
        fetch('http://localhost:1000/books', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookdata)
        })
        alert('Book Added succesfully')
        navigate('/admin/book-list')
    }

    return (
        <div className="addbook">
            <h1 style={{textAlign:"center",color:"blue",textDecoration:"underline 2px solid black"}}> Add a Book</h1>
            <div className="bookform">
                <form action="" onSubmit={handlebookSubmit}>
                    <div className="booktitle"><input type="text" required placeholder="Title of the Book" onChange={(e) => setTitle(e.target.value)} value={title} /></div>
                    <div className="bookauthors"><input type="text" required placeholder="Authors" onChange={(e) => setAuthors(e.target.value)} value={authors} /></div>
                    <div className="bookcategories"><input type="text" required placeholder="Categories" onChange={(e) => setCategories(e.target.value)} value={categories} /></div>
                    <div className="pagecount"><input type="number" required placeholder="PageCount" onChange={(e) => setPagecount(e.target.value)} value={pageCount} /></div>
                    <div className="shortdesc"><textarea name="" id="" cols="50" rows="5" placeholder="Short Description" value={shortDescription} onChange={(e) => setShort(e.target.value)}></textarea></div>
                    <div className="longdesc"><textarea name="" id="" cols="50" rows="7" placeholder="Long Description" value={longDescription} onChange={(e) => setLong(e.target.value)}></textarea></div>
                    <div className="thumbnailurl"><input type="text" required placeholder="Thumbnail URL" onChange={(e) => setUrl(e.target.value)} value={thumbnailUrl} /></div>
                    <button type="submit" className='bookbtn'>Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;