import React, { useState } from "react";
import axios from "axios";
import "./Registration.css";

const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:3001/register",
        formData
      );
      alert(response.data.message);
    } catch (error) {
      console.error("Error:", error.response || error.message);
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form className="registration-form" onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Enter your username"
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Registration = () => {
//   const [data, setData] = useState(null); // State to store the received data
//   const [loading, setLoading] = useState(true); // State to manage loading state
//   const [error, setError] = useState(null); // State to handle errors

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/data"); // Fetch data from the backend
//         setData(response.data); // Save data to state
//       } catch (err) {
//         setError(err.message); // Handle error
//       } finally {
//         setLoading(false); // Turn off loading
//       }
//     };

//     fetchData();
//   }, []); // Empty dependency array ensures this runs once on component mount

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h1>Fetched Data:</h1>
//       <p>Username: {data?.username}</p>
//     </div>
//   );
// };

// export default Registration;
