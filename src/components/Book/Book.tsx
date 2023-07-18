import { IBook } from "../../types/bookType";
import { BsCurrencyDollar, BsHeart } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import "./Book.css";
import { Link } from "react-router-dom";

interface IProps {
  book: IBook;
}

const Book = ({ book }: IProps) => {
  const { _id, title, genre, publicationDate, author, price, image } = book;

  return (
    <div className="card-container max-w-[300px] bg-gray-100 rounded-xl overflow-hidden">
      <div className=" flex justify-center items-center p-8 relative">
        <img className="rounded-r-xl" src={image} alt="bookImage" />
        <div className="action-container absolute flex flex-col justify-center items-center gap-3 h-full w-full">
          <div className="flex items-center gap-3">
            <p className="wishlist" title="Wishlist">
              <BsHeart className="action-icon bg-white h-[50px]  w-[50px] p-2 rounded text-3xl cursor-pointer " />
            </p>
            <p className="addToReading" title="Add to reading">
              <AiOutlineRead className="action-icon bg-white h-[50px]  w-[50px] p-2 rounded text-4xl cursor-pointer" />
            </p>
          </div>
          <div>
            <Link
              to={`/book-details/${_id}`}
              className="btn btn-link text-white text-lg hover:text-black"
            >
              Details
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="px-8">
        <p className="text-sm text-gray-600">{genre}</p>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>
          <span className=" text-gray-600">By</span> {author}
        </p>
        <div>
          <h4 className="flex items-center text-2xl py-4 text-error font-bold">
            <BsCurrencyDollar />
            {price}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Book;
