import { useState } from "react";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { OrderItemType, OrderType } from "../../../types";
import { Link } from "react-router-dom";

const img =
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT5uYXg6VAdEMyToxmCjPwj115HN7iM3l83tsA6XIsjNE90PropU2wU2RAoi_-oMJOZOlCAINtnK3kdLeKnOHSjTUowr72tKbXo1Vseu0yuUHMmHUmjFh0Pzw";
const orderItems: OrderItemType[] = [
  {
    name: "Puma shoes",
    photo: img,
    _id: "asadafda",
    quantity: 4,
    price: 6000,
  },
];

const TransactionMangement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Priya",
    address: "77 black street",
    city: "Neyword",
    state: "Nevada",
    country: "India",
    pinCode: 223344,
    status: "Processing",
    subTotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 - 1200 + 0,
    orderItems,
    _id: "dfhakfjhaks",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pinCode,
    subTotal,
    total,
    tax,
    shippingCharges,
    discount,
    status,
  } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }));
  };
  return (
    <div className="admin-container">
      {/* SideBar */}
      <AdminSidebar />
      {/* main */}
      <main className="product-management">
        <section style={{
          padding:"2rem"
        }}>
          <h2>Order Items</h2>
          {order.orderItems.map((item) => (
            <ProductCart
              name={item.name}
              price={item.price}
              photo={item.photo}
              _id={item._id}
              quantity={item.quantity}
            />
          ))}
        </section>
        <article className="shipping-info-card">
          <h1>Order Info</h1>

          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>
            Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}
          </p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subTotal}</p>
          <p>Shippin Charges: {shippingCharges}</p>
          <p>Subtotal: {subTotal}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            Shipping status: {" "}
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              {status}
            </span>
          </p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductCart = ({ name, photo, quantity, price, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
);

export default TransactionMangement;
