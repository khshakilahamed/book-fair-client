import InputType from "../InputType/InputType";

const BookForm = () => {
  return (
    <div>
      <div className="lg:w-[50%] mx-auto ">
        <div className="mx-10 bg-gray-100 p-10 rounded-lg">
          <div className="flex justify-center">
            {/* <img className="w-[100px] h-[100px]" src={bookIcon} alt="bookIcon" /> */}
          </div>
          {/* <h2 className="text-2xl font-bold text-center my-5">{formTitle}</h2> */}
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
