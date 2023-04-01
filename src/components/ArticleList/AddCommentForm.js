import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddCommentForm = ({ articleName, articleInfo }) => {
  // to use this function firstly define useRef in react
  // let inputRef = useRef(null);
  // function controlInput() {
  //   inputRef.current.value="write comment"
  //   inputRef.current.style.display="none"
  //   inputRef.current.style.color="red"
  //   inputRef.current.focus()
  // }
  // 1st method
  // const [userName, setUsername] = useState("");
  // const [commentText, setCommentText] = useState("");

  // 2nd method

  const [user, setUser] = useState({
    userName: "",
    commentText: "",
  });
  const { userName, commentText } = user;
  // e is known as event
  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  let nevigate = useNavigate();
  const OnSend = async (id) => {
    // e.preventDefault(); this is used for- page refresh na ho
    if (localStorage.getItem("token")) {
      id.preventDefault();
      await axios
        .post("http://localhost:8000/api/blog/addcomment", user)
        .then((res) => {
          console.log(res);
        });
      user.userName = "";
      user.commentText = "";
      setUser({ ...user })
      (user);
    } else {
      nevigate("/login");
    }
  };
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="d-flex justify-content-center align-items-center mt-2">
      <form>
        <h3 className="btn btn-outline-info bg-dark">Add a Comment</h3>
        <br />
        <label className="text-info">Name:</label>
        <br />
        <input
          className="btn btn-outline-info"
          type="text"
          name="userName"
          // ref={inputRef}
          value={userName}
          onChange={(e) => {
            handleInputs(e);
          }}
        />
        <br />
        <label className="text-info">Comments :</label>
        <br />
        <textarea
          className="btn btn-outline-info "
          rows="3"
          cols="40"
          name="commentText"
          value={commentText}
          onChange={(e) => {
            handleInputs(e);
          }}
        ></textarea>
        <br />
        <button
          onClick={OnSend}
          // onClick ={controlInput}
          className="btn btn-outline-info bg-dark mt-2"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default AddCommentForm;
