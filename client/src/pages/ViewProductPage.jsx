import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserDataContext } from "../context/userDataContext";
import products from "../data/products.js"; // Import products from products.js

function ViewProductPage() {
  const contextData = useContext(UserDataContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Product Title: {selectedProduct.name}</h2>
        <p>Product description: {selectedProduct.description}</p>
      </div>

      <div className="product-promotion-box">
        <h2>
          คุณคือสมาชิกในระดับ {contextData.userDataState.level}{" "}
          ดังนั้นคุณได้สิทธิพิเศษลด 50%
        </h2>
        <button onClick={() => alert("🥳🥳🥳🥳")}>กดรับสิทธิ</button>
      </div>

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
}

export default ViewProductPage;
