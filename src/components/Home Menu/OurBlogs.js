import React from "react";
import "./style.css";
const OurBlogs = () => {
  return (
    <div>
      <div id="blog" class="blog">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h2>Our Blog</h2>
                <span>
                  Lorem Ipsum is that it has a more-or-less normal distribution
                  of letters,
                </span>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="blog-box">
                <figure>
                  <img
                    // className="imgblog"
                    style={{ width: "10",height:"15rem"  }}
                    src="/HomeImages/blog-image.jpg"
                    alt="#"
                  />
                  {/* <p>10 Feb 2023</p> */}
                </figure>
                <div class="travel">
                  <span>Post By : Admin</span>
                  <p>
                    <strong class="Comment"> 06 </strong> Comment
                  </p>
                  <p>
                    <strong class="like">05 </strong>Like
                  </p>
                </div>
                <h3>Matic</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="blog-box">
                <figure>
                  <img
                   style={{ width: "15",height:"15rem"  }}
                   src="/HomeImages/blog-image0.jpg" alt="#" />
                  {/* <p>10 Feb 2023</p> */}
                </figure>
                <div class="travel">
                  <span>Post By : Admin</span>
                  <p>
                    <strong class="Comment"> 06 </strong> Comment
                  </p>
                  <p>
                    <strong class="like">05 </strong>Like
                  </p>
                </div>
                <h3>Blockchain</h3>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
