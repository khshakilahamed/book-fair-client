/* eslint-disable @typescript-eslint/no-floating-promises */
import { IBook } from "../../types/bookType";
import { BsCurrencyDollar, BsHeart } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import "./Book.css";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

import { RiDeleteBin6Line } from "react-icons/ri";
import { useDeleteBookMutation } from "../../redux/api/apiSlice";
import swal from "sweetalert";

interface IProps {
  book: IBook;
}

const Book = ({ book }: IProps) => {
  const { _id, title, genre, author, price, image } = book;

  const { user } = useAppSelector((state) => state.user);
  const [deleteBook, { isLoading, isSuccess }] = useDeleteBookMutation();

  const location = useLocation();

  const handleDelete = (id: string) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this book!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteBook(id);
        if (isSuccess) {
          swal("Your book has been deleted", {
            icon: "success",
          });
        }
      } else {
        swal("Your book is safe!");
      }
    });
  };

  const handleWishlist = () => {
    console.log("Wishlist");
  };
  const handleReadingList = () => {
    console.log("ReadingList");
  };

  return (
    <div className="card-container min-w-[250px] max-w-[300px] bg-gray-100 rounded-xl overflow-hidden">
      <div className=" flex justify-center items-center p-8 relative">
        <img className="rounded-r-xl w-full" src={image} alt="bookImage" />
        <div className="action-container absolute flex flex-col justify-center items-center gap-3 h-full w-full">
          <div className="flex items-center gap-3">
            <p className="wishlist" title="Wishlist" onClick={handleWishlist}>
              <BsHeart className="action-icon bg-white h-[50px]  w-[50px] p-2 rounded text-3xl cursor-pointer " />
            </p>
            <p
              className="addToReading"
              title="Add to reading"
              onClick={handleReadingList}
            >
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
        <div className="flex items-center justify-between my-5">
          <h4 className="flex items-center text-2xl text-error font-bold">
            <BsCurrencyDollar />
            {price}
          </h4>
          {location.pathname === "/my-books" && user?.name && user?.email && (
            <button
              className="btn btn-error btn-outline"
              onClick={() => handleDelete(_id)}
            >
              <RiDeleteBin6Line className="text-2xl" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
