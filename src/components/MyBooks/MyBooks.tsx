/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetMyBooksQuery } from "../../redux/api/apiSlice";
import { IBook } from "../../types/globalType";
import Book from "../Book/Book";
import Spinner from "../Spinner/Spinner";

const MyBooks = () => {
  const { data, isLoading } = useGetMyBooksQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const books: IBook[] | undefined = data?.data;

  return (
    <div className="max-w-[1280px] min-h-[53vh] mx-auto px-10 lg:px-0">
      <h2 className="text-2xl font-semibold pt-5">
        My Books{" "}
        <span className="text-sm">
          [{books !== undefined ? books?.length : 0}]
        </span>
      </h2>
      <div className="my-10 ">
        {!isLoading ? (
          books !== undefined && books.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-5">
              {books?.map((book: IBook) => (
                <Book key={book._id} book={book} />
              ))}
            </div>
          ) : (
            <div className="py-3">
              <hr />
              <p className="text-center py-5">No book yet</p>
            </div>
          )
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default MyBooks;
