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

const routes = [
  {
    path: "/",
    element: <Index />,
    // loader: <Loader />,
  },
  {
    path: "/home",
    element: <HomePage />,
    // loader: <Loader />,
  },
  {
    path: "/productListing",
    element: <ProductListing />,
    // loader: <Loader />,
  },
  {
    path: "/productdetails",
    element: <ProductDetails />,
    // loader: <Loader />,
  },
  {
    path: "/login",
    element: <Login />,
    // loader: <Loader />,
  },
  {
    path: "/signup",
    element: <AccountSignUp />,
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

  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Navigate replace to="/login" />} /> */}
        {routes.map(({ path, element, loader }) => (
          <Route
            path={path}
            element={
              <React.Suspense fallback={loader}>{element}</React.Suspense>
            }
            key={path}
          />
        ))}
        {/* <Route
          exact
          path="*"
          element={
            <React.Suspense fallback={<Loader />}>
              <ErrorInfo type="404" />
            </React.Suspense>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default AllRoutes;
