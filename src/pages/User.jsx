import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
       
        const response = await axios.get(
          "http://localhost:5000/api/v1/getAllUsers"
        );
        setUsers(response.data.user);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`http://localhost:5000/api/v1/deleteuser/${id}`,config);
      setUsers(users.filter((user) => user._id !== id));
      toast.success('User deleted successfully');
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <h3 className="text-center pt-4 border-bottom fw-bolder pb-3">
        Total Customers
      </h3>
      <div className="table-responsive border">
        <table className="table table-striped table-hover table-bordered border-primary">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-sm btn-warning text-light rounded-pill me-2">
                      <MdEdit />
                    </button>
                    <button
                      className="btn btn-sm btn-danger rounded-pill"
                      onClick={() => handleDelete(user._id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
