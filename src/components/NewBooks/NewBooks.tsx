/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useGetBooksQuery } from "../../redux/api/apiSlice";
import { IBook } from "../../types/bookType";
import Book from "../Book/Book";
import Spinner from "../Spinner/Spinner";

const NewBooks = () => {
  const { data: books, isLoading } = useGetBooksQuery({});

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="max-w-[1280px] mx-auto px-10 py-20">
      <div className="flex flex-col items-center gap-2">
        <span className="bg-gray-100 p-2 px-3 rounded">READ NEW</span>
        <h2 className="text-5xl font-bold">New Arrivals</h2>
        <p className="text-2xl text-gray-600 text-center">
          Reading helps you developing your communication skills
        </p>
      </div>

      <div className="my-10 flex flex-wrap justify-center gap-5">
        {books?.data.map((book: IBook) => (
          <Book key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default NewBooks;
