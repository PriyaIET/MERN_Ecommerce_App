import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Column } from "react-table";
import TableHOC from "../../components/admin/TableHOC";
import { FaTrash } from "react-icons/fa";
interface DataType {
  avatar: ReactElement;
  name: string;
  gender: string;
  email: string;
  role: string;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const img = "https://randomuser.me/api/portraits/women/53.jpg";
const img2 = "https://randomuser.me/api/portraits/men/59.jpg";
const arr: DataType[] = [
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img} alt="lady1" />,
    name: "Emily Palmer",
    gender: "female",
    email: "emily.palmer@gmail.com",
    role: "Customer Support",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img2} alt="lady1" />,
    name: "Henry wang",
    gender: "male",
    email: "henry.wang@gmail.com",
    role: "User",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];
const Customer = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
      true
    ),
    []
  );
  return (
    <div className="admin-container">
      {/* SideBar */}
      <AdminSidebar />
      {/* main */}
      <main>{Table()}</main>
    </div>
  );
};

export default Customer;
