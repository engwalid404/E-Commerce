import { Link } from "react-router-dom";

const NotificationView = () => {
  return (
    <div className="container mb-3">
      <h4 className="my-3">Notification</h4>

      <div className="list-group">
        <Link
          to="/"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              <i className="bi bi-bell-fill" /> order pindding
            </h5>
            <span className="small">
              <i className="bi bi-clock"></i> 2 mins ago
            </span>
          </div>
          <p className="mb-1">
            
          </p>
        </Link>
        <Link to="/" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between text-success">
            <h5 className="mb-1">
              <i className="bi bi-tag-fill" /> Coupon!
            </h5>
            <span className="small text-muted">
              <i className="bi bi-clock"></i> 5 hours ago
            </span>
          </div>
          <p className="mb-1">
            your orders were pindded
          </p>
        </Link>
        <Link to="/" className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between text-danger">
            <h5 className="mb-1">
              <i className="bi bi-cash" /> Price dropped!
            </h5>
            <span className="small text-muted">
              <i className="bi bi-clock"></i> 10 hours ago
            </span>
          </div>
          <p className="mb-1">
           you can go back the prices of orders
          </p>
          <small className="text-muted">the prices of orders have been changed</small>
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action bg-success text-white"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              <i className="bi bi-cash" /> Order Placed
            </h5>
            <span className="small text-white">
              <i className="bi bi-cart-check-fill"></i> 12 hours ago
            </span>
          </div>
          <p className="mb-1">
           Remmember that you replaced somr products from your orders
          </p>
        </Link>
        <Link
          to="/"
          className="list-group-item list-group-item-action bg-danger text-white"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">
              <i className="bi bi-cart-x-fill"></i> Order Cancelled
            </h5>
            <span className="small text-white">
              <i className="bi bi-clock"></i> 2 days ago
            </span>
          </div>
          <p className="mb-1">
            you have already canceled the orders
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NotificationView;
