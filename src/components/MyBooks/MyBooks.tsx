/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetMyBooksQuery } from "../../redux/api/apiSlice";
import { IBook } from "../../types/bookType";
import Book from "../Book/Book";

const MyBooks = () => {
  const { data } = useGetMyBooksQuery(null);

  console.log();
  const books: IBook[] = data?.data;

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="my-10 flex flex-wrap justify-center gap-5">
        {books?.map((book: IBook) => (
          <Book key={book._id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
