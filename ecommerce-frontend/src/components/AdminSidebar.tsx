import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link, Location, useLocation } from "react-router-dom";
import { IconType } from "react-icons";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <Li
            url="/admin/dashboard"
            text="Dashboard"
            location={location}
            Icon={RiDashboardFill}
          />
          <Li
            url="/admin/product"
            text="Product"
            location={location}
            Icon={RiShoppingBag3Fill}
          />
          <Li
            url="/admin/customer"
            text="Customer"
            location={location}
            Icon={IoIosPeople}
          />
          <Li
            url="/admin/transaction"
            text="Transaction"
            location={location}
            Icon={AiFillFileText}
          />
        </ul>
      </div>
    </aside>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0, 115, 255, 0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgba(0, 115, 255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
