/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { FormEvent, useState } from "react";
import InputType from "../InputType/InputType";
import { format } from "date-fns";
import { usePostBookMutation } from "../../redux/api/apiSlice";
import { IBook } from "../../types/globalType";
import { toast } from "react-hot-toast";
import { fileUploader } from "../../helpers/fileUploader";

const BookForm = () => {
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [bookPDF, setBookPDF] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [isUrlCreating, setIsUrlCreating] = useState<boolean>(false);

  const handleDate = (e: { target: { value: string | number | Date } }) => {
    const date = format(new Date(e.target.value), "PP");
    setDate(date);
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setImage(e.target.files[0]);
  };

  const [postBook, { isLoading, isError, isSuccess, error }] =
    usePostBookMutation();

  if (isSuccess && !isLoading) {
    toast.success("Successfully added the book", { id: "success" });
  }

  if (isError && error) {
    toast.error("Something went wrong");
  }

  const handleAddBook = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!bookPDF) {
      toast.error("Please, upload the book's pdf");
    }

    setIsUrlCreating(true);

    const imageData = new FormData();
    imageData.append("file", image!);
    imageData.append("upload_preset", "bookFair");

    const imageRes = await fileUploader(imageData);

    if (title === "" || genre === "" || date === "" || author === "") {
      toast.error("Please, fill up all fields");
      return;
    }

    const bookData: Partial<IBook> = {
      title,
      genre,
      publicationDate: date,
      author,
      bookPDF,
      image: imageRes,
    };

    await postBook(bookData);
    setIsUrlCreating(false);
    e.currentTarget.reset();
  };

  return (
    <div>
      <div className="lg:w-[50%] mx-auto ">
        <div className="mx-10 bg-gray-100 p-10 rounded-lg">
          <div className="flex justify-center">
            {/* <img className="w-[100px] h-[100px]" src={bookIcon} alt="bookIcon" /> */}
          </div>
          <h2 className="text-2xl font-bold text-center my-5">
            Fill the book details
          </h2>
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div className="flex flex-col">
              <InputType
                id="bookPDF"
                label="Book PDF"
                labelClassName="text-lg font-semibold"
                name="bookPDF"
                placeholder="PDF Drive Link"
                type="text"
                className="outline-none border rounded-lg px-2 py-1"
                onChange={(e) => setBookPDF(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <InputType
                id="image"
                label={
                  <p>
                    Image{" "}
                    <small className="text-red-500 text-xs">jpg*, png*</small>
                  </p>
                }
                labelClassName="text-lg font-semibold"
                name="image"
                placeholder="Image Link"
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                className="outline-none border rounded-lg px-2 py-1"
                onChange={handleImage}
                required
              />
            </div>
            <div className="w-full text-center">
              {isLoading || isUrlCreating ? (
                <span className="loading loading-spinner loading-xs"></span>
              ) : (
                <button className="btn btn-error mt-5 w-full">Submit</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
