import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import GoToLogin from "../../modals/GoToLogin";
import Quote from "../../Quote/Quote";
import "./QuotesPage.css";
import { Pagination, Select, MultiSelect } from "@mantine/core";
import { TokenContext } from "../../../context/TokenContext";
import AddQuote from "../../modals/AddQuote";

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [activePage, setPage] = useState(1);
  const [toShowFiltered, setToShowFiltered] = useState(false);
  const [toShowSelected, setToShowSelected] = useState(false);
  const [valueFilter, setValueFilter] = useState([]);
  const [valueSelect, setValueSelect] = useState(null);
  const tagsString = valueFilter.toString();
  const tags = quotes.map((quote) => quote.tags);
  const flatTags = new Set(tags.flat());
  const dataFilter = Array.from(flatTags);
  const dataToShowFilter = dataFilter.map((tag) => {
    return {
      value: tag,
      label: `${tag[0].toUpperCase()}${tag.slice(1, tag.length)}`,
    };
  });

  const dataSort = [
    { value: "author", label: "Author" },
    { value: "content", label: "Content" },
    { value: "createdAt", label: "Date of create" },
    { value: "downvotesCount", label: "Down Votes Count" },
    { value: "upvotesCount", label: "Up Votes Count" },
  ];
  const sortDirection =
    valueSelect === "author" || valueSelect === "content" ? "asc" : "desc";
  const pageSize = 5;
  const [totalQuotes, setTotalQuotes] = useState(1);
  const totalPages = Math.ceil(totalQuotes / pageSize);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/quotes?pageSize=${pageSize}&page=${activePage}&tags=${tagsString}&sortBy=${`${valueSelect}`}&sortDirection=${sortDirection}`,
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
    if (valueFilter.length === 0) {
      setToShowFiltered(false);
    } else if (valueFilter.length > 0) {
      setToShowFiltered(true);
      setToShowSelected(false);
    }
    if (valueSelect === null) {
      setToShowSelected(false);
    } else {
      setToShowSelected(true);
      setToShowFiltered(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activePage, totalQuotes, valueFilter, valueFilter.length, valueSelect]);
  return (
    <div className="quotes">
      {localStorage.getItem("accessToken") === "null" ? (
        <GoToLogin />
      ) : toShowFiltered ? (
        <>
          <MultiSelect
            style={{ maxWidth: "65vw" }}
            data={dataToShowFilter}
            label="Select tags to filter Quotes:"
            placeholder="Pick tags that you like"
            value={valueFilter}
            onChange={setValueFilter}
            nothingFound="Nothing found"
            clearButtonLabel="Clear selection"
            clearable
          />
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
      ) : toShowSelected ? (
        <>
          <Select
            label="Sort Quotes by:"
            placeholder="Select a Property"
            data={dataSort}
            value={valueSelect}
            onChange={setValueSelect}
            clearable
          />
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
      ) : (
        <>
          <AddQuote />
          <MultiSelect
            style={{ maxWidth: "65vw" }}
            data={dataToShowFilter}
            label="Select tags to filter Quotes:"
            placeholder="Pick tags that you like"
            value={valueFilter}
            onChange={setValueFilter}
            nothingFound="Nothing found"
            clearButtonLabel="Clear selection"
            clearable
          />
          <Select
            label="Sort Quotes by:"
            placeholder="Select a Property"
            data={dataSort}
            value={valueSelect}
            onChange={setValueSelect}
            clearable
          />
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
    </div>
  );
};

export default Quotes;
