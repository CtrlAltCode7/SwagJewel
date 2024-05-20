import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// const Login = React.lazy(() => import("./pages/auth/components/Login"));
// import {
//   Loader,
//   ListingLoader,
//   DetailLoader,
// } from "./components/ui/molecules/lazyLoader";
import Index from "./pages/navBar/index";
import { HomePage } from "./pages/homePage";
import ProductListing from "./pages/productListing/productListing";
import ProductDetails from "./pages/productDetails/index";
import Login from "./pages/login";
import AccountSignUp from "./pages/accountSignup";
import ContactUs from "./pages/contactUs/index";
import InitialPageLoad from "./pages/initialPageLoad/initialPageLoad";
import { Loader } from "./components/lazyLoader";
import { PrivateRoute } from "./pages/protectedroute";
import Error from "./pages/error/error";
import { PublicRoute } from "./pages/publicRoute";
import Catalogs from "./pages/catalogs/index";

const routes = [
  {
    path: "/",
    element: <InitialPageLoad />,
    // loader: <Loader />,
  },
  {
    path: "/home",
    element: (
      <PrivateRoute>
        <Index />
      </PrivateRoute>
    ),
    // loader: <Loader />,
  },
  {
    path: "/homePage",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
    // loader: <Loader />,
  },
  {
    path: "/productListing",
    element: (
      <PrivateRoute>
        <ProductListing />
      </PrivateRoute>
    ),
    // loader: <Loader />,
  },
  {
    path: "/productdetails",
    element: (
      <PrivateRoute>
        <ProductDetails />
      </PrivateRoute>
    ),
    // loader: <Loader />,
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <Login />
      </PublicRoute>
    ),
    // loader: <Loader />,
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <AccountSignUp />
      </PublicRoute>
    ),
    // loader: <Loader />,
  },
  {
    path: "/contact-us",
    element: (
      <PrivateRoute>
        <ContactUs />
      </PrivateRoute>
    ),
    // loader: <Loader />,
  },
  {
    path: "/catalogs",
    element: (
      <PrivateRoute>
        <Catalogs />
      </PrivateRoute>
    ),
    // loader: <Loader />,
  },
];

const AllRoutes = () => {
  const dispatch = useDispatch();
  const [hydrated, setHydrated] = useState(false);
  // const state = useSelector((state) => state[REDUCER_TYPES.AUTH]);

  useEffect(() => {
    // resetAuth(dispatch, state);
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Navigate replace to="/login" />} /> */}
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate replace to="/home" /> : <InitialPageLoad />
          }
        />
        {routes.map(({ path, element, loader }) => (
          <Route
            path={path}
            element={
              <React.Suspense fallback={loader}>{element}</React.Suspense>
            }
            key={path}
          />
        ))}
        <Route
          exact
          path="*"
          element={
            <React.Suspense fallback={<Loader />}>
              {/* <ErrorInfo type="404" /> */}
              <Error errorCode="404" errorMessage="Access Denied" />
            </React.Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
