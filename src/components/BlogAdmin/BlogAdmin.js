import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogAdmin = () => {
  // const [user, setUser] = useState({
  //   title: "",
  //   // thumbnail: "",
  //   content: "",
  //   tag: "",
  // });

  // const { title, content, tag } = user;
  // const handleInputs = (e) => {
  //   // const {name,value} = e.target;
  //   setUser({ ...user, [e.target.name]: e.target.value });
  //   console.log("Onchange", user);
  // };

  // blog image function
  // const [image, setImage] = useState(null);
  // const [thumbnail, setThumbnail] = useState(null);
  // const handleImageChange = (e) => {
  //   setThumbnail(e.target.files[0]);
  //   console.log(thumbnail);
  //   setThumbnail(URL.createObjectURL(e.target.files[0]));
  // };
  
  const [title, setTitle] = useState("");
  const [ content,setContent] = useState("");
  const [tag, setTag] = useState("");
  const [profile, setProfile] = useState(null);
  const handleImageChange = (e) => {
    setProfile(e.target.files[0]);
    console.log(profile);
    // setProfile(URL.createObjectURL(e.target.files[0]));
  };

  const handleOnClick = async (e) => {
    // console.log("User Post", user);
    e.preventDefault();
    // toast("success ", {
    //   type: 'success'
    // });
    //  toast("Added Successfully!", {
    //   // type: 'success',
    //     position: "bottom-center",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });

    const formData = new FormData();
    // formData.append ("thumbnail",thumbnail);

    formData.append("title", title);
    formData.append("profile", profile);
    console.log(profile);
    formData.append("content", content);
    formData.append("tag", tag);
    // console.log(user)
    await axios
      .post("http://localhost:8000/api/blog/addpost", formData)
      .then((res) => {
        console.log(res);
      });
    // toast("success ", {
    //   type: 'success'
    // });
    toast("Added Successfully!", {
      position: "bottom-center",
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
    //   thumbnail: "",
    //   content: "",
    //   tag:"",
    // });
  };

  return (
    <>
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
      <div
        // style={{ width: "650px" }}
        className="mt-5 mx-auto  col-lg-6"
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
                console.log(title);
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
              //   // setUser({ ...user });
              //   //     console.log(user);
              // }}
              onChange={handleImageChange}
              // required
            /> */}
            <input
              className="form-control mx-2  bg-gradient"
              type="file"
              id="formFile"
              // value={image}
              name="profile"
              required
              // onChange={(e) => {
              //   ImageUpload(e);
              // }}
              // onChange={handleFileChange}
              onChange={handleImageChange}
              // onChange={(e) => {
              //   handleInputs(e);
              // }}
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
          {/* {thumbnail && (
            <img
              className="col-sm-4"
              src={thumbnail && thumbnail}
              alt=""
              style={{ width: "200px", height: "100px" }}
            />
          )} */}
          <div className="mb-3">
            <label htmlFor="Content" className="form-label text-info">
              Content
            </label>
            <textarea
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
            />
          </div>
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
                console.log(tag);
              }}
              minLength={2}
              // required
            />
          </div>

          <button
            // disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn btn-outline-info"
            onClick={(e) => {
              handleOnClick(e);
            }}
          >
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default BlogAdmin;
