import { RiDatabaseFill, RiShoppingBag3Fill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo.</h2>
      <div>
        <h5>Dashboard</h5>
        <ul>
          <li>
            <Link to={"/admin/dashboard"}>
              <RiDatabaseFill />
              Dashborad
            </Link>
          </li>
          <li>
            <Link to={"/admin/product"}>       
              <RiShoppingBag3Fill />
              Product
            </Link>
          </li>
          <li>
            <Link to={"/admin/customer"}>       
              <IoIosPeople />
              Customer
            </Link>
          </li>
          <li>
            <Link to={"/admin/transaction"}>       
              <AiFillFileText />
              Transaction
            </Link>
          </li>
        </ul>
        {/* <Li url="/admin/dashboard" text="Dashborad" Icon={RiDatabaseFill} location={location}/> */}
      </div>
    </aside>
  );
};

export default AdminSidebar;