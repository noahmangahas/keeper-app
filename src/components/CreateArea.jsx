import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { ClickAwayListener } from "@material-ui/core";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value
      };
    });
  }

  var [isFocused, setIsFocused] = useState(false);
  
  function setOnFocus() {
    setIsFocused(true);
  }

  function contentOnBlur() {
    (input.title !== "" || input.content !== "") && props.handleClick(input);
    setInput({
      title: "",
      content: ""
    });
    setIsFocused(false);
  }

  return (
    <ClickAwayListener onClickAway={contentOnBlur}>
    <div>
      <form className="create-note">
        {isFocused && (
        <input 
          onChange={handleChange} 
          name="title" 
          placeholder="Title"
          style={{fontWeight: "bold"}}
          value={input.title} 
        />
        )}
        <textarea 
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={ isFocused ? "3" : "1" }
          value={input.content}
          onFocus={() => {
            setOnFocus();
          }}
        />
        {isFocused && (
          <button type="button" onClick={() => {
            setIsFocused(false);
          }}>
            <CloseIcon />
          </button>
        )}
      </form>
    </div>
    </ClickAwayListener>
  );
}

export default CreateArea;
