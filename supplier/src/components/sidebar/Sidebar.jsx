import "./sidebar.css";
import { AllInbox, AttachMoney, CheckCircle } from "@material-ui/icons";
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
                <AllInbox className="sidebarIcon" />
                Supply Requests
              </li>
            </Link>
            <Link to="/delivered" className="link">
              <li className="sidebarListItem">
                <CheckCircle className="sidebarIcon" />
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
