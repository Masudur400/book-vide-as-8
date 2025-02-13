import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import {   saveReadBooks, saveWishListBooks } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";


const BookDetails = () => { 
    const [bookDetails,setBookDetails]=useState([]);
    const [disable,setDisable] = useState(false);
    const books = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    
    useEffect(()=>{
        const book = books?.find(book => book.bookId === idInt)
        setBookDetails(book)
    },[books,idInt])
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, year_of_publishing } = bookDetails;

    // console.log(books)
    
    const handleRead = () =>{
        saveReadBooks(idInt);
        setDisable(!disable)
        
        
    }

    const handleWishList = () =>{
        if(disable){
            return
        }
        else{
            saveWishListBooks(idInt);

        }
    }


    return (
        <div className="md:flex gap-10 my-14">
            <div className="bg-gray-100 flex justify-center  md:w-1/2 rounded-xl p-10">
                <img src={image} alt="" />
            </div>

            <div className="md:w-1/2">
                <div className="space-y-3">
                <h3 className="text-2xl mt-4 md:text-4xl font-bold">{bookName}</h3>
                <p className="text-2xl">by: {author}</p>
                </div>
                <div className="divider"></div>
                <p className="text-2xl">{category}</p>
                <div className="divider"></div>
                <p className="mt-3"><span className="font-bold">Review: </span>{review}</p>
                <div className="md:flex justify-between mt-5">
                    <p className="font-bold">Tags : </p>
                    {
                        tags?.map((tag,i) => <p className="bg-green-50 mb-2 px-3 py-2 rounded-full text-green-500 font-bold" 
                        key={i}  
                        >{tag}</p>)
                    }
                </div>
                <div className="divider"></div>
                <div className="space-y-4">
                     <p>Number of Pages: <span className="font-bold">{totalPages}</span></p>
                     <p>Publisher: <span className="font-bold">{publisher}</span></p>
                     <p>Year of Publishing: <span className="font-bold">{year_of_publishing}</span></p>
                     <p>Rating: <span className="font-bold">{rating}</span></p>
                </div>

                <div className="flex gap-10 mt-5">

                <Link >
                <button onClick={handleRead}
                 className="btn bg-green-400 text-white font-bold">Read</button>
                 </Link>
                <Link >
                <button onClick={handleWishList}
                 className={`${disable?'disabled bg-green-300 btn text-white font-bold': 'btn bg-green-400  text-white font-bold'}`}>Wishlist</button>
                </Link>
                </div>
                
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

BookDetails.propTypes={
    
}

export default BookDetails;