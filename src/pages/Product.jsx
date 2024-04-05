import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Product = () => {
  const navigate = useNavigate();
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

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(
        `http://localhost:5000/api/v1/deleteproducts/${id}`,
        config
      );
      setProducts(products.filter((user) => user._id !== id));
      toast.success("Product deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEdit = async (id) => {
    navigate(`/editproduct/${id}`);
  };

  const addProducts = () => {
    navigate("/addproducts");
  };

  return (
    <>
      <h3 className="text-center  pt-4  fw-bolder pb-3">
        Total Available Products{" "}
      </h3>
      {/* total fetched products shows */}
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered border-primary">
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Color</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>
                   
                      <img
                        key={product._id}
                        src={product.image}
                        alt=''
                        style={{ width: "50px", marginRight: "5px" }}
                      />
                   
                  </td>
                  <td>{product.name}</td>
                  <td>Rs.{product.price}</td>
                  <td>{product.color}</td>
                  <td>{product.category}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleEdit(product._id)}
                    >
                      <MdEdit />
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(product._id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="py-4">
          <button
            className="btn btn-success text-light fw-bg-secondary "
            onClick={addProducts}
          >
            Add More products
          </button>
        </div>
      </div>

      {/* products add button */}
    </>
  );
};

export default Product;
