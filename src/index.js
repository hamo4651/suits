import * as React from "react";
import { createRoot } from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import FeaturesPage from "./FeaturesPage/FeaturesPage";
import Downlowd from "./Downlowd/Downlowd";
// import Cart from "./Cart";
import ProductPage from "./ProductPage/ProductPage";
// import Cart from "./ProductPage/Cart";
import CartPage from './ProductPage/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App/>
      </div>
    ),
  },
  {
    path: "about",
    element: (
    
    <FeaturesPage/>
    
      ),
  },
  {
    path: "servises",
    element: <Downlowd/>,
  }, 
  {
    path: "product",
    element: <ProductPage/>,
  },
  {
    path: "cart",
    element: <CartPage/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);