/* eslint-disable @typescript-eslint/no-floating-promises */
import { RiDeleteBin6Line } from "react-icons/ri";
import { IWishlist } from "../../types/globalType";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useDeleteReadingListMutation,
  useDeleteWishlistMutation,
} from "../../redux/api/apiSlice";
import swal from "sweetalert";

interface IList {
  list: IWishlist;
}

const List = ({ list }: IList) => {
  const navigate = useNavigate();
  const location = useLocation();

  const pathname = location.pathname;

  const [deleteWishlistItem, { isSuccess: IsSuccessDeleteWishList }] =
    useDeleteWishlistMutation();

  const [deleteReadingListItem, { isSuccess: IsSuccessDeleteReadingList }] =
    useDeleteReadingListMutation();

  const handleNavigate = (id: string) => {
    navigate(`/book-details/${id}`);
  };

  // handle delete reading item
  const handleDeleteReadingListItem = (id: string) => {
    void swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this reading list item!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        void deleteReadingListItem(id);
        if (IsSuccessDeleteReadingList) {
          void swal("Your reading list item has been deleted", {
            icon: "success",
          });
        }
      } else {
        swal("Your reading list item is safe!");
      }
    });
  };

  // handle delete wish item
  const handleDeleteWishItem = (id: string) => {
    void swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this wishlist item!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        void deleteWishlistItem(id);
        if (IsSuccessDeleteWishList) {
          void swal("Your wishlist item has been deleted", {
            icon: "success",
          });
        }
      } else {
        swal("Your wishlist item is safe!");
      }
    });
  };

  return (
    <div key={list._id} className="w-full">
      <hr />
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-4 py-3">
          <img
            onClick={() => handleNavigate(list.book._id)}
            className="w-[100px] cursor-pointer"
            src={list.book.image}
            alt="book-image"
          />
          <div>
            <p className="text-sm">{list.book.genre}</p>
            <Link to={`/book-details/${list.book._id}`}>
              <h2 className="text-xl font-semibold">{list.book.title}</h2>
            </Link>
            <p>
              <span>by</span> <span>{list.book.author}</span>
            </p>
          </div>
        </div>
        <div>
          <button
            className="btn btn-error btn-outline"
            onClick={() =>
              pathname === "/wishlist"
                ? handleDeleteWishItem(list._id)
                : handleDeleteReadingListItem(list._id)
            }
          >
            <RiDeleteBin6Line className="text-4xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
