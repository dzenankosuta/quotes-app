import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
    <div>
      {localStorage.getItem("accessToken") === "null" ? (
        <h2>
          Go to <Link to={"/"}>Login</Link> first.
        </h2>
      ) : (
        <>
          {quotes.map((quote) => (
            <div key={quote.id}>
              <h2>{quote.content}</h2>
              <h5>{quote.author}</h5>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Quotes;
