import React, { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import JoditEditor from "jodit-react";
import { useNavigate } from "react-router-dom";

const BlogAdmin = () => {
  let nevigate = useNavigate();
  const editor = useRef(null);
  const config = {
    placeholder: "Start typing post...",
  };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [profile, setProfile] = useState(null);
  const handleImageChange = (e) => {
    setProfile(e.target.files[0]);
    // console.log(profile);
    // setProfile(URL.createObjectURL(e.target.files[0]));
  };

  const handleOnClick = async (e) => {
    // console.log("User Post", user);
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("profile", profile);
    // console.log(profile);
    formData.append("content", content);
    formData.append("tag", tag);
    // console.log("append_formdata", formData);

    if (localStorage.getItem("token")) {
      await axios
        .post(
          "http://localhost:8000/api/blog/addpost",
          formData
          // this header is used to check user authentication
          //  {   
          //   headers: {
          //     "Content-Type": "application/json",
          //     "auth-token": localStorage.getItem("token"),
          //   },
          // }
        )
        .then((res) => {
          console.log(res);
        });
      toast("Added Successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // setUser({
      //   title: "",
      //   profile: "",
      //   content: "",
      //   tag:"",
      // });
      nevigate("/articles")
    } else {
      nevigate("/login");
    }
  };

  return (
    <>
      <div
        // style={{ width: "650px" }}
        className="mt-5 mx-auto container col-lg-12"
        //  className="container mt-5 my-3"
      >
        <h3 className="text-info ">Add Post </h3>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label text-info">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Title "
              aria-describedby="emailHelp"
              value={title}
              // onChange={(e) => {
              //   handleInputs(e);
              // }}
              onChange={(e) => {
                setTitle(e.target.value);
                // console.log(title);
              }}
              minLength={2}
              // required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="File" className="form-label text-info">
              Add Thumbnail
            </label>
            {/* <input
              type="file"
              className="form-control"
              id="File"
              name="thumbnail"
              aria-describedby="emailHelp"
              // value={thumbnail} 
              // onChange={(e) => {
              //   handleInputs(e);
              //   setImage(e.target.files[0]);
              //   console.log(image);
              //   setImage(URL.createObjectURL(e.target.files[0]));
              // }}
              onChange={handleImageChange}
              // required
            /> */}
            <input
              className="form-control mx-2  bg-gradient"
              type="file"
              id="formFile"
              name="profile"
              accept=".png,.jpeg"
              // required
              onChange={handleImageChange}
            />
          </div>
          {profile && (
            <img
              className="col-sm-4"
              // src={profile && profile}
              src={URL.createObjectURL(profile)}
              alt=""
              style={{ width: "200px", height: "100px" }}
            />
          )}
          <div className="mb-3">
            <label htmlFor="tag" className="form-label text-info">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              placeholder="Write tags"
              value={tag}
              // onChange={(e) => {
              //   handleInputs(e);
              // }}
              onChange={(e) => {
                setTag(e.target.value);
                // console.log(tag);
              }}
              minLength={2}
              // required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Content" className="form-label text-info">
              Content
            </label>
            {/* <textarea
              type="text"
              className="form-control"
              id="Content"
              rows="6"
              cols="30"
              name="content"
              placeholder="Add content for blog"
              value={content}
              // onChange={(e) => {
              //   handleInputs(e);
              // }}
              onChange={(e) => {
                setContent(e.target.value);
                console.log(content);
              }}
              minLength={3}
              // required
            /> */}
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              name="message"
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => {
                setContent(newContent);
                // console.log(content);
              }}
              // onBlur={(newContent) => setUser({ ...user, content: newContent })} // preferred to use only this option to update the content for performance reasons
              // onChange={(newContent) => {}}
            />
            {/* <p dangerouslySetInnerHTML={{__html: content}}></p> */}
          </div>

          <button
            // disabled={note.title.length < 5 || note.description.length < 5}

            type="submit"
            className="btn btn-outline-success container"
            onClick={(e) => {
              handleOnClick(e);
            }}
          >
            Publish Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogAdmin;
