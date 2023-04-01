import React from "react";
import FootMenu from "../components/Home Menu/FootMenu";
const About = () => {
  return (
    <div>
      <h3 className="container mt-5 text-center text-white">
        We Publish Best And Unique Content In Our Website
      </h3>
      <h4 className="container mt-3 text-center text-white">
        In Our Website We Will Provide Articles And Also Provide Secure Personal
        Notes Storage You Can Login And Add your Personal Notes. We Provide Best
        Service To Our Users.
      </h4>
      <h4 className="container mt-5 text-center text-white">
        Welcome To Webereum Web 3.0 is a new internet breed that aspires to be a
        decentralised version of the virtual world. It aims for transparency,
        and users will access a limitless amount of resources, content, and
        agreements in the future.
      </h4>
      <br />
      <br />
      <img
        src="./Images/8b8880e7-282b-4fc0-8186-452c98fe0b94.png"
        className="img-fluid"
        alt=""
        style={{ width: "1500px", height: "460px" }}
      ></img>
      <br/>
     <FootMenu/>
    </div>
  );
};

export default About;

// import React, { useContext } from "react";
// import noteContext from "../context/noteContext";

// const About = () => {
//   const a = useContext(noteContext);
//   return (
//     <div>
//       <h2>
//         this is about {a.state.name} {a.state.class}
//       </h2>
//     </div>
//   );
// };

// export default About;
