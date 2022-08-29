import "./newProduct.css";

export default function NewProduct() {
  return (
    <div className="newProduct" >
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Product Title</label>
          <input type="text" />
        </div>
        <div className="addProductItem">
          <label>Product Description</label>
          <input type="text" />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}
