import React from "react";
import { useParams } from "react-router-dom";
import Data from "../components/data";
import { theDate } from "../components/dateValues";

function Article() {
  const { id } = useParams();
  const articleData = Data.find((article) => article.id === id);

  return (
    <section className="Article">
      <header
        className="ArticleHeaderWrapper"
        style={{ backgroundImage: `url("${articleData.image.url}")` }}
      >
        <div className="ArticleHeader">
          <h1>{articleData.title}</h1>
          <p className="Date">
            {theDate(new Date(articleData.publishedDate))}
          </p>
          <p className="Blurb">{articleData.blurb}</p>
        </div>
      </header>
      <article className="ArticleBody">
        {articleData.articleText.map((article, i) => {
          switch (article.type) {
            case "p":
              return <p key={i}>{article.data}</p>;
            case "h2":
              return <h2 key={i}>{article.data}</h2>;
            case "h3":
              return <h3 key={i}>{article.data}</h3>;
            default:
              return null;
          }
        })}
      </article>
    </section>
  );
}

export default Article;