import { lazy } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconJournalCheck } from "bootstrap-icons/icons/journal-check.svg";
import { ReactComponent as IconChatRightText } from "bootstrap-icons/icons/chat-right-text.svg";
import { ReactComponent as IconNewspaper } from "bootstrap-icons/icons/newspaper.svg";
import { ReactComponent as IconPersonSquare } from "bootstrap-icons/icons/person-square.svg";
import { ReactComponent as IconReceiptCutoff } from "bootstrap-icons/icons/receipt-cutoff.svg";
import { ReactComponent as IconCalculator } from "bootstrap-icons/icons/calculator.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

const Search = lazy(() => import("../../components/Search"));

const SupportView = () => {
  return (
    <div>
      <div className="bg-dark bg-gradient p-5 text-white text-center">
        <div className="display-5 mb-4">How can we help you today?</div>
        <div className="container px-5">
          <Search />
        </div>
      </div>
      <div className="bg-secondary py-4">
        <div className="container">
          <div className="row gx-5">
            <div className="col-md-4">
              <div className="row bg-white p-4 text-center">
                <div className="col-2">
                  <IconJournalCheck
                    className="i-va display-5 text-warning"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="col">
                  <h5>Knowledge Base</h5>
                  <div className="small text-muted">
                    40 Article / 12 Categories
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row bg-white p-4 text-center">
                <div className="col-2">
                  <IconChatRightText
                    className="i-va display-5 text-success"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="col">
                  <h5>Forums</h5>
                  <div className="small text-muted">10 Topics / 7 Posts</div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row bg-white p-4 text-center">
                <div className="col-2">
                  <IconNewspaper
                    className="i-va display-5 text-danger"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="col">
                  <h5>News</h5>
                  <div className="small text-muted">
                    15 Posts / 12 Categories
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-3 mb-3">
        <div className="container">
          <div className="row gx-3">
            <div className="col-md-3">
              <div className="border pt-3">
                <div className="text-center py-2">
                  <IconPersonSquare
                    className="i-va display-6 text-info"
                    width={40}
                    height={40}
                  />
                  <div className="fw-bold py-2">My Account</div>
                </div>
                <div className="list-group list-group-flush">
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                   SignUp
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    SignIn
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    LogOut
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                  Security Accounts
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Data Safe
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="border pt-3">
                <div className="text-center py-2">
                  <IconReceiptCutoff
                    className="i-va display-6 text-warning"
                    width={40}
                    height={40}
                  />
                  <div className="fw-bold py-2">Charges & Refunds</div>
                </div>
                <div className="list-group list-group-flush">
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Available Charges
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                 Fast Deleviry
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Available Cashing
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                   Existing Fees
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Clients Discounts
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="border pt-3">
                <div className="text-center py-2">
                  <IconCalculator
                    className="i-va display-6 text-danger"
                    width={40}
                    height={40}
                  />
                  <div className="fw-bold py-2">Accounting & Textes</div>
                </div>
                <div className="list-group list-group-flush">
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Validation Form
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                  Data Store
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Security
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Fast server creation
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Privacy & Policy
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="border pt-3">
                <div className="text-center py-2">
                  <IconCart3
                    className="i-va display-6 text-success"
                    width={40}
                    height={40}
                  />
                  <div className="fw-bold py-2">Cart</div>
                </div>
                <div className="list-group list-group-flush">
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Cart Orders
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Cart Details
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Cart Security
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Cart Saveed
                  </Link>
                  <Link
                    to="/"
                    className="list-group-item list-group-item-action"
                  >
                    Cart Amount
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportView;
