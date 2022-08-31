import "./sidebar.css";
import { Storefront, AttachMoney } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem">
                <Storefront className="sidebarIcon" />
                Supply Requests
              </li>
            </Link>
            <Link to="/delivered" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Delivered Orders
              </li>
            </Link>
            <Link to="/transactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Transactions
              </li>
            </Link>
            {/* </ul></Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
