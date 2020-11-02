import React from "react";
import { Link } from "react-router-dom";
import { theDate } from "./dateValues";

function ArticleCard({ articleData }) {
  const articleDate = new Date(articleData.publishedDate);

  return (
    <div className="ArticleCard">
      <div className="ArticleCardImage">
        <img src={articleData.image.url} alt={articleData.image.alt} />
      </div>
      <div className="ArticleCardText">
        <h2>{articleData.title}</h2>
        <p className="Date">{theDate(articleDate)}</p>
        <p>{articleData.blurb}</p>
        <Link to={`/article/${articleData.id}`}>Read More</Link>
      </div>
    </div>
  );
}

export default ArticleCard;