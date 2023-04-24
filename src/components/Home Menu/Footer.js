import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div id="contact" class="footer">
          <div class="container">
            <div class="row pdn-top-30">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <ul class="location_icon">
                  <li>
                    {" "}
                    <a href="erre">
                      <img alt="im" src="icon/facebook.png" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="fef">
                      <img alt="im" src="icon/Twitter.png" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="fr">
                      <img alt="im" src="icon/linkedin.png" />
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="rr">
                      <img alt="im" src="icon/instagram.png" />
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="Follow">
                  <h3>CONTACT US</h3>
                  <span>
                    A 147 Bharat Vihar Lane No. 25 Rajapuri Uttam Nagar New
                    Delhi 110059
                    <br />
                    +91 9650594901
                  </span>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                <div class="Follow">
                  <h3>ADDITIONAL LINKS</h3>
                  <ul class="link">
                    <li>
                      {" "}
                      <a href="fr">About us</a>
                    </li>
                    <li>
                      {" "}
                      <a href="rfr">Terms and conditions</a>
                    </li>
                    <li>
                      {" "}
                      <a href="fr"> Privacy policy</a>
                    </li>
                    <li>
                      {" "}
                      <a href="er">News</a>
                    </li>
                    <li>
                      {" "}
                      <a href="erf"> Contact us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="Follow">
                  <h3> Contact</h3>
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <input
                        class="Newsletter"
                        placeholder="Name"
                        type="text"
                      />
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                      <input
                        class="Newsletter"
                        placeholder="Email"
                        type="text"
                      />
                    </div>
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                      <textarea
                        class="textareafooter"
                        placeholder="comment"
                        type="text"
                      >
                        Comment
                      </textarea>
                    </div>
                  </div>
                  <button class="Subscribe">Submit</button>
                </div>
              </div>
            </div>
            <div class="copyright">
              <div class="container">
                <p>
                  Copyright 2023 All Right Reserved By Sky Seater Tours And
                  Travels
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
