import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="bg-gray-50 flex justify-center">
      <div className="navbar max-w-[1280px] ">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">BookFair</a>
        </div>

        <div className="flex-none gap-2">
          <div className="flex-none">
            <ul className="menu menu-horizontal gap-3 px-1">
              <li className="text-base">
                <Link to="/">Home</Link>
              </li>
              <li className="text-base">
                <Link to="/books">Books</Link>
              </li>
              <li className="text-base">
                <Link to="/addNewBook">Add Book</Link>
              </li>
            </ul>
          </div>
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
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
