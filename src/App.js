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
// import BlogPosts from "./components/ArticleList/BlogPosts";
import BlogDataById from "./components/ArticleList/BlogDataById";
// import ArticleList from "./components/ArticleList/article-content";
import Notfound from "./components/ArticleList/Notfound";
import Admin from "./components/Admin";
import BlogAdmin from "./components/BlogAdmin/BlogAdmin";
import About from "./components/About";
import NoteState from "./context/NoteState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
// import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState,useEffect } from "react";
import axios from 'axios'
                                        // crypto coins
import AllCoins from './components/Crypto/AllCoins';
import Coin from './components/Crypto/routes/Coin'

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
  // crypto coins
  const [coins, setCoins] = useState([])

  // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'
  // const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=hi'
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en'
  

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
    // eslint-disable-next-line 
  }, [])

  return (
    <>
      {/* toast is used in all pages login, signup etc*/}
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <NoteState>
        <Router>
          <Navbar
            title="Webereum"
            about="About"
            home="Home"
            articles="Blogs"
            cryptocoins="Crypto Currencies"
            admin="Personal Notes"
            blogadmin="Write Blog"
            searchBar={true}
            login="Login"
            signup="Signup"
          />
          <Alert alert={alert} />
          <div className="">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/articles" element={<Articles />} />
              <Route exact path="/article/:name" element={<Article />} />
              {/* <Route exact path="/blog/:id" element={<BlogPosts />} /> */}
              <Route exact path="/blogpost/:id" element={<BlogDataById />} />
              {/* <Route exact path="/articleList" element={<ArticleList />} /> */}
              <Route exact path="*" element={<Notfound />} />
              <Route
                exact
                path="/admin"
                element={<Admin showAlert={showAlert} />}
              />
              <Route exact path="/blogadmin" element={<BlogAdmin />} />
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
              {/* Crypto coins route */}
              <Route path="/cryptocoins" element={<AllCoins coins={coins} />} />
              <Route path="/coin" element={<Coin />}>
                <Route path=":coinId" element={<Coin />} />
              </Route>
            </Routes>
          </div>
        </Router>

        {/* <Footer /> */}
      </NoteState>
    </>
  );
}

export default App;
