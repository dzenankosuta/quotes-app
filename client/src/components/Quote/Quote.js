import React from "react";
import "./Quote.css";

const Quote = ({
  content,
  authorName,
  upvotesCount,
  downvotesCount,
  givenVote,
}) => {
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
  let classBtnVote1 = givenVote === "upvote" ? "upvote-class" : "vote-class";
  let classBtnVote2 =
    givenVote === "downvote" ? "downvote-class" : "vote-class";
  return (
    <div className="quote">
      <div className="left">
        <button className={`btn2 ${classBtnVote1}`}>&#129081;</button>
        <p className={`percent ${color}`}>{upvotesPercent}%</p>
        <p className="ratio">
          {upvotesCount} / {downvotesCount}
        </p>
        <button className={`btn2 ${classBtnVote2}`}>&#129083;</button>
      </div>
      <div className="right">
        <p className="content">{content}</p>
        <p>{givenVote}</p>
        <p className="author">Author: {authorName}</p>
      </div>
    </div>
  );
};

export default Quote;
