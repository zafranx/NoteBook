import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let nevigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:8000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      toast("success", {
        type: "success",
        autoClose: 1000,
      });
      // props.showAlert("Account Created Successfully", "success");

      nevigate("/login");
    } else {
      toast("Invalid credentials ", {
        type: "error",
        autoClose: 1000,
      });
      // props.showAlert("Invalid credentials", "danger");
      // alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div style={{ width: "500px" }} className="mt-5 mx-auto p-4">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-3  ">
              <label htmlFor="email" className="form-label  text-info">
                Name
              </label>
              <input
                type="name"
                className="form-control"
                value={credentials.name}
                placeholder="Enter Your Name"
                onChange={onChange}
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label  text-info">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Your Email"
                value={credentials.email}
                onChange={onChange}
                id="email"
                name="email"
                aria-describedby="emailHelp"
                required
              />
              <div id="emailHelp" className="form-text  text-info">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-info">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Your Password"
                value={credentials.password}
                onChange={onChange}
                name="password"
                id="password"
                minLength={5}
                onBlur={(e) => {
                  if (e.target.value.length>=5  ) {
                    e.target.className = "form-control border-success border";
                  } else {
                    e.target.className = "form-control border-danger border";
                  }
                }}
                required

              />
            </div>
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label text-info">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                value={credentials.cpassword}
                placeholder="Confirm Password"
                onChange={onChange}
                onBlur={(e) => {
                  if (e.target.value !== credentials.password) {
                    e.target.className = "form-control border-danger border";
                  } else {
                    e.target.className = "form-control border-success border";
                  }
                }}
                name="cpassword"
                id="cpassword"
                minLength={5}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-outline-info">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
