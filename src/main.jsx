import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./components/header/Header";
import CartProduct from "./components/products/CartProduct";
import ProductDetail from "./components/product-details/ProductDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "",
        element: <CartProduct />,
      },
      { path: "product-detail/:product_id", element: <ProductDetail /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
