import { Link } from "react-router-dom";
import "./foter.css"
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-primary">
        <div className="row ">
          <div className="col-md-9 py-3 text-white">
            Get connected with us on social networks!
          </div>
          <div className="col-md-3 py-3 text-center text-white">
            <Link to="/" title="Apple">
              <i className="bi bi-apple text-light me-3"></i>
            </Link>
            <Link to="/" title="Windows">
              <i className="bi bi-windows text-light me-3"></i>
            </Link>
            <Link to="/" title="Android">
              <i className="bi bi-android2 text-light me-3"></i>
            </Link>
            || &nbsp; &nbsp;
            <Link to="/" title="Linkedin">
              <i className="bi bi-linkedin text-light me-3"></i>
            </Link>
            <Link to="/" title="Github">
              <i className="bi bi-github text-light me-3"></i>
            </Link>
            <Link to="/" title="Facebook">
              <i className="bi bi-facebook text-light me-3"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark text-white">
        <div className="row ">
          <div className="col-md-3 py-3">
            <div className="h6 ml-70">
              <Link to="/" style={{textDecoration:"none", marginTop:"100px"}}>
              <span style={{fontWeight:"bold",color:"white", fontStyle:"italic",fontSize:"35px"}}>ElDeep</span><span style={{fontWeight:"bold",color:"orange",fontStyle:"italic",fontSize:"35px"}}>Store</span>
              </Link>
            </div>
            <Link to="/">
              <img className="imgLogo ml-83" alt="logo" src="../../../images/foterLogo.png" width="170px" height="150px" />
            </Link>
            <div className="display-flex py-3 text-center text-white">
            <Link to="/" title="Apple">
              <i className="bi bi-apple text-light me-3"></i>
            </Link>
            <Link to="/" title="Windows">
              <i className="bi bi-windows text-light me-3"></i>
            </Link>
            <Link to="/" title="Android">
              <i className="bi bi-android2 text-light me-3"></i>
            </Link>
            || &nbsp; &nbsp;
            <Link to="/" title="Linkedin">
              <i className="bi bi-linkedin text-light me-3"></i>
            </Link>
            <Link to="/" title="Github">
              <i className="bi bi-github text-light me-3"></i>
            </Link>
            <Link to="/" title="Facebook">
              <i className="bi bi-facebook text-light me-3"></i>
            </Link>
          </div>



           
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Products</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link "
                >
                  Electronics
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Mobiles
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Car & bike
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Super Market
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Travel Cards
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Policy</div>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Return Policy
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Terms Of Use
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Security
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  Privacy
                </Link>
              </li>
              <li className="list-group-item bg-dark text-white border-light">
                <Link
                  to="/"
                  className="text-decoration-none text-white stretched-link"
                >
                  EPR Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 py-3">
            <div className="h6">Address</div>
            <hr />
            <address>
              <strong>Twitter, Inc.</strong>
              <br />
              Egypt / Giza 
              <br />
              new street,Ain shams
              <br />
              <abbr title="Phone">P:</abbr> (+2) 01115155650
            </address>
            <div className="h6">Customer Care</div>
            <hr />
            <i className="bi bi-telephone"></i> +0201115155650
            <br />
            <i className="bi bi-envelope"></i> engwalidrabie404@email.com
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary text-white text-center">
        <div className="row">
          <div className="col-md-2 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-briefcase text-warning"></i> Partner with us
            </Link>
          </div>
          <div className="col-md-2 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-badge-ad text-info"></i> Advertise
            </Link>
          </div>
          <div className="col-md-2 py-2">
            <Link to="/" className="text-white text-decoration-none">
              <i className="bi bi-gift"></i> Gift
            </Link>
          </div>
          <div className="col-md-3 py-2">
           copyright © {new Date().getFullYear()} Developed by <a href="mailto:engwalidrabie404@gmail.com" target="__blank"><span style={{color:"black", fontWeight:"bolder",fontStyle:"italic"}}> Eng:Walid </span></a>
          </div>
          <div className="col-md-3 py-2 bg-white">
            <img
              src="../../images/payment/american_express.webp"
              width="32"
              alt="American Express"
              className="me-2"
            />
            <img
              src="../../images/payment/maestro.webp"
              width="32"
              alt="Maestro"
              className="me-2"
            />
            <img
              src="../../images/payment/netbanking.webp"
              width="32"
              alt="Net Banking"
              className="me-2"
            />
            <img
              src="../../images/payment/paypal.webp"
              width="32"
              alt="Paypal"
              className="me-2"
            />
            <img
              src="../../images/payment/rupay.webp"
              width="32"
              alt="Rupay"
              className="me-2"
            />
            <img
              src="../../images/payment/upi.webp"
              width="32"
              alt="UPI"
              className="me-2"
            />
            <img
              src="../../images/payment/visa.webp"
              width="32"
              alt="Visa"
              className="me-2"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
