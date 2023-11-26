import { Link, useLocation } from "react-router-dom";
import InputType from "../InputType/InputType";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { searchBook } from "../../redux/features/book/bookSlice";
import { userLogout } from "../../redux/features/user/userActions";
import userIcon from "./../../assets/images/userIcon.png";
import { BsHeart } from "react-icons/bs";
import { AiOutlineRead } from "react-icons/ai";
import logo from "./../../assets/images/logo.png";

const Nav = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  const location = useLocation();

  const handleSearch = (e: { target: { value: string } }) => {
    dispatch(searchBook(e.target.value));
  };

  const handleLogout = () => {
    void dispatch(userLogout());
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>
      </li>
      {user?.email && (
        <>
          <li>
            <Link to="/addNewBook">Add Book</Link>
          </li>
          <li>
            <Link to="/my-books">My Book</Link>
          </li>
          <li>
            <Link to="/reading-list">
              <AiOutlineRead className="text-2xl" />
            </Link>
          </li>
          <li>
            <Link to="/wishlist">
              <BsHeart className="text-2xl" />
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="bg-gray-50 flex justify-center">
      <div className="navbar justify-between max-w-[1280px] ">
        {/* <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            BookFair
          </Link>
        </div> */}

        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="max-h-[60px]">
            <img className="h-full w-[100px]" src={logo} alt="" />
            {/* BookFair */}
          </Link>
        </div>

        <div className="navbar-center  gap-2">
          <div className="flex-none hidden lg:flex">
            <ul className="menu menu-horizontal gap-3 px-1">{menuItems}</ul>
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
                className="border py-1 px-2 rounded border-gray-800 w-[150px] sm:w-[200px] md:w-auto"
                onChange={handleSearch}
              />
            </div>
          )}

          {user && (
            <div className="dropdown dropdown-end ">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar border-gray-500"
              >
                <div className="w-10 rounded-full">
                  <img src={userIcon} alt="user-icon" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                {user && (
                  <li>
                    <a className="justify-between">{user.name}</a>
                    <a className="justify-between">{user.email}</a>
                  </li>
                )}
                <li>
                  <a className="justify-between">Profile</a>
                </li>

                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          )}
          {!user && (
            <div className="flex gap-2">
              <Link to="/auth/login">
                <button className="btn btn-error btn-outline">Login</button>
              </Link>
              <Link to="/auth/register">
                <button className="btn btn-error btn-outline">Register</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
