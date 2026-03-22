import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3002/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      setMessage(res.data.message);

    } catch (err) {
      setMessage("Something went wrong");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-lg border-0">
            <div className="card-body p-4">

              <h3 className="text-center mb-4">Signup</h3>

              {message && (
                <div className="alert alert-info">{message}</div>
              )}

              <form onSubmit={handleSubmit}>

                <input type="text" name="name" placeholder="Name"
                  className="form-control mb-3"
                  onChange={handleChange} required />

                <input type="email" name="email" placeholder="Email"
                  className="form-control mb-3"
                  onChange={handleChange} required />

                <input type="password" name="password" placeholder="Password"
                  className="form-control mb-3"
                  onChange={handleChange} required />

                <input type="password" name="confirmPassword" placeholder="Confirm Password"
                  className="form-control mb-3"
                  onChange={handleChange} required />

                <button className="btn btn-primary w-100">
                  Sign Up
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;