import React from "react";
import { Link } from "react-router-dom";
import articleContent from "./article-content";
// import Home from "./Home";

const Articles = ({ articles }) => {
  const OnClickLink = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="continer mt-4">

        <div
          // style={{width: "500px"}}
          className="articles row"
        >

          {articleContent.map((article, index) => (
            <div
              className="  col-lg-4  col-sm-12"
            >
              <div
                key={index}
                className="rounded mx-auto d-block object-center 
              d-flex"
              >
                <div className="container">
                  <Link to={`/article/${article.name}`}>
                    <img
                      className="col-sm-4 "
                      src={article.thumbnail}
                      alt=""
                      style={{ width: "400px", height: "250px" }}
                      onClick={OnClickLink}
                    />
                  </Link>
                  <div className=" ">
                    <Link className="text-info " key={index} to={`/article/${article.name}`}>
                      <h3 onClick={OnClickLink}>{article.title}</h3>
                    </Link>
                    <p
                      className=" rounded mx-auto d-block text-info"
                      style={{ width: "250px" }}
                    >
                      {article.content[0].substring(0, 100)} ...
                    </p>
                    <div className="rounded mx-auto d-block item-center">
                      <Link className="text-info " onClick={OnClickLink} to={`/article/${article.name}`}>
                        Learn more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          ))}

        </div>
        {/*  */}
      </div>
      {/* <Home/> */}
    </>
  );
};

export default Articles;



// import React, { useContext,useEffect } from "react";
// import noteContext from "../../context/noteContext";
// import Noteitem from "../Noteitem";
// import Notes from "../Notes";
// const Articles = (props) => {
//   const context = useContext(noteContext);
//   const {notes, allUserPost } = context;

//   useEffect(() => {
//     allUserPost();
//   });
//   return <div>
//     <div className="row my-3">
//         <h2>You Notes</h2>
//         <div className="container mx-2">
//           {notes.length === 0 && "No notes to display"}
//         </div>
//         {notes.map((note) => {
//           return (
//             <Noteitem
//               key={note._id}
//               // updateNote={updateNote}
//               // showAlert={props.showAlert}
//               note={note}
//             />
//           );
//         })}
//       </div>
//   {/* <Notes showAlert={props.showAlert} /> */}</div>;
// };

// export default Articles;
