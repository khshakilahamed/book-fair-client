import { Link, useLocation } from "react-router-dom";
import InputType from "../InputType/InputType";
import { useAppDispatch } from "../../redux/hook";
import { searchBook } from "../../routes/features/book/bookSlice";

const Nav = () => {
  // const [searchInput, setSearchInput] = useState<string>("");
  const location = useLocation();

  const dispatch = useAppDispatch();

  const handleSearch = (e: { target: { value: string } }) => {
    // setSearchInput(e.target.value);
    dispatch(searchBook(e.target.value));
  };

  return (
    <div className="bg-gray-50 flex justify-center">
      <div className="navbar max-w-[1280px] ">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            BookFair
          </Link>
        </div>

        <div className="flex-none gap-2">
          <div className="flex-none">
            <ul className="menu menu-horizontal gap-3 px-1">
              <li className="text-base hidden md:flex">
                <Link to="/">Home</Link>
              </li>
              <li className="text-base hidden md:flex">
                <Link to="/books">Books</Link>
              </li>
              <li className="text-base hidden md:flex">
                <Link to="/addNewBook">Add Book</Link>
              </li>
            </ul>
          </div>
          {location?.pathname === "/books" && (
            <div>
              <InputType
                label="Search"
                id="search"
                placeholder="Search..."
                type="text"
                name="search"
                labelClassName="hidden"
                className="border py-1 px-2 rounded border-gray-800"
                onChange={handleSearch}
              />
            </div>
          )}

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li className="text-base flex md:hidden">
                <Link to="/">Home</Link>
              </li>
              <li className="text-base flex md:hidden">
                <Link to="/books">Books</Link>
              </li>
              <li className="text-base flex md:hidden">
                <Link to="/addNewBook">Add Book</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/auth/login">
              <button className="btn btn-error">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
