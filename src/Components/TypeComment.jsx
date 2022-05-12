import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addComment } from "../Features/Reducers/Comments";

const TypeComment = () => {
    const [com,setCom]  = useState("")
    const dispatch = useDispatch()
    const handleSubmit = () =>  {
        dispatch(addComment(com));
        setCom("")
    }
  return (
    <div style = {{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10}}>
      <textarea value = {com} onChange = {(e) => setCom(e.target.value)}></textarea>
      <button onClick = {handleSubmit}>Submit</button>
    </div>
  );
};

export default TypeComment;
