import React, { createRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addComment } from "../Features/Reducers/Comments";

const TypeComment = () => {
  const navigate = useNavigate()
    const [com,setCom]  = useState("")
    const dispatch = useDispatch()
    const ref = createRef()
    useEffect(() => {
      ref.current.focus()
    },[ref])

    const handleSubmit = () =>  {
        dispatch(addComment(com));
        setCom("")
        navigate('/')
        ref.current.focus()
        // alert(ref.current.value)
    }
  return (
    <div style = {{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10}}>
      <textarea ref = {ref} value = {com} onChange = {(e) => setCom(e.target.value)}></textarea>
      <button onClick = {handleSubmit}>Submit</button>
    </div>
  );
};

export default TypeComment;
