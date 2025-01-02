import React, { useEffect, useState } from "react";
import axios from "axios";

const Display = () => {
  const [users, setUsers] = useState([]); // State to store users
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users"); // Fetch data
        setUsers(response.data); // Set users state
      } catch (err) {
        setError(err.message); // Handle error
      } finally {
        setLoading(false); // Turn off loading
      }
    };

    fetchUsers();
  }, []); // Empty dependency array ensures this runs once on component mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users List:</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <strong>Username:</strong> {user.username} |{" "}
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found</p>
      )}
    </div>
  );
};

export default Display;
