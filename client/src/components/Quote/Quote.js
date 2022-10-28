import React from "react";
import "./Quote.css";

const Quote = ({ content, authorName, upvotesCount, downvotesCount }) => {
  const totalPercent = 100;
  const percentPerVote = totalPercent / (upvotesCount + downvotesCount);
  const upvotesPercent = Math.round(upvotesCount * percentPerVote);
  return (
    <div className="quote">
      <div className="left">
        <button className="btn2">&#129081;</button>
        <p className="percent">{upvotesPercent}%</p>
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
