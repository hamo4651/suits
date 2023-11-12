import React from "react";
import { Link } from "react-router-dom";
import { CartProvider , useCart } from "react-use-cart";

function Navbar() {
  const { totalItems } = useCart();

  return (
    
    <CartProvider>
       <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <Link className="navbar-brand "  href="/" ><img className="logo" src="./images/logo.png"></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fa-solid fa-bars"></i>
                  </button>
          <div className="collapse navbar-collapse" id="main">
            <ul className="navbar-nav ms-auto mb-2  mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active  p-2 p-lg-2" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  p-2 ps-lg-3" to="/about">about</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  p-2 ps-lg-3" to="/servises">servises</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  p-2 ps-lg-3" to="/product">Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  p-2 ps-lg-3" to="/portifiolo">portifiolo</Link>
              </li>
             
              
            </ul>
            <div className="search ms-3 ps-3 pe-3 d-none d-lg-block">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <a href="#" className="main-btn btn btn-danger ms-3 ">log in</a>
            <Link   to="/cart"><i class="fa-solid fa-cart-plus bnb ms-4"></i></Link>
            <h5 className="text-light px-2">({totalItems})</h5>

          </div>
        </div>
      </nav>
    
    </CartProvider>
  );
}
 
export default Navbar;
