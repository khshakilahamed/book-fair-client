import { createBrowserRouter } from "react-router-dom";
import Books from "../pages/Books/Books";
import AddBook from "../pages/Books/AddBook";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BookDetails from "../components/BookDetails/BookDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
      {
        path: "/addNewBook",
        element: <AddBook />,
      },
    ],
  },
  {
    path: "/auth",
    element: <App />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default routes;
