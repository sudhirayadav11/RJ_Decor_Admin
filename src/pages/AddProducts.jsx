import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProducts = () => {
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    price: "",
    colors: "",
    sizes: "",
    desc: "",
    fabric: "",
    category: "",
    brand: "",
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
      // Splitting the sizes string into an array
      const sizesArray = productData.sizes
        .split(",")
        .map((size) => size.trim());
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(
        "http://localhost:5000/api/v1/products/new",
        {
          ...productData,
          sizes: sizesArray,
        },
        config
      );
      toast.success("Product added successful!");
      console.log("Product added successfully:", response.data);
      // Clear the form fields after successful submission
      setProductData({
        name: "",
        image: "",
        price: "",
        colors: "",
        sizes: "",
        desc: "",
        fabric: "",
        category: "",
        brand: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-center pt-1 fw-bolder  text-uppercase ">
        Add Products
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
                Product Name :
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
                Image URLs :
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

            
           {/* price and fabric */}
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="price" className="form-label">
                    Price:
                  </label>
                  <input
                    type="number"
                    className="form-control rounded-1 border-primary"
                    id="price"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="fabric" className="form-label">
                    Fabric:
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-1 border-primary"
                    id="fabric"
                    name="fabric"
                    value={productData.fabric}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* brand and color */}
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="brand" className="form-label">
                    Brand:{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-1 border-primary "
                    id="brand"
                    name="brand"
                    value={productData.brand}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="colors" className="form-label rounded-0 ">
                    Colors :
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-1 border-primary  "
                    id="colors"
                    name="colors"
                    value={productData.colors}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* category  and size */}
            <div className="row">
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="category" className="form-label">
                    Category :
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-1 border-primary "
                    id="category"
                    name="category"
                    value={productData.category}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="sizes" className="form-label">
                    Sizes :
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-1 border-primary "
                    id="sizes"
                    name="sizes"
                    value={productData.sizes}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {/* description */}
            <div className="mb-2">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <textarea
                className="form-control rounded-1 border-primary "
                id="desc"
                name="desc"
                value={productData.desc}
                onChange={handleChange}
                style={{ height: "100px" }}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary mb-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
