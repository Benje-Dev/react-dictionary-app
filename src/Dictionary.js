import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("sunset");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
  }

  //   documentation: https://dictionaryapi.dev/
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="search for any word"
          autoFocus="on"
          onChange={handleKeywordChange}
        ></input>
        <button type="submit">search</button>
      </form>
    </div>
  );
}