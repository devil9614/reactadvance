import React from "react";
import { useSelector } from "react-redux";
import { ErrorBoundary } from "../Features/Utils/ErrorBoundary";
import Comment from "./Comment";

const RenderComments = () => {
  const comments = useSelector((state) => state.comment.value);
  console.log(comments);
  return (
    <div>
      {comments.map((c, index) => (
        <ErrorBoundary key={index}>
          <Comment  comment={c} />
        </ErrorBoundary>
      ))}
    </div>
  );
};

export default RenderComments;
