import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "../src/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css.map";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/Navbar";
import Home from "./components/Home Menu/Home";
import Articles from "./components/ArticleList/Articles";
import Article from "./components/ArticleList/Article";
import ArticleList from "./components/ArticleList/article-content";
import Notfound from "./components/ArticleList/Notfound";
import Admin from "./components/Admin";
import BlogAdmin from "./components/BlogAdmin/BlogAdmin"
import About from "./components/About";
import NoteState from "./context/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
// import Footer from "./components/Footer";
import React, { useState } from "react";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <NoteState>
        <Router>
          <Navbar
            title="Webereum"
            about="About"
            home="Home"
            articles="Articles"
            admin="Personal Notes"
            searchBar={false}
            login="Login"
            signup="Signup"
          />
          <Alert alert={alert} />
          <div className="">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/articles" element={<Articles />} />
              <Route exact path="/article/:name" element={<Article />} />
              <Route exact path="/articleList" element={<ArticleList />} />
              <Route exact path="*" element={<Notfound />} />
              <Route
                exact
                path="/admin"
                element={<Admin showAlert={showAlert} />}
              />
               <Route
                exact
                path="/blogadmin"
                element={<BlogAdmin />}
              />
              <Route exact path="/about" element={<About />} />
              <Route
                exact
                path="/login"
                element={<Login showAlert={showAlert} />}
              />
              <Route
                exact
                path="/signup"
                element={<Signup showAlert={showAlert} />}
              />
            </Routes>
          </div>
        </Router>

        {/* <Footer /> */}
      </NoteState>
    </>
  );
}

export default App;
