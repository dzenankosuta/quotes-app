import React, { useEffect, useState } from "react";
import { Select } from "@mantine/core";
import axios from "axios";

const SortQuotes = () => {
  const data = [
    { value: "author", label: "Author" },
    { value: "content", label: "Content" },
    { value: "createdAt", label: "Date of create" },
    { value: "downvotesCount", label: "Down Votes Count" },
    { value: "upvotesCount", label: "Up Votes Count" },
  ];
  const [value, setValue] = useState(null);
  const [quotes, setQuotes] = useState([]);
  const sortDirection =
    value === "author" || value === "content" ? "asc" : "desc";

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/quotes?sortBy=${`${value}`}&sortDirection=${sortDirection}`,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        setQuotes(response.data.quotes);
        console.log(response.data.quotes);
      })
      .catch((error) => console.log(error));
    // if (filteredQuotes.length === 0) {
    //   setToShowFiltered(false);
    // } else {
    //   setToShowFiltered(true);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Select
      label="Sort Quotes by:"
      placeholder="Select a Property"
      data={data}
      value={value}
      onChange={setValue}
      clearable
    />
  );
};

export default SortQuotes;
