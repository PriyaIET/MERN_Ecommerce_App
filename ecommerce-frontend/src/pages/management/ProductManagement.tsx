import { ChangeEvent, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const img =
  "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT5uYXg6VAdEMyToxmCjPwj115HN7iM3l83tsA6XIsjNE90PropU2wU2RAoi_-oMJOZOlCAINtnK3kdLeKnOHSjTUowr72tKbXo1Vseu0yuUHMmHUmjFh0Pzw";

const ProductManagement = () => {
  const [name, setName] = useState<string>("Puma shoes");
  const [price, setPrice] = useState<number>(38929);
  const [stock, setStock] = useState<number>(10);
  const [photo, setPhoto] = useState<string>(img);

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };
  return (
    <div className="admin-container">
      {/* SideBar */}
      <AdminSidebar />
      {/* main */}
      <main className="product-management">
        <section>
          <strong>ID-fhlaks</strong>
          <img src={photo} alt="productImage" />
          <p>{name}</p>
          {stock > 0 ? (
            <span className="green">{stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}
          <h3>${price}</h3>
        </section>
        <article>
          <form action="">
            <h2>New Product</h2>
            <div>
              <label> Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label> Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input required type="file" onChange={changeImageHandler} />
            </div>
            {photo && <img src={photo} alt="new product image" />}
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
