import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
// import Home from "./Home";
import noteContext from "../../context/noteContext";
import "./articles.css";
const Articles = () => {
  // context in noteState
  const context = useContext(noteContext);
  const { GetBlog, data } = context;

  const OnClickLink = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  useEffect(() => {
    GetBlog();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="continer mt-4 mx-5">
        <div
          // style={{width: "500px"}}
          className="row"
        >
          <h2 className="text-warning text-center">Articles</h2>
          {data.map((GetBlog, index) => (
            <div className="  col-lg-4 col-md-6  col-sm-12  mb-5  mt-5">
              <div
                key={index}
                className="rounded mx-auto  d-block object-center 
              d-flex justify-content  mt-2"
              >
                <div
                  className="card rounded cardbg mb-2"
                  style={{ width: "24rem", height: "23rem" }}
                >
                  <Link to={`/blogpost/${GetBlog._id}`}>
                    {" "}
                    <img
                      src={`http://localhost:8000/${GetBlog.profile}`}
                      // src={URL.createObjectURL(GetBlog.profile)}
                      style={{ width: "15", height: "15rem" }}
                      className="card-img-top"
                      alt="..."
                    />{" "}
                  </Link>

                  <div className="card-body bg-white">
                    <h5 className="card-title text-center ">{GetBlog.title}</h5>
                    <p
                      className="card-text fs-6"
                      style={{ textAlign: "justify" }}
                      dangerouslySetInnerHTML={{
                        __html: GetBlog.content.slice(0, 100) + "...",
                      }}
                    >
                      {/* {GetBlog.content.slice(0, 100)} ... */}
                      {/* {GetBlog.content.substring(0,100)} ... */}
                    </p>
                    {/* <p className="card-text ">{GetBlog.tag}</p> */}
                    <Link
                      to={`/blogpost/${GetBlog._id}`}
                      // className="text-info text-center"
                      onClick={OnClickLink}
                    >
                      <p className="btn btn-outline-dark"> Learn more</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Home/> */}
    </>
  );
};

export default Articles;
