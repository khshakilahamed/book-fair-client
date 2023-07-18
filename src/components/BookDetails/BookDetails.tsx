/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import { useGetSingleBookQuery } from "../../redux/api/apiSlice";
import Spinner from "../Spinner/Spinner";
import { IBook } from "../../types/bookType";
import BookReviews from "../BookReviews/BookReviews";

const BookDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetSingleBookQuery(id!);

  if (isLoading) {
    return <Spinner />;
  }

  const book: IBook = data?.data;

  //   console.log(book);

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
              <p className="text-error text-4xl my-3 font-bold">
                $ {book.price}
              </p>
            </div>
          </div>

          <hr />
          <div>
            <BookReviews id={book._id} />
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
