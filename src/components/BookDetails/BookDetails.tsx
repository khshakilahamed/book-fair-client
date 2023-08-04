/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../../redux/api/apiSlice";
import Spinner from "../Spinner/Spinner";
import { IBook } from "../../types/globalType";
import BookReviews from "../BookReviews/BookReviews";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import swal from "sweetalert";
import { useAppSelector } from "../../redux/hook";

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  const { data, isLoading, error } = useGetSingleBookQuery(id!, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [deleteBook, { isSuccess }] = useDeleteBookMutation();
  // const [postWishlist] = usePostWishlistMutation();

  if (isLoading) {
    return <Spinner />;
  }

  const book: IBook = data?.data;

  //   console.log(book);

  const handleDelete = (id: string) => {
    void swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this book!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        await deleteBook(id);

        if (user && user?.email) {
          if (isSuccess) {
            void swal("Your book has been deleted", {
              icon: "success",
            });
            navigate("/my-books");
          }
        } else {
          navigate("/auth/login");
        }
      } else {
        void swal("Your book is safe!");
      }
    });
  };

  // const handleWishlist = async (id: string) => {
  //   if (user && user.email && user.name) {
  //     const result = await postWishlist(id);
  //   } else {
  //     navigate("/auth/login");
  //   }
  // };

  return (
    <div className="max-w-[1280px] mx-auto gap-10">
      {!error && (
        <>
          <div className="flex gap-10 my-10">
            <div>
              <img src={book.image} alt="book-image" />
            </div>
            <div>
              <p className="text-base text-gray-600"> {book.genre}</p>
              <h2 className="text-3xl font-bold">{book.title}</h2>
              <p>Published on {book.publicationDate}</p>
              <p>
                <span>Author</span>{" "}
                <span className="text-2xl">{book.author}</span>
              </p>
              <h2 className="text-error text-4xl my-3 font-bold">
                $ {book.price}
              </h2>
              <div className="flex gap-2">
                <Link
                  to={`/update-book/${book._id as string}`}
                  className="btn btn-success btn-outline btn-sm py-1"
                >
                  <FaRegEdit className="text-xl" />
                </Link>
                <button
                  className="btn btn-error btn-outline btn-sm py-1"
                  onClick={() => handleDelete(book._id as string)}
                >
                  <RiDeleteBin6Line className="text-xl" />
                </button>
              </div>
            </div>
          </div>

          <hr />
          <div>
            <BookReviews id={book._id as string} />
          </div>
        </>
      )}
      {error && (
        <div>
          <h2>Internal Server Error</h2>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
