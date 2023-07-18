/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useGetReadingListQuery } from "../../redux/api/apiSlice";
import { IWishlist } from "../../types/globalType";
import List from "../List/list";
import Spinner from "../Spinner/Spinner";

const ReadingList = () => {
  const { data, isLoading } = useGetReadingListQuery(null);

  const readingLists: IWishlist[] = data?.data;

  return (
    <div className="max-w-[1280px] min-h-[53vh] mx-auto px-6">
      <h2 className="text-2xl font-semibold pt-5">
        Reading List <span className="text-sm">[{readingLists?.length}]</span>
      </h2>
      {!isLoading ? (
        readingLists.length > 0 ? (
          <div className="py-3 w-full">
            {readingLists?.map((list: IWishlist) => (
              <List list={list} key={list._id} />
            ))}
          </div>
        ) : (
          <div className="py-3">
            <hr />
            <p className="text-center py-5">No reading list yet</p>
          </div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ReadingList;
