import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";
import Articles from "./Articles";
import AddCommentForm from "./AddCommentForm";
import CommentsList from "./CommentsList";
import Notfound from "./Notfound";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <Notfound />;

  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );

  return (
    <div className="Article container mt-2">
      {/* fw-bold  for bold text*/}
      {/* <div className="row"> */}
      <div className="text-center mt-3">
        {/* <h1 className="container text-center text-info justify-content "> {article.title} </h1> */}
        <img
          className="col-lg-6 col-md-6 col-sm-12 "
          src={article.thumbnail}
          alt=""
          // style={{ width: "550px", height: "410px" }}
          style={{ width: "30rem", height: "20rem" }}
        />

        {article.content.map((paragraph, name, title, index) => (
          <div className="text-center mt-5">
              <h3 className="text-center text-info justify-content  ">
                {article.title}
              </h3>
              <p
              className="  fs-5 text-info "
              key={index}
            >
              {/* <h3>{article.name}</h3> */}
            
              {paragraph}
            </p>
          </div>
        ))}
      </div>
      <br/>
      <AddCommentForm articleName={name} setAritcleInfo={setArticleInfo} />
      <CommentsList comments={articleInfo.comments} />
      <h2 className="d-flex justify-content-center align-items-center">
        <div className="d-flex align-items-center text-info">
          Other Articles
        </div>
      </h2>
      <Articles
        className="display-flex container col-lg-4 col-md-6 "
        articles={otherArticles}
      />
    </div>
  );
};
export default Article;
