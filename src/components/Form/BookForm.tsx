import { useState } from "react";
import InputType from "../InputType/InputType";
import { format } from "date-fns";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleDate = (e: { target: { value: string | number | Date } }) => {
    const date = format(new Date(e.target.value), "PP");
    setDate(date);
  };

  const handleAddBook = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    console.log(title, genre, date, author, price, imageLink);
  };

  return (
    <div>
      <div className="lg:w-[50%] mx-auto ">
        <div className="mx-10 bg-gray-100 p-10 rounded-lg">
          <div className="flex justify-center">
            {/* <img className="w-[100px] h-[100px]" src={bookIcon} alt="bookIcon" /> */}
          </div>
          {/* <h2 className="text-2xl font-bold text-center my-5">{formTitle}</h2> */}
          <form className="flex flex-col gap-3" onSubmit={handleAddBook}>
            {/* Switch statement */}
            <div className="flex flex-col">
              <InputType
                id="title"
                label="Title"
                labelClassName="text-lg font-semibold"
                name="title"
                placeholder="Title"
                type="text"
                className="outline-none border rounded-lg px-2 py-1"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <InputType
                id="genre"
                label="Genre"
                labelClassName="text-lg font-semibold"
                name="genre"
                placeholder="Genre"
                type="text"
                className="outline-none border rounded-lg px-2 py-1"
                onChange={(e) => setGenre(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <InputType
                id="publicationDate"
                label="Publication Date"
                labelClassName="text-lg font-semibold"
                name="publicationDate"
                placeholder="Publication Date"
                type="date"
                className="outline-none border rounded-lg px-2 py-1"
                onChange={handleDate}
              />
            </div>
            <div className="flex flex-col">
              <InputType
                id="author"
                label="Author"
                labelClassName="text-lg font-semibold"
                name="author"
                placeholder="Author"
                type="text"
                className="outline-none border rounded-lg px-2 py-1"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <InputType
                id="price"
                label="Price"
                labelClassName="text-lg font-semibold"
                name="price"
                placeholder="Price"
                type="number"
                className="outline-none border rounded-lg px-2 py-1"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <InputType
                id="image"
                label="Image Link"
                labelClassName="text-lg font-semibold"
                name="image"
                placeholder="Image Link"
                type="text"
                className="outline-none border rounded-lg px-2 py-1"
                onChange={(e) => setImageLink(e.target.value)}
              />
            </div>

            <button className="btn btn-error mt-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
