import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TableHOC from "../../components/admin/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OlQLlJj4mHeAPlqTZGW6RcwcrYJvtWuNyg&s";
const img2 =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMegFIjsTQDn-Dr-mM9G0eMDV_7yjY44-qaA&s";

const arr: DataType[] = [
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajkhsh">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Macbook" />,
    name: "Macbook",
    price: 6903432,
    stock: 9,
    action: <Link to="/admin/product/sajkhsh">Manage</Link>,
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajkhsh">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Macbook" />,
    name: "Macbook",
    price: 6903432,
    stock: 9,
    action: <Link to="/admin/product/sajkhsh">Manage</Link>,
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajkhsh">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Macbook" />,
    name: "Macbook",
    price: 6903432,
    stock: 9,
    action: <Link to="/admin/product/sajkhsh">Manage</Link>,
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajkhsh">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Macbook" />,
    name: "Macbook",
    price: 6903432,
    stock: 9,
    action: <Link to="/admin/product/sajkhsh">Manage</Link>,
  },
  {
    photo: <img src={img} alt="shoes" />,
    name: "Puma Shoes Air Jordan Cook Nigga 2023",
    price: 690,
    stock: 3,
    action: <Link to="/admin/product/sajkhsh">Manage</Link>,
  },
  {
    photo: <img src={img2} alt="Macbook" />,
    name: "Macbook",
    price: 6903432,
    stock: 9,
    action: <Link to="/admin/product/sajkhsh">Manage</Link>,
  },
];

const Products = () => {
  const [data] = useState<DataType[]>(arr);
  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Products",
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
      <Link to="/admin/product/new" className="create-product-btn">
        <FaPlus />
      </Link>
    </div>
  );
};

export default Products;
