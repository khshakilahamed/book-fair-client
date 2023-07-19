/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useGetWishlistQuery } from "../../redux/api/apiSlice";
import { IWishlist } from "../../types/globalType";
import Spinner from "../Spinner/Spinner";
import List from "./../List/List";

const WishList = () => {
  const { data, isLoading } = useGetWishlistQuery(null);

  const wishlists: IWishlist[] | undefined = data?.data;

  return (
    <div className="max-w-[1280px] min-h-[53vh] mx-auto px-6">
      <h2 className="text-2xl font-semibold pt-5">
        Wishlist{" "}
        <span className="text-sm">
          [{wishlists !== undefined ? wishlists?.length : 0}]
        </span>
      </h2>
      {!isLoading ? (
        wishlists !== undefined && wishlists.length > 0 ? (
          <div className="py-3 w-full">
            {wishlists?.map((list: IWishlist) => (
              <List list={list} key={list._id} />
            ))}
          </div>
        ) : (
          <div className="py-3">
            <hr />
            <p className="text-center py-5">No wishlist yet</p>
          </div>
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default WishList;
