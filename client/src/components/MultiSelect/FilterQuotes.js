import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MultiSelect } from "@mantine/core";
import Quote from "../Quote/Quote";
import { TokenContext } from "../../context/TokenContext";

const FilterQuotes = () => {
  const [value, setValue] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const { toShowFiltered, setToShowFiltered } = useContext(TokenContext);
  const tags = quotes.map((quote) => quote.tags);
  const flatTags = new Set(tags.flat());
  const data = Array.from(flatTags);
  const dataToShow = data.map((tag) => {
    return {
      value: tag,
      label: `${tag[0].toUpperCase()}${tag.slice(1, tag.length)}`,
    };
  });
  const [filteredQuotes, setFilteredQuotes] = useState([]);
  // const filteredQuotes = quotes.filter((quote) =>
  //   quote.tags.some((el) => value.includes(el))
  // );
  useEffect(() => {
    axios
      .get("http://localhost:8000/quotes", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        setQuotes(response.data.quotes);
        setFilteredQuotes(
          response.data.quotes.filter((quote) =>
            quote.tags.some((el) => value.includes(el))
          )
        );
        console.log(response.data.quotes);
        console.log(filteredQuotes);
      })
      .catch((error) => console.log(error));
    if (filteredQuotes.length === 0) {
      setToShowFiltered(false);
    } else {
      setToShowFiltered(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, toShowFiltered, filteredQuotes.length]);
  return (
    <>
      <MultiSelect
        style={{ maxWidth: "65vw" }}
        data={dataToShow}
        label="Select tags to filter quotes:"
        placeholder="Pick all that you like"
        value={value}
        onChange={setValue}
        searchable
        nothingFound="Nothing found"
        clearButtonLabel="Clear selection"
        clearable
      />
      {!toShowFiltered ? (
        <></>
      ) : (
        filteredQuotes.map((quote) => (
          <Quote
            key={quote.id}
            content={quote.content}
            authorName={quote.author}
            upvotesCount={quote.upvotesCount}
            downvotesCount={quote.downvotesCount}
            givenVote={quote.givenVote}
            id={quote.id}
          />
        ))
      )}
    </>
  );
};

export default FilterQuotes;
