import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors


        try {
            // Send login request to backend
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            // Extract role from the response
            const { userType,token } = response.data;
            localStorage.setItem('authToken', token);

            // Redirect based,tokrn,token on role
            if (userType === 'admin') {
                navigate('/admin/dashboard'); // Admin dashboard route
            } else if (userType === 'volunteer') {
                navigate('/volunteer/dashboard'); // Volunteer dashboard route
            }else if (userType === 'user') {
                    navigate('/user/dashboard'); // Volunteer dashboard route
            } else {
                setError('Unauthorized role');
            }
        } catch (error) {
            console.error(error);
            setError(error.response ? error.response.data.message : "Login failed");
        }
    };

    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: "url('https://media.istockphoto.com/id/1263562386/photo/beautifully-structured-thunderstorm-in-bulgarian-plains.jpg?s=612x612&w=0&k=20&c=rwkwG1u0eWlOvOxy5GR8n5xNsQtzI-KutnZsQxTM3Ec=')"
        }}>
            {/* Login Form Container */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "40px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                width: "100%",
                maxWidth: "400px",
            }}>
                <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px", fontSize: "36px" }}>Login</h1>
                <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
                    <label style={{ fontSize: "18px", marginBottom: "8px", color: "#333" }}>
                        Email:
                        <input
                            style={{
                                padding: "10px",
                                margin: "10px 0 20px",
                                borderRadius: "5px",
                                border: "1px solid #ddd",
                                fontSize: "16px",
                                outline: "none",
                                transition: "border-color 0.3s",
                            }}
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label style={{ fontSize: "18px", marginBottom: "8px", color: "#333" }}>
                        Password:
                        <input
                            style={{
                                padding: "10px",
                                margin: "10px 0 20px",
                                borderRadius: "5px",
                                border: "1px solid #ddd",
                                fontSize: "16px",
                                outline: "none",
                                transition: "border-color 0.3s",
                            }}
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button
                        style={{
                            backgroundColor: "#0066cc",
                            color: "white",
                            fontSize: "18px",
                            padding: "12px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                        }}
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
            </div>
        </div>
    );
};

export default LoginForm;
