/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { FormEvent, useState } from "react";
import {
  useGetReviewsQuery,
  usePostReviewMutation,
} from "../../redux/api/apiSlice";
import { useAppSelector } from "../../redux/hook";
import { IReviews } from "../../types/globalType";
import Spinner from "../Spinner/Spinner";

const BookReviews = ({ id }: { id: string }) => {
  const [userReview, setUserReview] = useState("");

  const { data, isLoading, isError } = useGetReviewsQuery(id, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const [postReview, { isLoading: postReviewLoading }] =
    usePostReviewMutation();
  const user = useAppSelector((state) => state.user);

  const reviews = data?.data;

  const handleReview = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reviewData = {
      id,
      data: {
        review: userReview,
      },
    };
    console.log(reviewData);
    void postReview(reviewData);
    e.currentTarget.reset();
  };

  return (
    <div>
      <div className="my-10">
        {user.user?.name && user.user?.email && (
          <>
            <h2 className="text-3xl font-bold my-3">Share your opinion</h2>
            <form className="md:flex gap-2" onSubmit={handleReview}>
              <textarea
                className="w-full border border-gray-700 rounded-lg px-2 py-1 resize-none outline-none"
                placeholder="Write a review"
                name=""
                id=""
                cols={30}
                rows={3}
                onChange={(e) => setUserReview(e.target.value)}
              />
              <div>
                {postReviewLoading ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  <button
                    type="submit"
                    className="btn btn-error"
                    disabled={!userReview ? true : false}
                  >
                    Submit
                  </button>
                )}
              </div>
            </form>
          </>
        )}
        <h2 className="text-3xl font-bold my-2 mt-5">Reviews</h2>
        {isLoading ? (
          <Spinner />
        ) : reviews.length > 0 ? (
          reviews?.map((review: IReviews) => (
            <div key={review._id} className="my-3">
              <p>
                <span className="text-gray-600"> by</span>{" "}
                <span className=" text-lg">{review.user.name}</span>
                <h2 className="font-semibold text-xl">{review.review}</h2>
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No review yet</p>
        )}
      </div>
    </div>
  );
};

export default BookReviews;
