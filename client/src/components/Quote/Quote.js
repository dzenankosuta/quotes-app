import React from "react";
import "./Quote.css";

const Quote = ({ content, authorName, upvotesCount, downvotesCount }) => {
  return (
    <div className="quote">
      <div className="left">
        <button className="btn2">&#129081;</button>
        <p className="percent">100%</p>
        <p className="ratio">
          {upvotesCount} / {downvotesCount}
        </p>
        <button className="btn2">&#129083;</button>
      </div>
      <div className="right">
        <p className="content">{content}</p>
        <p className="author">Author: {authorName}</p>
      </div>
    </div>
  );
};

export default Quote;
