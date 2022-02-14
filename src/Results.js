import React from "react";

export default function Results(props) {
    if(props.result){
      return (
        <div className="Results">
          <h2>{props.result.word}</h2>
        </div>
      );
    } else {
        return null
    }
}
