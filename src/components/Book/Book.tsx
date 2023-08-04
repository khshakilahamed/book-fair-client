/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { IBook } from "../../types/globalType";
import { BsCurrencyDollar, BsHeart } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import "./Book.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";

import {
  useDeleteBookMutation,
  usePostReadingListMutation,
  usePostWishlistMutation,
} from "../../redux/api/apiSlice";
import swal from "sweetalert";
import { toast } from "react-hot-toast";
import { useEffect } from "react";

interface IProps {
  book: IBook;
}

const Book = ({ book }: IProps) => {
  const { _id, title, genre, author, price, image, publicationDate } = book;
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);
  const [deleteBook, { isSuccess }] = useDeleteBookMutation();
  const [
    postWishlist,
    { isSuccess: postWishlistSuccess, isError: postWishlistIsError },
  ] = usePostWishlistMutation();

  const [
    postReadingList,
    { isSuccess: postReadingListSuccess, isError: postReadingListIsError },
  ] = usePostReadingListMutation();

  const location = useLocation();

  useEffect(() => {
    if (postWishlistSuccess) {
      toast.success("Added to wishlist");
    }
    if (postWishlistIsError) {
      toast.error("Something went wrong");
    }
    if (postReadingListSuccess) {
      toast.success("Added to reading list");
    }
    if (postReadingListIsError) {
      toast.error("Something went wrong");
    }
  }, [
    postWishlistSuccess,
    postWishlistIsError,
    postReadingListSuccess,
    postReadingListIsError,
  ]);

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

  const handleWishlist = (id: string) => {
    if (user && user.email && user.name) {
      postWishlist(id);
    } else {
      navigate("/auth/login");
    }
  };

  const handleReadingList = (id: string) => {
    if (user && user.email && user.name) {
      postReadingList(id);
    } else {
      navigate("/auth/login");
    }
  };

  return (
    <div className="card-container xs:w-[200px] sm:w-[300px] bg-gray-100 rounded-xl overflow-hidden">
      <div className=" flex justify-center items-center p-8 relative">
        <img className="rounded-r-xl w-full" src={image} alt="bookImage" />
        <div className="action-container absolute flex flex-col justify-center items-center gap-3 h-full w-full">
          <div className="flex items-center gap-3">
            <p
              className="wishlist"
              title="Wishlist"
              onClick={() => handleWishlist(book._id as string)}
            >
              <BsHeart className="action-icon bg-white h-[50px]  w-[50px] p-2 rounded text-3xl cursor-pointer " />
            </p>
            <p
              className="addToReading"
              title="Add to reading"
              onClick={() => handleReadingList(book._id as string)}
            >
              <AiOutlineRead className="action-icon bg-white h-[50px]  w-[50px] p-2 rounded text-4xl cursor-pointer" />
            </p>
          </div>
          <div>
            <Link
              to={`/book-details/${_id as string}`}
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
        <p>
          <span className=" text-gray-600"></span> {publicationDate}
        </p>
        <div className="flex items-center justify-between my-5">
          <h4 className="flex items-center text-2xl text-error font-bold">
            <BsCurrencyDollar />
            {price}
          </h4>
          {location.pathname === "/my-books" && user?.name && user?.email && (
            <div className="flex gap-2">
              <Link
                to={`/update-book/${_id as string}`}
                className="btn btn-success btn-outline btn-sm py-1"
              >
                <FaRegEdit className="text-xl" />
              </Link>
              <button
                className="btn btn-error btn-outline btn-sm py-1"
                onClick={() => handleDelete(_id as string)}
              >
                <RiDeleteBin6Line className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
