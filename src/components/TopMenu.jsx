import { Link } from "react-router-dom";
import "../App.css"

const TopMenu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 ">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span style={{fontWeight:"bold",color:"white", fontStyle:"italic"}}>ElDeep</span><span style={{fontWeight:"bold",color:"orange",fontStyle:"italic"}}>Store</span>
        </Link>
        <button 
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav">
            <li className="nav-item dropdown"
>
              <button
                className="btn nav-link dropdown-toggle "
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                style={{color:"white"}}
              >
                All Pages
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/account/signin">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/account/signup">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/checkout">
                    Checkout Page
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/contact-us">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/fsafasf">
                    404 Page Not Found
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/500">
                    500 Internal Server Error
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item" >
              <Link className="nav-link" to="/category" style={{color:"white"}}>
                Fashion
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category" style={{color:"white"}}>
                Supermarket
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category" style={{color:"white"}}>
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category"style={{color:"white"}}>
                Furniture
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category"style={{color:"white"}}>
                Garden & Outdoors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category"style={{color:"white"}}>
                Jewellery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/documentation"style={{color:"white"}}>
                Documentation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
