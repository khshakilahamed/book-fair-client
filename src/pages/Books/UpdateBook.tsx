/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/rules-of-hooks */
import { useNavigate, useParams } from "react-router-dom";
import InputType from "../../components/InputType/InputType";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../../redux/api/apiSlice";
import Spinner from "../../components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { format, parse } from "date-fns";
import { IBook } from "../../types/globalType";
import { toast } from "react-hot-toast";

const today = format(new Date(), "PP");
const initialState = {
  data: {
    title: "",
    genre: "",
    publicationDate: today,
    author: "",
    bookPDF: "",
    image: "",
  },
};

const UpdateBook = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleBookQuery(id!, {
    refetchOnMountOrArgChange: true,
  });
  const [updateBook, { isLoading: updatingBook }] = useUpdateBookMutation();
  const [formValue, setFormValue] = useState<IBook>(
    initialState.data || data?.data
  );

  const navigate = useNavigate();

  type IBookGet = {
    data: IBook;
  };

  useEffect(() => {
    if (id && data) {
      const book: IBookGet = data;

      setFormValue(book?.data);
    }
  }, [data, id]);

  const { title, genre, publicationDate, author, image, bookPDF } = formValue;

  if (isLoading) {
    return <Spinner />;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === "publicationDate") {
      const publicationDate = value;
      const parsedDate = parse(publicationDate, "yyyy-MM-dd", new Date()); // 2023-07-08 to Sat Jul 08 2023 00:00:00 GMT+0600 (Bangladesh Standard Time)
      const formattedDate = format(parsedDate, "MMM d, yyyy"); // Sat Jul 08 2023 00:00:00 GMT+0600 (Bangladesh Standard Time) to Jul 8, 2023
      setFormValue((prevFormData) => ({
        ...prevFormData,
        [name]: formattedDate,
      }));
    } else {
      setFormValue((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (
        title === "" ||
        genre === "" ||
        publicationDate === "" ||
        author === "" ||
        image === ""
      ) {
        return toast.error("Please fill the all fields");
      }

      const book: any = await updateBook({
        ...formValue,
      });

      if (book.data.success && book.data.statusCode === 200) {
        toast.success("Successfully updated");

        // navigate to book details page
        setTimeout(() => {
          navigate(`/book-details/${id as string}`);
        }, 1000);
      } else {
        toast.success("Something went wrong");
      }
    } catch (error) {
      // Handle errors, e.g., show error message
      console.error("Form submission error:", error);
    }
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="lg:w-[50%] mx-auto py-10">
        <div className="mx-10 bg-gray-100 p-10 rounded-lg">
          <div className="flex justify-center">
            {/* <img className="w-[100px] h-[100px]" src={bookIcon} alt="bookIcon" /> */}
          </div>
          <h2 className="text-2xl font-bold text-center my-5">
            Update book info
          </h2>

          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <InputType
                id="title"
                label="Title"
                labelClassName="text-lg font-semibold"
                name="title"
                placeholder="Title"
                type="text"
                className="outline-none border rounded-lg px-2 py-1"
                value={title || ""}
                onChange={handleChange}
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
                value={genre || ""}
                onChange={handleChange}
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
                value={
                  format(
                    parse(publicationDate, "MMM d, yyyy", new Date()),
                    "yyyy-MM-dd"
                  ) ||
                  format(
                    parse(publicationDate, "MMM d, yyyy", new Date()),
                    "yyyy-MM-dd"
                  )
                }
                className="outline-none border rounded-lg px-2 py-1"
                onChange={handleChange}
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
                value={author || ""}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <InputType
                id="bookPDF"
                label="Book PDF"
                labelClassName="text-lg font-semibold"
                name="bookPDF"
                placeholder="book PDF"
                type="text"
                className="outline-none border rounded-lg px-2 py-1"
                value={bookPDF || ""}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-full text-center">
              <button
                className="btn btn-error mt-5 w-full"
                disabled={updatingBook}
              >
                {updatingBook ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
