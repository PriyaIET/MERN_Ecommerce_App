import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/userpic.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="admin-container">
      {/* SideBar */}
      <AdminSidebar />
      {/* main */}
      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>
        <section className="widget-container">
          <WidgetItem
            heading="Revenue"
            percent={40}
            amount={true}
            value={340000}
            color="rgb(0,115, 255)"
          />
          <WidgetItem
            heading="Users"
            percent={-20}
            value={340}
            color="rgb(0,198, 202)"
          />
          <WidgetItem
            heading="Transactions"
            percent={80}
            value={23000}
            color="rgb(255, 196, 0)"
          />
          <WidgetItem
            heading="Products"
            percent={30}
            value={1000}
            color="rgb(76, 0, 255)"
          />
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* Graph */}
          </div>
          <div className="dashboard-categories">
            <h2>Inventory</h2>
            <div>
              <CategoryItem
                heading={"Laptops"}
                value={70}
                color="hsl(169, 100%, 50%)"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%
        </span>
      )}
    </div>

    <div
      className="widget-circle"
      style={{
        background: `conic-gradient(
        ${color} ${(Math.abs(percent) / 100) * 360}deg,
        rgb(255, 255, 255) 0
        )`,
      }}
    >
      <span
        style={{
          color,
        }}
      >
        {percent}%
      </span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  heading: string;
  value: number;
}

const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="category-item">
    <h5>{heading}</h5>
    <div>
      <div
        style={{
          backgroundColor: color,
          width: `${value}%`,
        }}
      >
      </div>
    </div>
    <span>{value}%</span>
  </div>
);

export default Dashboard;
