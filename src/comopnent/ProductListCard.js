import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
function ProductListCard() {
  const apiURL = "https://fakestoreapi.com/products";
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <div className="row gy-3 my-3">
      <h2 className="text-center m-4">Products</h2>
      {products.map((product) => {
        return (
          <div className="col-md-4 col-sm-6 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        );
      })}
    </div>
  );
}
export default ProductListCard;
