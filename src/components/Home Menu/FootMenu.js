// import React from "react";
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBIcon,
// } from "mdb-react-ui-kit";

// export default function App() {
//   return (
//     <div className="mt-2 ">
//     <MDBFooter className="text-center text-lg-start text-muted">
//       <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom mt-5">
//         {/* <div className="me-5 d-none d-lg-block">
//           <span>Get connected with us on social networks:</span>
//         </div> */}
// {/*
//         <div>
//           <a href="wrfd4r4" className="me-4 text-reset">
//             <MDBIcon fab icon="facebook-f" />
//           </a>
//           <a href="24rw" className="me-4 text-reset">
//             <MDBIcon fab icon="twitter" />
//           </a>
//           <a href="rfr2r2" className="me-4 text-reset">
//             <MDBIcon fab icon="google" />
//           </a>
//           <a href="rf3f" className="me-4 text-reset">
//             <MDBIcon fab icon="instagram" />
//           </a>
//           <a href="4f3f" className="me-4 text-reset">
//             <MDBIcon fab icon="linkedin" />
//           </a>
//           <a href="4q34t3wt3" className="me-4 text-reset">
//             <MDBIcon fab icon="github" />
//           </a>
//         </div> */}
//       </section>

//       <section className="">
//         <MDBContainer className="text-center text-md-start mt-5">
//           <MDBRow className="mt-3">
//             {/* <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 <MDBIcon icon="gem" className="me-3" />
//                 Company name
//               </h6>
//               <p>
//                 Here you can use rows and columns to organize your footer
//                 content. Lorem ipsum dolor sit amet, consectetur adipisicing
//                 elit.
//               </p>
//             </MDBCol> */}

//             <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">More</h6>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Login
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Signup
//                 </a>
//               </p>
//               {/* <p>
//                 <a href="#!" className="text-reset">

//                 </a>
//               </p> */}
//               <p>
//                 <a href="#!" className="text-reset">
//                   About
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Home
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Articles
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Personal Notes
//                 </a>
//               </p>
//               <p>
//                 <a href="#!" className="text-reset">
//                   Other
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
//               <p>
//                 <MDBIcon icon="home" className="me-2" />
//                 Madhya pradesh, Rewa 486001, India
//               </p>
//               <p>
//                 <MDBIcon icon="envelope" className="me-3" />
//                 Webereum@gmail.com
//               </p>
//               <p>
//                 <MDBIcon icon="phone" className="me-3" /> + 91 234 567 88
//               </p>
//               <p>
//                 <MDBIcon icon="print" className="me-3" /> + 91 234 567 89
//               </p>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div
//         className="text-center p-4"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
//       >
//         © 2023 Copyright:
//         <a className="text-reset fw-bold mx-2" href="https://mdbootstrap.com/">
//           Webereum.com Developed By Zafran
//         </a>
//       </div>
//     </MDBFooter>
//     </div>
//   );
// }
import React from "react";
import "./style.css";
const FootMenu = () => {
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

export default FootMenu;
