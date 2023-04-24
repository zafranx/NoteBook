import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
const OurTeam = () => {
  return (
    <>
      {/* <div>
      <div class="card" style="width: 18rem;"/>
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}

      <div id="travel" class="traveling  ">
      <div className="bgcolor ">
        <div class="container ">
          <div class="row">
            <div class="col-md-12 ">
              <div class="titlepage">
                <h2>Our Team</h2>
                <span>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters,
                </span>
              </div>
            </div>
          </div>
          <div class="row ">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="traveling-box">
                <i>
                  <img src="/icon/travel-icon.png" alt="icon" />
                </i>
                <h3>Zafran Khan</h3>
                <p> Founder & CEO, Developer of Webereum   </p>
                {/* <div class="read-more">
                  <Link to=" ">Read More </Link>
                </div> */}
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="traveling-box">
                <i>
                  <img src="icon/travel-icon2.png" alt="icon" />
                </i>
                <h3>Sourabh Patel</h3>
                <p> Developer </p>
                {/* <div class="read-more">
                  <Link to=" ">Read More </Link>
                </div> */}
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="traveling-box">
                <i>
                  <img src="icon/travel-icon3.png" alt="icon" />
                </i>
                <h3>Pushpendra Patel</h3>
                <p> Developer </p>
                {/* <div class="read-more">
                  <Link to=" ">Read More </Link>
                </div> */}
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="traveling-box">
                <i>
                  <img src="icon/travel-icon4.png" alt="icon" />
                </i>
                <h3>Khan</h3>
                <p> Marketing Head</p>
                {/* <div class="read-more mb-2">
                  <Link to=" ">Read More </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default OurTeam;
