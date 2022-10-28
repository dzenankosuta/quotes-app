import React, { useEffect, useState } from "react";
import axios from "axios";
import GoToLogin from "../../modals/GoToLogin";
import Quote from "../../Quote/Quote";
import "./QuotesPage.css";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/quotes", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setQuotes(response.data.quotes);
        console.log(response.data.quotes);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="quotes">
      {localStorage.getItem("accessToken") === "null" ? (
        <GoToLogin />
      ) : (
        <>
          {quotes.map((quote) => (
            <Quote
              key={quote.id}
              content={quote.content}
              authorName={quote.author}
              upvotesCount={quote.upvotesCount}
              downvotesCount={quote.downvotesCount}
              givenVote={quote.givenVote}
              id={quote.id}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Quotes;
