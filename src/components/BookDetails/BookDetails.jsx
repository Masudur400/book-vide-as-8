import { useLoaderData, useParams } from "react-router-dom";
import PropTypes from 'prop-types';


const BookDetails = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const book = books.find(book => book.bookId === idInt)
    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, year_of_publishing } = book;
    console.log(book);
    return (
        <div className="md:flex gap-10 mt-14">
            <div className="bg-gray-100 flex justify-center  md:w-1/2 rounded-xl p-10">
                <img src={image} alt="" />
            </div>

            <div className="md:w-1/2">
                <div className="space-y-3">
                <h3 className="text-4xl font-bold">{bookName}</h3>
                <p className="text-2xl">by: {author}</p>
                </div>
                <div className="divider"></div>
                <p className="text-2xl">{category}</p>
                <div className="divider"></div>
                <p className="mt-3"><span className="font-bold">Review: </span>{review}</p>
                <div className="flex justify-between mt-5">
                    <p className="font-bold">Tags : </p>
                    {
                        tags.map((tag,i) => <p className="bg-green-50 px-3 py-2 rounded-full text-green-500 font-bold" 
                        key={i} 
                        tag={tag}
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
                <button className="btn bg-green-400 text-white font-bold">Read</button>
                <button className="btn bg-green-400 text-white font-bold">Wishlist</button>
                </div>
            </div>
        </div>
    );
};

BookDetails.propTypes={
    tag: PropTypes.string
}

export default BookDetails;