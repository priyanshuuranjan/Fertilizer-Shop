import Header from "./components/ui/Header";
import Hero from "./components/ui/Hero";
import Footer from "./components/ui/Footer";
import Cart from "./components/ui/Cart";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import NotFound from "./components/ui/NotFound";
import Contact from "./components/ui/Contact";
import Order from "./components/ui/Order";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Hero />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="font-bodyFont ">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
