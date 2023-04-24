import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FormFeedback } from "reactstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Login = (props) => {


  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let nevigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      // to show email in navbar
      localStorage.setItem("email", json.user.email);
      localStorage.setItem("name", json.user.name);
      
      // toast("Login success", {
      //   type: "success",
      //   autoClose: 1000,
      // });
      toast("Login success!", {
        // position: "bottom-center",
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // props.showAlert("Successfully Logged In ", "success");

      nevigate("/articles");
    } else {
      toast("Invalid credentials ", {
        type: "error",
      });
      // props.showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="row">
        {/* <img
          src="./Images/c5a929e0-0d89-4966-a0b7-ec505541723b.png"
          className="img-fluid mt-5 mx-5 "
          alt=""
          style={{ width: "500px", height: "300px" }}
        ></img> */}
        <form
          style={{ width: "450px" }}
          className="mt-5 mx-auto  col-lg-6"
          onSubmit={handleSubmit}
        >
          <div className="mb-3 mt-5">
            <label htmlFor="email" className="form-label text-info">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
              placeholder="Enter Your Email"
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
            {/* <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
            <div id="emailHelp" className="form-text text-info">
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
            />
          </div>

          <button type="submit " className="btn btn-outline-info ">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
