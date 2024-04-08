import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    colors: "",
    price: "",
    desc: "",
    sizes: "",
    fabric: "",
    category: "",
    brand: "",
  });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/products/${id}`
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
      {/* <div className="container mx-auto">
        <h3 className="text-center pt-1 fw-bolder  text-uppercase ">
          Edit Products
        </h3>
        <div className="row d-flex justify-content-center  align-items-center ">
        <div className="col-md-8">
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
            <label htmlFor="image" className="form-label">
              Image URLs :
            </label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={productData.image}
              onChange={handleChange}
            />
          </div>

          <div className="d-flex  justify-content-between align-items-center  ">
              <div className="mb-2 w-48">
                <label htmlFor="price" className="form-label">
                  Price :
                </label>
                <input
                  type="number"
                  className="form-control rounded-1 border-primary "
                  id="price"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2 w-48">
                <label htmlFor="fabric" className="form-label">
                  Fabric :
                </label>
                <input
                  type="text"
                  className="form-control rounded-1 border-primary "
                  id="fabric"
                  name="fabric"
                  value={productData.fabric}
                  onChange={handleChange}
                />
              </div>
            </div>

          <div className="mb-2">
            <label htmlFor="colors" className="form-label">
              Colors:
            </label>
            <input
              type="text"
              className="form-control"
              id="colors"
              name="colors"
              value={productData.colors}
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
        </div>
      </div> */}
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
    </>
  );
};

export default EditProduct;
