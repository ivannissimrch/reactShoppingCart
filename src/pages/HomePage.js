import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      HomePage
      <div>
        Display a few producst
        <Link to="products">All Products</Link>
      </div>
    </div>
  );
};
export default HomePage;
