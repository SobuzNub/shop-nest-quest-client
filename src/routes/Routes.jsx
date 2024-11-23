
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../Home/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import AddProduct from "../components/Dashboard/Seller/AddProduct";
import MyListings from "../components/Dashboard/Seller/MyListings";
import Profile from "../components/Dashboard/Common/Profile";
import WishList from "../components/Dashboard/Buyer/WishList";
import ManageUsers from "../components/Dashboard/Admin/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/products',
        element: <Products></Products>
      },
      {
        path: '/about',
        element: <PrivateRoute>
          <About></About>
        </PrivateRoute>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        element:
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
      },
      {
        path: 'add-product',
        element:
          <SellerRoute>
            <PrivateRoute>
              <AddProduct></AddProduct>
            </PrivateRoute>
          </SellerRoute>
      },
      {
        path: 'my-listings',
        element:
          <SellerRoute>
            <PrivateRoute>
              <MyListings></MyListings>
            </PrivateRoute>
          </SellerRoute>
      },
      {
        path: 'my-wishlist',
        element:
          <PrivateRoute>
            <WishList></WishList>
          </PrivateRoute>
      },
      {
        path: 'manage-users',
        element:
          <AdminRoute>
            <PrivateRoute>
              <ManageUsers></ManageUsers>
            </PrivateRoute>
          </AdminRoute>
      },


    ]
  }
]);