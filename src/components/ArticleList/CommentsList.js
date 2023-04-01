import React, { useEffect, useState } from "react";
// import AddCommentForm from './AddCommentForm';
// import React from "react";
import "./commentbtn.css";
import { FiDelete } from "react-icons/fi";
import { BiEditAlt } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CommentsList = () => {
  let nevigate = useNavigate();
  // use from add comment form for editing
  const [data, setdata] = useState([]);
  console.log(data);

  //edit comment
  const [user, setUser] = useState({
    userName: "",
    commentText: "",
    id: "",
  });
  // const { userName, commentText } = user;
  // e is known as event
  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };
  // get api
  const comment = async () => {
    let res = await axios.get("http://localhost:8000/api/blog/getcomment");
    console.log("res", res.data);
    setdata(res.data);
    console.log(data);
  };
  useEffect(() => {
    // eslint-disable-next-line
    // comment(comment);
    comment();
    // eslint-disable-next-line
  }, []);
  // }, []); this array is used for dependencies

  // put api
  const OnEdit = async (e) => {
    console.log(user);

    // e.preventDefault(); this is used for- page refresh na ho
    if (localStorage.getItem("token")) {
      await axios
        .put(`http://localhost:8000/api/blog/updatecomment/${user.id}`, user)
        .then((res) => {
          console.log(res);
        });
      user.userName = "";
      user.commentText = "";
      setUser({ ...user });
      comment();
      console.log(user);
      e.preventDefault();
    } else {
      nevigate("/login");
    }
  };
  // delete api
  const deleteCommentButton = async (id) => {
    // id.preventDefault();
    if (localStorage.getItem("token")) {
      if (window.confirm("Sure Want To Delete?")) {
        console.log(id);
        await axios
          .delete(`http://localhost:8000/api/blog/deletecomment/${id}`)
          .then((res) => {
            console.log(res);
            comment();
            // alert("You SuccessFully Deleted The Comment");
          });
      }
    } else {
      nevigate("/login");
    }
  };
  // edit api
  const editCommentButton = (data) => {
    // console.log(id);
    // if (window.confirm("Sure Want To Edit?")) {
    console.log(data._id);
    setUser({
      userName: data.userName,
      commentText: data.commentText,
      id: data._id,
      // id: data._id,
    });
  };

  // same as above but use try and catch

  // const deleteButton = async (id) => {
  //   // id.preventDefault();
  //   if (window.confirm("Sure Want To Delete?")) {
  //     console.log(id);
  //     try {
  //       await axios
  //         .delete(`http://localhost:8000/deleteComment/${id}`)
  //         .then((res) => {
  //           console.log(res);
  //           comment();
  //           alert("You SuccessFully Deleted The Comment");
  //         });
  //     } catch (error) {
  //       console.log("error");
  //     }
  //   }
  // };

  return (
    <>
      <h3 className="mb-2 flex-justify-center container text-info text-center mt-5">
        All Comments:
      </h3>
      {data.map((comment, index) => (
        <div key={index}>
          <div className="">
            <div
              // style = {{width: "500px"}}
              className="card mt-2 my-4 mx-5"
            >
              <div className="card-body bg-dark  ">
                <p className="flex-justify-center text-center fs-6 text-info text-bold ">
                  {comment.userName}:
                </p>
                <p className="flex-justify-center fs-6 text-white text-center">
                  {comment.commentText}
                </p>
                {/* <p className="flex-justify-center fs-6 text-white text-center">
              {comment.date}
              </p> */}
                <div className=" Commentbtn position-relative text-center">
                  <button
                    onClick={() => {
                      deleteCommentButton(comment._id);
                    }}
                    className="btn btn-outline-info mb-2 mx-2  justify-content-center"
                    type="submit"
                  >
                    {/* Delete  &nbsp; */}
                    <FiDelete />
                  </button>
                  {/* Edit button */}
                  <button
                    type="button"
                    // className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    data-bs-whatever="@mdo"
                    className="btn btn-outline-info mb-2 mx-4  justify-content-center"
                    onClick={(e) => {
                      editCommentButton(comment);
                    }}
                  >
                    {/* Update &nbsp; */}
                    <BiEditAlt />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Bootstrap modal it opens when we click Edit Button */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5 btn btn-outline-info bg-dark "
                id="exampleModalLabel"
              >
                Edit Your Comment
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label ">
                    Name:
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    name="userName"
                    // defaultValue={comment.userName}
                    value={user.userName}
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    name="commentText"
                    // defaultValue={comment.commentText}
                    value={user.commentText}
                    onChange={(e) => {
                      handleInputs(e);
                    }}
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                // onClick={OnSend}
                // onClick ={controlInput}
                className="btn btn-outline-info bg-dark"
                type="button"
                onClick={(e) => {
                  OnEdit(e);
                }}
              >
                Edit Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsList;
