import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    // console.log(response.data[0].meanings[0].definitions[0].definition);
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
      <Results results={results}/>
    </div>
  );
}
