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
import Services from "./components/ui/Services";
import Fertilizer from "./components/pages/Fertilizer";
import Pesticides from "./components/pages/Pesticides";
import Herbicides from "./components/pages/Herbicides";
import Nutrition from "./components/pages/Nutrition";
import Equipment from "./components/pages/Equipment";
import Login from "./components/pages/Login";
import Seed from "./components/pages/Seeds";


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
        element: (
          <>
            <Hero />
            <Services />
          </>
        ),
      },
      {
        path: "/fertilizer",
        element: <Fertilizer />,
      },
      {
        path: "/seeds",
        element: <Seed />,
      },
      {
        path: "/pesticides",
        element: <Pesticides />,
      },
      {
        path: "/herbicides",
        element: <Herbicides />,
      },
      {
        path: "/equipment",
        element: <Equipment />,
      },
      {
        path: "/nutrition",
        element: <Nutrition />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
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
