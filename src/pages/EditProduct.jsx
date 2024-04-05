import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({
    name: "",
    image:"",
    color:"",
    price: "",
    desc: "",
    category: "",
    brand: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
       
        const response = await axios.get(
          `http://localhost:5000/api/v1/products/${id}`,
          
        );
        const product = response.data;
        setProductData(product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = name === "images" ? value.split(',').map(url => url.trim()) : value;

    setProductData({
      ...productData,
      [name]: updatedValue,
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
      const response = await axios.put(
        `http://localhost:5000/api/v1/editproduct/${id}`,
        productData,
        config
      );
      toast.success("Product updated successfully");
      console.log("Product updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <h3 className="text-center pt-1 fw-bolder  text-uppercase ">
          Edit Products
        </h3>
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="border px-5 border-primary "
        >
          <div className="mb-2">
            <label htmlFor="name" className="form-label">
              Product Name :
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={productData.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="images" className="form-label">
              Image URLs :
            </label>
            <input
              type="text"
              className="form-control"
              id="images"
              name="images"
              value={productData.image}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="price" className="form-label">
              Price :
            </label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={productData.price}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="color" className="form-label">
              Color:
            </label>
            <input
              type="text"
              className="form-control"
              id="color"
              name="color"
              value={productData.color}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="desc" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="desc"
              name="desc"
              value={productData.desc}
              onChange={handleChange}
              style={{ height: "140px" }}
            ></textarea>
          </div>

          <div className="mb-2">
            <label htmlFor="category" className="form-label">
              Category :
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              name="category"
              value={productData.category}
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="brand" className="form-label">
              Brand:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              id="brand"
              name="brand"
              value={productData.brand}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary mb-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
