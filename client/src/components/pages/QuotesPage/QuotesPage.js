import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import GoToLogin from "../../modals/GoToLogin";
import Quote from "../../Quote/Quote";
import "./QuotesPage.css";
import { Pagination } from "@mantine/core";
import FilterQuotes from "../../MultiSelect/FilterQuotes";
import { TokenContext } from "../../../context/TokenContext";
import SortQuotes from "../../Select/SortQuotes";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [activePage, setPage] = useState(1);
  const {
    toShowFiltered,
    setToShowFiltered,
    toShowSelected,
    setToShowSelected,
  } = useContext(TokenContext);

  const pageSize = 5;
  const [totalQuotes, setTotalQuotes] = useState(1);
  const totalPages = Math.ceil(totalQuotes / pageSize);
  useEffect(() => {
    // axios
    //   .get("http://localhost:8000/quotes", {
    //     headers: {
    //       Authorization: "Bearer " + localStorage.getItem("accessToken"),
    //     },
    //   })
    //   .then((response) => {
    //     setQuotes(response.data.quotes);
    //     console.log(response.data.quotes);
    //   })
    //   .catch((error) => console.log(error));
    axios
      .get(
        `http://localhost:8000/quotes?pageSize=${pageSize}&page=${activePage}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        setQuotes(response.data.quotes);
        setTotalQuotes(response.data.quotesCount);
        console.log(response.data.quotes);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage, totalQuotes, toShowFiltered, toShowSelected]);

  const renderContent = () => {
    if (localStorage.getItem("accessToken") === "null") {
      return <GoToLogin />;
    } else if (toShowFiltered) {
      return <FilterQuotes />;
    } else if (toShowSelected) {
      return <SortQuotes />;
    } else {
      return (
        <>
          <SortQuotes />
          <FilterQuotes />
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
          <Pagination
            className="pagination"
            page={activePage}
            onChange={setPage}
            onClick={window.scrollTo(0, 0)}
            total={totalPages}
            color="teal"
            radius="md"
          />
        </>
      );
    }
  };
  return <div className="quotes">{renderContent()}</div>;
};

export default Quotes;
