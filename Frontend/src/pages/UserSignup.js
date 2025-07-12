import React, { useState } from "react";
import axios from "axios";

const inputStyle = {
    width: "100%",
    padding: "0.8rem",
    margin: "0.8rem 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
};

const buttonStyle = {
    width: "100%",
    padding: "0.8rem",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
};

const UserSignup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const { email,name,password} = formData
            const response = await axios.post("http://localhost:5000/api/auth/signup/user", {
                email,username:name,password,userType:"user"
            });
            alert(response.data.message);
            setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // Reset form after submission
        } catch (error) {
            console.error(error);
            alert("Signup failed: " + error.response.data.message);
        }
    };

    return (
      <div style={{ marginTop:'20px' }}>
          <h2 style={{ textAlign:'center' }}>UserSign Up</h2>
          <form onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Name" onChange={handleChange} style={inputStyle} />
              <input name="email" type="email" placeholder="Email" onChange={handleChange} style={inputStyle} />
              <input name="password" type="password" placeholder="Password" onChange={handleChange} style={inputStyle} />
              <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} style={inputStyle} />
              <button type="submit" style={buttonStyle}>Sign Up</button>
          </form>
      </div>
    );
};

export default UserSignup;
