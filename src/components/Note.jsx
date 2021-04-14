import React from "react";

function Note(props) {
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button type="button" onClick={() => (
                props.noteDelete(props.id)
            )}>
            <i className="fas fa-trash-alt"></i></button>
        </div>
    );
}

export default Note;