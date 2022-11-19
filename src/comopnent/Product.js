import "../comopnent/product.css";
function Product(props) {
 
  let { product } = props;
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col">Rate</th>
            <th scope="col">Description</th>
            <th scope="col">View Products</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{product.id}</th>
            <td>{product.title}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.rating.rate}</td>
            <td>{product.description.slice(0, 40)}...</td>
            <td>
              <img src={product.image} alt={product.title} />
            </td>

            {/* <td>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    ViewDetalis(product);
                  }}
                >
                  View Products
                </button>
              </td>
             */}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Product;
