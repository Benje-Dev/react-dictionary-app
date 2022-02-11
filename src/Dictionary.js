import React, { useState } from "react";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    console.log(keyword);
  }

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
