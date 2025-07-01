import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import LostFound from "../Pages/LostFound/LostFound";
import AddLostFound from "../Pages/AddLostFound/AddLostFound";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";
import MyItems from "../Pages/MyItems/MyItems";
import UpdateItem from "../Pages/updateItems/updateItems";
import AllRecoveredItems from "../Pages/AllRecoveredItems/AllRecoveredItems";
import Private from "../Private/Private";
import About from "../Pages/About/About";
import Profile from "../Pages/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/Register",
        Component: Register,
      },
      {
        path: "/lost&found",
        Component: LostFound,
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/addItems",
        element: (
          <Private>
            <AddLostFound />
          </Private>
        ),
      },
      {
        path: "/item/:id",
        element: (
          <Private>
            <ItemDetails />
          </Private>
        ),
      },
      {
        path: "/myitems",
        element: (
          <Private>
            <MyItems />
          </Private>
        ),
      },
      {
        path: "/updateItems/:id",
        element: (
          <Private>
            <UpdateItem />
          </Private>
        ),
      },
      {
        path: "/profile",
        element: (
          <Private>
            <Profile/>
          </Private>
        ),
      },
      {
        path: "/allrecovered",
        element: (
          <Private>
            <AllRecoveredItems />
          </Private>
        ),
      },
    ],
  },
]);