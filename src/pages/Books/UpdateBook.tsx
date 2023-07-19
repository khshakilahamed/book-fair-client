/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useParams } from "react-router-dom";
import InputType from "../../components/InputType/InputType";
import { useGetSingleBookQuery } from "../../redux/api/apiSlice";
import Spinner from "../../components/Spinner/Spinner";
import { useEffect, useState } from "react";
import { format, parse } from "date-fns";
import { IBook } from "../../types/globalType";

const today = format(new Date(), "yyyy-MM-dd"); // 2023-07-20

const initialState = {
  title: "",
  genre: "",
  publicationDate: today,
  author: "",
  price: 0,
  image: "",
};

const UpdateBook = () => {
  const [formValue, setFormValue] = useState<Partial<IBook>>(initialState);
  const { id } = useParams();
  const { data, isLoading, error } = useGetSingleBookQuery(id!);
  const { title, genre, publicationDate, author, price, image } = formValue;

  console.log(data?.data);

  if (isLoading) {
    return <Spinner />;
  }

  useEffect(() => {
    if (id && Object.keys(data?.data).length > 0) {
      const { publicationDate, ...otherInfo } = data?.data;

      const parsedDate = parse(publicationDate, "MMM d, yyyy", new Date());
      const formattedDate = format(parsedDate, "yyyy-MM-dd");

      setFormValue({ ...otherInfo, publicationDate: formattedDate });
    } else {
      setFormValue({ ...initialState });
    }
  }, [id, data?.data]);

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

          <form className="flex flex-col gap-3">
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
                value={title || ""}
                // onChange={}
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
                // onChange={}
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
                value={publicationDate || today}
                className="outline-none border rounded-lg px-2 py-1"
                // onChange={(e) => console.log(e.target.value)}
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
                required
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
                required
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
                required
              />
            </div>
            <div className="w-full text-center">
              {/* {isLoading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            <button className="btn btn-error mt-5 w-full">Submit</button>
          )} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
