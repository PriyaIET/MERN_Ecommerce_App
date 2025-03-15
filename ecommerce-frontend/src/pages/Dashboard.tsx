import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/userpic.png";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";

const Dashboard = () => {
  return (
    <div className="adminContainer">
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
        <section className="widgetcontainer">
          <WidgetItem
            heading="Revenue"
            percent={40}
            amount={true}
            value={340000}
            color="rgb(0,115, 255)"
          />
          <WidgetItem
            heading="Revenue"
            percent={20}
            amount={true}
            value={340000}
            color="rgb(0,115, 255)"
          />
          <WidgetItem
            heading="Revenue"
            percent={30}
            amount={true}
            value={340000}
            color="rgb(0,115, 255)"
          />
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
  amount,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
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
      className="widgetCircle"
      style={{
        background: `conic-gradient(
        ${color} ${Math.abs(percent)/100 * 360}deg,
        rgb(255, 255, 255) 0
        )`,
      }}
    >
      <span style={{
        color
      }}>{percent}%</span>
    </div>
  </article>
);

export default Dashboard;
