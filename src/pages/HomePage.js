import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      HomePage
      <div>
        <h2>
          Go to buy my fake Products <Link to="/products">All Products</Link>
        </h2>
      </div>
    </div>
  );
};
export default HomePage;
