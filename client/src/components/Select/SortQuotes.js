import React, { useContext, useEffect, useState } from "react";
import { Select, Pagination } from "@mantine/core";
import axios from "axios";
import { TokenContext } from "../../context/TokenContext";
import Quote from "../Quote/Quote";

const SortQuotes = () => {
  const dataSort = [
    { value: "author", label: "Author" },
    { value: "content", label: "Content" },
    { value: "createdAt", label: "Date of create" },
    { value: "downvotesCount", label: "Down Votes Count" },
    { value: "upvotesCount", label: "Up Votes Count" },
  ];
  const [valueSelect, setValueSelect] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const [activePage, setPage] = useState(1);
  const pageSize = 5;
  const [totalQuotes, setTotalQuotes] = useState(1);
  const totalPages = Math.ceil(totalQuotes / pageSize);
  const { toShowSelected, setToShowSelected } = useContext(TokenContext);
  const sortDirection =
    valueSelect === "author" || valueSelect === "content" ? "asc" : "desc";

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/quotes?sortBy=${`${valueSelect}`}&sortDirection=${sortDirection}&pageSize=${pageSize}&page=${activePage}`,
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
    if (valueSelect === null) {
      setToShowSelected(false);
    } else {
      setToShowSelected(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valueSelect, toShowSelected, activePage, totalQuotes]);

  return (
    <>
      <Select
        label="Sort Quotes by:"
        placeholder="Select a Property"
        data={dataSort}
        value={valueSelect}
        onChange={setValueSelect}
        clearable
      />
      {!toShowSelected ? (
        <></>
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
      )}
    </>
  );
};

export default SortQuotes;
