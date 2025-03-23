import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar"
import { Column } from "react-table";
import TableHOC from "../components/TableHOC";
import { Link } from "react-router-dom";

interface DataType {
  user: string;
  amount: number;
  discount: number;
  quantity: number;
  status:ReactElement;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "User",
    accessor: "user",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header:"Status",
    accessor:"status"
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const arr:DataType[]=[{
  user: "Charas",
  amount:4567,
  discount:400,
  quantity:5,
  status: <span className="red">Processing</span>,
  action: <Link to="/admin/transactions/shkf">Manage</Link>
},
{
  user: "Xavirors",
  amount:46798,
  discount: 600,
  quantity: 9,
  status: <span className="green">Shipped</span>,
  action: <Link to="/admin/transactions/shkf">Manage</Link>
},
{
  user: "Xavirors",
  amount:66098,
  discount: 600,
  quantity: 10,
  status: <span className="purple">Delivered</span>,
  action: <Link to="/admin/transactions/shkf">Manage</Link>
}
];

const Transaction = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(columns, data, "dashboard-product-box", "Transactions", true),
    []
  );
  return (
    <div className="admin-container">
      {/* SideBar */}
      <AdminSidebar/>
      {/* main */}
      <main>
        {Table()}
      </main>
    </div>
  )
}

export default Transaction