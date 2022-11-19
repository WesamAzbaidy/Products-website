import Card from "react-bootstrap/Card";
function ProductCard(props) {
  let { product } = props;
  return (
    <div>
      <Card
        style={{ width: "18rem", height: "425px" }}
        className="align-items-center m-2"
      >
        <Card.Img
          variant="top"
          src={product.image}
          className="card-img-top"
          style={{ width: "150px", height: "150px" }}
        />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {product.category}
          </Card.Subtitle>
          <Card.Text>{product.description.slice(0, 40)}...</Card.Text>
          <Card.Text>Rate : {product.rating.rate}</Card.Text>
          <Card.Text>Price : {product.price}$</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProductCard;
