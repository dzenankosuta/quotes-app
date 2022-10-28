import React from "react";
import "./Quote.css";

const Quote = ({ content, authorName, upvotesCount, downvotesCount }) => {
  const totalPercent = 100;
  const percentPerVote = totalPercent / (upvotesCount + downvotesCount);
  const upvotesPercent = Math.round(upvotesCount * percentPerVote);
  const color =
    upvotesPercent <= 20
      ? "color1"
      : upvotesPercent > 20 && upvotesPercent <= 40
      ? "color2"
      : upvotesPercent > 40 && upvotesPercent <= 60
      ? "color3"
      : upvotesPercent > 60 && upvotesPercent <= 80
      ? "color4"
      : upvotesPercent > 80 && upvotesPercent <= 95
      ? "color5"
      : "color6";
  return (
    <div className="quote">
      <div className="left">
        <button className="btn2">&#129081;</button>
        <p className={`percent ${color}`}>{upvotesPercent}%</p>
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
