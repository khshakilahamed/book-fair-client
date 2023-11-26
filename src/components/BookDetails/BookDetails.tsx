/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../../redux/api/apiSlice";
import Spinner from "../Spinner/Spinner";
import { IBook } from "../../types/globalType";
import BookReviews from "../BookReviews/BookReviews";
import { useAppSelector } from "../../redux/hook";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";

const BookDetails = () => {
  const location = useLocation();
  const [isOpenBook, setIsOpenBook] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAppSelector((state) => state.user);

  const { data, isLoading, error } = useGetSingleBookQuery(id!, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  if (isLoading) {
    return <Spinner />;
  }

  const book: IBook = data?.data;

  // const handleWishlist = async (id: string) => {
  //   if (user && user.email && user.name) {
  //     const result = await postWishlist(id);
  //   } else {
  //     navigate("/auth/login");
  //   }
  // };

  return (
    <div className="max-w-[1280px] mx-auto gap-10">
      {!error && (
        <div className="w-full">
          <div className="flex gap-10 my-10">
            <div className="w-[50%]">
              <img src={book.image} alt="book-image" />
            </div>
            <div className="w-[50%]">
              <p className="text-base text-gray-600"> {book.genre}</p>
              <h2 className="text-xl md:text-3xl font-bold">{book.title}</h2>
              <p>
                _By <span>{book.author}</span>
              </p>
              <p className="flex gap-2 items-center">
                <CiCalendar />
                {book.publicationDate}
              </p>

              <div className="flex gap-2 mt-3">
                {isOpenBook ? (
                  <button
                    className="btn btn-error btn-outline btn-sm py-1"
                    onClick={() => setIsOpenBook((prev) => !prev)}
                  >
                    Hide Pdf
                  </button>
                ) : (
                  <NavHashLink
                    to={`${location.pathname}/#bookPdfSection`}
                    onClick={() => setIsOpenBook((prev) => !prev)}
                  >
                    <button className="btn btn-error btn-outline btn-sm py-1">
                      <IoMdEye className="text-lg" />
                      View Pdf
                    </button>
                  </NavHashLink>
                )}
              </div>
            </div>
          </div>

          <div
            id="bookPdfSection"
            className="w-full h-full flex justify-center"
          >
            <div className="w-full">
              <div>
                {isOpenBook && (
                  <>
                    {book?.bookPDF ? (
                      <>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 my-10 ">
                          <h2 className="text-xl font-bold text-center">
                            {book?.title} Book's PDF
                          </h2>
                          <button
                            className="btn btn-error btn-outline btn-sm py-1"
                            onClick={() => setIsOpenBook((prev) => !prev)}
                          >
                            <IoMdEyeOff className="text-lg" />
                            Hide Pdf
                          </button>
                        </div>
                        <div className=" min-w-[100%] lg:w-[700px] h-[90vh] border-[15px]  ">
                          <iframe
                            src={book?.bookPDF}
                            width="100%"
                            height="100%"
                            allow="autoplay"
                          ></iframe>
                        </div>
                      </>
                    ) : (
                      <div className="text-center my-10">
                        <h2 className="font-bold">[No PDF Available]</h2>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <hr />
          <div className="mx-10 xl:mx-0">
            <BookReviews id={book._id as string} />
          </div>
        </div>
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
