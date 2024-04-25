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
// } from "./components/UI/molecules/LazyLoader";
import Index from "./pages/NavBar";
import { HomePage } from "./pages/HomePage";
import ProductListing from "./pages/ProductListing/ProductListing";
import ProductDetails from "./pages/ProductDetails/index";

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