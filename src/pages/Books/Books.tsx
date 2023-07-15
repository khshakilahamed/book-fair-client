import Book from "../../components/Book/Book";
import books from "../../fakeBooks";

const Books = () => {
  return (
    <div className="max-w-[1280px] flex flex-wrap mx-auto gap-10">
      <div className="my-10 flex flex-wrap justify-center gap-5">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
