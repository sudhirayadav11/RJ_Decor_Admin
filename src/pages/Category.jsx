import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";
  
const Category = () => {
  const [getcategory, setGetcategory] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/getcategory"
        );
        setGetcategory(response.data.categories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteCategory = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(
        `http://localhost:5000/api/v1/deletecategory/${id}`,
        config
      );
      setGetcategory(getcategory.filter((category) => category._id !== id));
      toast.success("Category deleted successfully");
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Admin Login Please");
    }
  };

  const [productData, setProductData] = useState({
    name: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://localhost:5000/api/v1/addcategory",
        productData,config
      );
      toast.success(" Category added successful!");
      console.log("Category added successfully:", response.data);
      // Clear the form fields after successful submission
      setProductData({
        name: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding Category:", error);
    }
  };

  return (
    <>
    <div className="container mx-auto">
      <h3 className="text-center pt-1 fw-bolder  text-uppercase ">
        Add Category
      </h3>
      <div className="row d-flex justify-content-center  align-items-center ">
        <div className="col-md-8">
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="border px-3 border-primary "
          >
            <div className="mb-2">
              <label htmlFor="name" className="form-label rounded-0 ">
                Product Category Name :
              </label>
              <input
                type="text"
                className="form-control rounded-1 border-primary  "
                id="name"
                name="name"
                value={productData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="image" className="form-label">
                Image URL :
              </label>
              <input
                type="text"
                className="form-control rounded-1 border-primary "
                id="image"
                name="image"
                value={productData.image}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>


 <h4 className="text-center pt-5 text-uppercase  font-monospace  fw-semibold ">
        All Categories
      </h4>
      <div className="container">
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered  border-danger">
            <thead>
              <tr>
                <th>Category Image</th>
                <th>Category Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {getcategory &&
                getcategory.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: "50px" }}
                      />
                    </td>
                    <td>{product.name}</td>

                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteCategory(product._id)}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      </>






  );
};

export default Category;
