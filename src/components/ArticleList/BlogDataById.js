// Article page blog by nameid
import React, { useEffect, useContext, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import axios from "axios";
import noteContext from "../../context/noteContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";
import AddCommentForm from "./AddCommentForm";
// import CommentsList from "./CommentsList";

const BlogDataById = () => {
  // validate user to delete post if user logged in then post can be deleted
  let nevigate = useNavigate();
  // context
  const context = useContext(noteContext);
  const { GetBlogById, databyid } = context;
  console.log(databyid);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    GetBlogById(id);
    // eslint-disable-next-line
  }, []);

  // jodit editor
  const editor = useRef(null);
  const config = {
    placeholder: "Start typing post...",
  };
  // ref function
  const ref = useRef(null);
  // to close modal after edit
  const refClose = useRef(null);

  // for edit post modal state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  // const [profile, setProfile] = useState("");
  const [profile, setProfile] = useState(null);
  console.log(profile, "profile");
  console.log("databyid", databyid);

  // profile
  const handleImageChange = (e) => {
    setProfile(e.target.files[0]);
    // setProfile(databyid.profile);
    console.log(profile);
    // setProfile(URL.createObjectURL(e.target.files[0]));
  };
  useEffect(() => {
    setTitle(databyid?.title);
  }, [databyid]);
  useEffect(() => {
    setContent(databyid?.content);
  }, [databyid]);
  useEffect(() => {
    setTag(databyid?.tag);
  }, [databyid]);
  useEffect(() => {
    setProfile(databyid?.profile);
  }, [databyid]);

  const DeletePost = async () => {
    if (localStorage.getItem("token")) {
      if (window.confirm("Sure Want To Delete Blog?")) {
        await axios
          .delete(`http://localhost:8000/api/blog/deleteblog/${id}`, {
            headers: {
              "Content-Type": "application/json",
              "auth-token": localStorage.getItem("token"),
            },
          })
          .then((res) => {
            console.log(res);
          });
        toast("Deleted Successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        nevigate("/articles");
      }
    } else {
      toast("Please Login First!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      nevigate("/login");
    }
  };

  // Update post function
  const UpdatePost = async () => {
    if (localStorage.getItem("token")) {
      console.log("`profile new`", profile);
      // const databyid = { title, content, tag ,profile};
      console.log(databyid);
      let form = new FormData();
      form.append("title", title);
      form.append("content", content);
      form.append("tag", tag);
      form.append("profile", profile);
      await axios
        .put(`http://localhost:8000/api/blog/updateblog/${id}`,form, {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
        });
      toast("Updated Successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      GetBlogById(id);
      refClose.current.click();
    } else {
      toast("Please Login First!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      nevigate("/login");
    }
  };

  return (
    <>
      <Card className="container mt-5">
        <Button
          style={{ width: "fit-content" }}
          className="float-end mx-2 "
          color="warning"
          // onClick={(e) => {
          //   DeletePost(databyid._id);
          // }} id is defined globally in params so no need to define databyid._id
          onClick={() => {
            DeletePost();
          }}
        >
          Delete
        </Button>
        &nbsp;
        <Button
          style={{ width: "fit-content" }}
          className="float-end mx-2"
          color="warning"
          // onClick={() => {
          //   UpdatePost();
          // }}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Update
        </Button>
        <CardImg
          className="container mt-5"
          alt="Card image cap"
          src={`http://localhost:8000/${databyid.profile}`}
          style={{ width: "15", height: "25rem" }}
          // style={{ width: "35rem", height: "25rem" }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle
            style={{ textAlign: "justify" }}
            className="container mt-4 text-center fs-3 text-justify"
            tag="h5"
          >
            {title}
          </CardTitle>
          <CardText
            style={{ textAlign: "justify" }}
            className="container mt-3"
            dangerouslySetInnerHTML={{
              __html: databyid.content,
            }}
          ></CardText>
          <CardText>
            <small className="text-muted container text-bold fs-6">
              {databyid.tag}
            </small>
          </CardText>
          <CardText>
            <small className="text-muted container">
              Last updated 3 days ago
            </small>
          </CardText>
        </CardBody>
        <AddCommentForm />
        {/* <CommentsList/> */}
      </Card>

      {/* Bootstrap modal it opens when we click Edit Button */}
      <div
        ref={ref}
        className="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div className="modal-dialog ">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h1
                className="modal-title fs-5 btn btn-outline-info bg-dark "
                id="exampleModalLabel"
              >
                Update Blog
              </h1> */}
              <button
                className="btn btn-outline-info bg-dark container "
                type="button"
                onClick={(e) => {
                  UpdatePost(e);
                }}
              >
                Update Blog
              </button>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
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
                      <input
                        className="form-control mx-2  bg-gradient"
                        type="file"
                        id="formFile"
                        name="profile"
                        // required
                        onChange={(e) => {
                          handleImageChange(e);
                        }}
                      />
                    </div>
                    {/* {profile && (
                      <img
                        className="col-sm-4"
                        // src={profile && profile}
                        src={URL.createObjectURL(profile)}
                        alt=""
                        style={{ width: "200px", height: "100px" }}
                      />
                    )} */}
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
                        // value={databyid.tag}
                        value={tag}
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
                      <JoditEditor
                        ref={editor}
                        // value={databyid.content}
                        value={content}
                        config={config}
                        name="message"
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => {
                          setContent(newContent);
                          // console.log(content);
                        }}
                      />
                      {/* <p dangerouslySetInnerHTML={{__html: content}}></p> */}
                    </div>
                  </form>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                className="btn btn-outline-info bg-dark"
                type="button"
                onClick={(e) => {
                  UpdatePost(e);
                }}
              >
                Update Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDataById;
