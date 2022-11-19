import Navbar from "./comopnent/Navbar";
import ProductListCard from "./comopnent/ProductListCard";
import ContactUs from "./comopnent/ContactUs";
function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ProductListCard />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
