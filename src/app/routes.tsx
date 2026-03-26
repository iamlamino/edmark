import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { About } from "./pages/About";
import { Distributor } from "./pages/Distributor";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "products", Component: Products },
      { path: "product/:slug", Component: ProductDetail },
      { path: "about", Component: About },
      { path: "distributor", Component: Distributor },
      { path: "contact", Component: Contact },
      { path: "cart", Component: Cart },
      { path: "*", Component: NotFound },
    ],
  },
]);
