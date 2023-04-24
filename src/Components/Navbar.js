import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";

// import { RxSwitch } from "react-icons/rx";


export default function Navbar(props) {
  let nevigate = useNavigate();
  const handleLogout = () => {
    console.log("Clicked on Logout");
    localStorage.removeItem("token");
    nevigate("/login");
  };
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  // set theme to dark and light
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="">
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark "
        // className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "rgb(14 30 65)"}}
      >
        <div className="container-fluid">
          <Link className=" navbar-brand mx-2" to="/">
            {props.title}
          </Link>
          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col ">
            {/* <div class="full"> */}
            {/* <div class="center-desk"> */}
            {/* <div class="logo">
              {" "}
              <Link to="/">
                <img src="images/imgpsh_fullsize_anim.png" alt="logo" />
              </Link>{" "}
            </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2  mb-lg-0">
              {/* ms-auto */}

              <li className="nav-item">
                <Link
                  className={`nav-link mx-2 
                  ${location.pathname === "/" ? "active navbar-brand" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  {props.home}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-2 
                  ${
                    location.pathname === "/articles"
                      ? "active navbar-brand"
                      : ""
                  }`}
                  aria-current="page"
                  to="/articles"
                >
                  {props.articles}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link mx-2 
                  ${
                    location.pathname === "/cryptocoins"
                      ? "active navbar-brand"
                      : ""
                  }`}
                  aria-current="page"
                  to="/cryptocoins"
                >
                  {props.cryptocoins}
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  className={`nav-link mx-2 
                  ${
                    location.pathname === "/admin" ? "active navbar-brand" : ""
                  }`}
                  aria-current="page"
                  to="/admin"
                >
                  {props.admin}
                </Link>
              </li> */}

              <li className="nav-item">
                <Link
                  className={`nav-link  mx-2  ${
                    location.pathname === "/about" ? "active navbar-brand" : ""
                  }`}
                  to="about"
                >
                  {props.about}
                </Link>
              </li>
            </ul>
            <li className="d-flex">
              {/* <h5 className="text-primary mt-0 mx-2 my-2">{time}</h5> */}
              <div>
                <div className="form-check form-switch">
                  <input
                    onClick={toggleTheme}
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    // checked
                  />
                  <label
                    className="form-check-label"
                    for="flexSwitchCheckChecked"
                  ></label>
                </div>
              </div>
            </li>

            {!localStorage.getItem("token") ? (
              <form className="d-flex mt-2 mb-2">
                <Link
                  className={`nav-link  mx-2  ${
                    location.pathname === "/login" ? "active navbar-brand" : ""
                  }`}
                  to="login"
                >
                  <button className="btn btn-outline-info">
                    {" "}
                    {props.login}
                  </button>
                  {/* <p className="text-white">{props.login}</p> */}
                </Link>

                <Link
                  className={`nav-link  mx-2  ${
                    location.pathname === "/signup" ? "active navbar-brand" : ""
                  }`}
                  to="signup"
                >
                  <button className="btn btn-outline-info">
                    {props.signup}
                  </button>
                  {/* <p className="text-white">{props.signup}</p> */}
                </Link>
              </form>
            ) : (
              <>
                <ul className="navbar-nav  mb-2  mb-lg-0">
                  <li className="nav-item dropdown">
                    <div
                      className="nav-link dropdown-toggle text-white"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Profile
                    </div>
                    <ul className="dropdown-menu bg-dark">
                      <li>
                        <div className="dropdown-item" to="">
                          <p className="  text-success">
                            {localStorage.getItem("name")}
                          </p>
                          <p className="  text-success">
                            {localStorage.getItem("email")}
                          </p>
                          {/* <p className="  text-success">{UserDetails.name}</p>
                          <p className="  text-success">{UserDetails.email}</p> */}
                        </div>
                      </li>

                      <li className="nav-item">
                        <Link
                          className={`nav-link mx-2 
                           ${
                             location.pathname === "/admin"
                               ? " navbar-brand"
                               : ""
                           }`}
                          aria-current="page"
                          to="/admin"
                        >
                          {props.admin}
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          className={`nav-link mx-2 
                           ${
                             location.pathname === "/blogadmin"
                               ? " navbar-brand"
                               : ""
                           }`}
                          aria-current="page"
                          to="/blogadmin"
                        >
                          {props.blogadmin}
                        </Link>
                      </li>

                      <li>
                        <div className="dropdown-item ">
                          {" "}
                          <button
                            onClick={handleLogout}
                            className="btn btn-info"
                          >
                            Logout
                          </button>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>

                {/* <button onClick={handleLogout} className="btn btn-primary">
                  Logout
                </button> */}
              </>
            )}

            {/* props.search bar use in app.js as a props  */}
            {props.searchBar ? (
              <form className="d-flex mx-2 mt-sm-2 " role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-info" type="submit">
                  Search
                </button>
              </form>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
// see line no. 5 navbar props defined
// or object ke bad semi colon nhi use karte hai
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  home: PropTypes.string,
};
Navbar.defaultProps = {
  title: "set title here",
  home: "Home",
  admin: "Admin",
  blogadmin: "Blog Admin",
  about: "About Us",
  searchBar: "true",
};
