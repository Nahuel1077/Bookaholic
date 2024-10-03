"use client";
import React, { useState } from "react";
import { Cormorant } from "next/font/google";

const cormorant = Cormorant({ 
    subsets: ['latin'],
    weight: ["400", "600"],
    style: ["normal", "italic"]
});

export default function Search(){
    const [query, setQuery] = useState("");
    const [books, setBooks] = useState([]);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`;
    
    const handleInputChange = (e) => {
        setQuery(e.target.value);        
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.items);
            setBooks(data.items);
        } catch (error) {
            
        }
    };

    return(
        <div className="form-container">
            <h1 className={cormorant.className="section-text"}>Can we get you a book?</h1>
            <form className="search">
                <input type="text" value={query} placeholder="Search book" onChange={handleInputChange}></input>
                <button type="submit" onClick={handleSubmit}>Search</button>
            </form>
            <div className="results">
                {books.length > 0 && books.map((book)=> (
                    <a href={book.accessInfo.webReaderLink} className="web-reader" key={book.id}>
                        <div className="overlay" id="card-hover">
                            <p>Author: {book.volumeInfo.authors}</p>
                            <p>Published date: {book.volumeInfo.publishedDate}</p>
                        </div>
                            <div className="card" id="card">
                                <div className="flex">
                                    {book.volumeInfo.imageLinks ? (
                                            <img
                                                src={book.volumeInfo.imageLinks.thumbnail}
                                                alt={book.volumeInfo.title}
                                                className="book-image"
                                            />
                                        ) : (
                                            <div className="no-image">No image</div>   
                                        )}
                                    <h3 className="title">{book.volumeInfo.title}</h3>
                                    <p className="card-text">{book.volumeInfo.description && book.volumeInfo.description.length > 200 
                                        ? `${book.volumeInfo.description.slice(0, 270)}...` 
                                        : book.volumeInfo.description || "No description available"}</p>
                                </div>
                            </div>
                        
                    </a>
                ))}
            </div>
        </div>
    )
}