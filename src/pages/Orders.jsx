import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          "http://localhost:5000/api/v1/orders/admin",
          config
        );

        setOrders(response.data.orders);
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching orders:", error);
        toast.error("Failed to fetch orders");
        setLoading(false); // Also set loading to false in case of error
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <h3 className="text-center pt-4 border-bottom fw-bolder pb-3">
        Total Orders
      </h3>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="table-responsive border">
          <table className="table table-striped table-hover table-bordered border-danger">
            <thead>
              <tr>
                {/* <th>Order ID</th>
                <th>Order Date</th> */}

                <th>Shipping Info</th>
                <th>OrderItems</th>
                <th>Items Price</th>
                <th>Shipping Price</th>
                <th>Tax Price</th>
                <th>Total Price</th>
                <th>Order Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  {/* <td>{order._id}</td>
                  <td>{new Date(order.createdAt).toLocaleString()}</td> */}

                  <td>
                    {order.shippingInfo ? (
                      <>
                        <div>
                          <strong>City:</strong>{" "}
                          <span style={{ fontSize: '14px' }}>{order.shippingInfo.city}</span>
                        </div>
                       
                        <div>
                          <strong>Country:</strong>{" "}
                          <span style={{ fontSize: '14px' }}>{order.shippingInfo.country}</span>
                        </div>
                        <div>
                          <strong>Pin Code:</strong>{" "}
                          <span style={{ fontSize: '14px' }}> {order.shippingInfo.pinCode}</span>
                        </div>
                      </>
                    ) : (
                      <div>Shipping information not available</div>
                    )}
                  </td>

                  <td>
                    <ul>
                      {order.orderItems.map((item) => (
                        <li key={item._id}>
                          <div>
                            <strong>Name:</strong> {item.name}
                          </div>
                          <div>
                            <strong>Price:</strong> Rs. {item.price}
                          </div>
                          <div>
                            <strong>Quantity:</strong> {item.quantity}
                          </div>
                          <div>
                            <strong>Image:</strong> {item.image}
                          </div>
                          <div>
                            <strong>Product:</strong> {item.product}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>Rs. {order.itemsPrice}</td>
                  <td>Rs. {order.shippingPrice}</td>
                  <td>Rs. {order.taxPrice}</td>

                  <td>Rs. {order.totalPrice}</td>
                  <td>{order.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Order;
