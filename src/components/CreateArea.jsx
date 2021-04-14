import React, { useState } from "react";

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

  return (
    <div>
      <form>
        <input 
          onChange={handleChange} 
          name="title" 
          placeholder="Title"
          style={{fontWeight: "bold"}}
          value={input.title} 
        />
        <textarea 
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={input.content}
        />
        <button type="button" onClick={() => {
          (input.title !== "" || input.content !== "") && props.handleClick(input);
          setInput({
            title: "",
            content: ""
          });
        }} ><i className="fas fa-plus"></i></button>
      </form>
    </div>
  );
}

export default CreateArea;
