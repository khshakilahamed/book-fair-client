import { createBrowserRouter } from "react-router-dom";
import Books from "../pages/Books/Books";
import AddBook from "../pages/Books/AddBook";
import App from "../App";
import Home from "../pages/Home/Home";

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
        path: "/addNewBook",
        element: <AddBook />,
      },
    ],
  },
]);

export default routes;
