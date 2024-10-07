import React, { useState } from 'react';

export default function Textbox(props) {
  const [text, setText] = useState("");

  const ToUpperCase = () => {
    let nt = text.toUpperCase();
    setText(nt);
  };

  const clear = () => {
    setText("");
  };

  const ToLowerCase = () => {
    let nt = text.toLowerCase();
    setText(nt);
  };

  const FUN = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.split(/\s+/).filter((word) => word.length > 0).length;

  return (
    <>
      <div className="container">
        <div>
          <div className="mb-3 my-5">
            <label className="form-label">{props.headings}</label>
            <textarea
              style={{ backgroundColor: props.mode === "light" ? 'white' : '#1c1c1c',
                    color: props.mode === "light" ? 'black' : 'white' 
                    }}
              className="form-control"
              name="text"
              id=""
              rows="3"
              value={text}
              onChange={FUN}
            ></textarea>
          </div>
          <button className="btn btn-primary my-2" onClick={ToUpperCase}>
            CONVERT TO UPPERCASE
          </button>
          <button className="btn btn-primary mx-3" onClick={ToLowerCase}>
            CONVERT TO LOWERCASE
          </button>
          <button className="btn btn-secondary my-2" onClick={clear}>
            CLEAR THE TEXT
          </button>
        </div>
      </div>

      <div className="container my-4">
        <h1>Entered Text Summary</h1>
        <h5>Total words: {wordCount}</h5>
        <h5>Total characters: {text.length}</h5>
        <h5>Total time to read the entered text: {Math.round(0.222 * wordCount)}s</h5>
      </div>
    </>
  );
}
