import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Services from "./components/Services";
import Restaurant from "./components/Restaurant";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
const Instamart = lazy(() => import("./components/Instamart"));
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import store from "./components/utils/store";
import Cart from "./components/Cart";
import Collection from "./components/Collection";
import Example from "./components/NavbarDefault";

let root = ReactDOM.createRoot(document.getElementById("root"));
let Main = () => {
  const [user, setUser] = useState({
    name: "Mohid Pathan",
    email: "mohidpathan@gmail.com",
    
  });
  return (
    <>
    <Provider store={store}>
      <UserContext.Provider value={{user:user, setUser:setUser}}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      {
        path: "/about/profile",
        element: <Profile />,
      },
      { path: "/services", element: <Services /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      { path: "/restaurants/:id", element: <Restaurant /> },
      { path: "/collection/:food/:collectionId", element: <Collection /> },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    
  },
],

{
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true,
  },
});

root.render(<RouterProvider router={appRouter} />);
