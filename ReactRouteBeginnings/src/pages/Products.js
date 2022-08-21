import { Link } from "react-router-dom";

const Products = () => {

  return (
    <section>
      <h1>Products Page</h1>
      <ul>
        <li><Link to={"/products/p1"}>Abrigo</Link></li>
        <li><Link to={"/products/p2"}>Pantalon Jean</Link></li>
        <li><Link to={"/products/p3"}>Blusa</Link></li>
      </ul>
    </section>
  );
};

export default Products;