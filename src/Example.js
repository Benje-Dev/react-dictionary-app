import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div>
        <strong> example:</strong> {props.example}
      </div>
    );
  } else {
    return null;
  }
}
