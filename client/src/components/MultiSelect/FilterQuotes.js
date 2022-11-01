import React, { useEffect, useState } from "react";
import axios from "axios";
import { MultiSelect } from "@mantine/core";

const FilterQuotes = () => {
  const [value, setValue] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [searchValue, onSearchChange] = useState("");
  const tags = quotes.map((quote) => quote.tags);
  const flatTags = new Set(tags.flat());
  const data = Array.from(flatTags);
  const dataToShow = data.map((tag) => {
    return {
      value: tag,
      label: `${tag[0].toUpperCase()}${tag.slice(1, tag.length)}`,
    };
  });
  const filteredQuotes = quotes.filter((quote) =>
    quote.tags.some((el) => value.includes(el))
  );
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
        console.log(filteredQuotes);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <>
      <MultiSelect
        data={dataToShow}
        label="Select tags to filter quotes:"
        placeholder="Pick all that you like"
        value={value}
        onChange={setValue}
        searchable
        searchValue={searchValue}
        onSearchChange={onSearchChange}
        nothingFound="Nothing found"
      />
      <p>{}</p>
    </>
  );
};

export default FilterQuotes;
