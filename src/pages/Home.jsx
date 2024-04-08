import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
    

      {/* all products showing in home */}
      <h3 className="text-center  pt-4  fw-bolder pb-3">
        Total Available Products{" "}
      </h3>
      {/* total fetched products shows */}
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered border-primary">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      style={{ width: "50px" }}
                    />
                  </td>
                  <td>{product.name}</td>
                  <td>Rs.{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.brand}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* products add button */}
    </>
  );
};

export default Home;
