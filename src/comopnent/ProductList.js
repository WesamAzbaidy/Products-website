import { useState, useEffect } from "react";
import Product from "./Product";
import axios from "axios";

function ProductList() {
  const apiURL = "https://fakestoreapi.com/products";
  const [products, setProduct] = useState([]);
  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setProduct(response.data);
    });
  }, []);
  return (
    <div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
}
export default ProductList;
