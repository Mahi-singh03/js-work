import React from 'react'

export default function Textbox(props) {
  return (
  <div className="container">
    <div>
      <div className="mb-3 my-5">
        <label className="form-label">{props.headings}</label>
        <textarea className="form-control" name="text" id="" rows="3"></textarea>
      </div>
    </div> 
  </div>
  )
}


