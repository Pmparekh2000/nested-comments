import React, { useState } from "react";
import ReplyComment from "./ReplyComment";
import { CANCEL, DELETE, REPLY } from "../utils/constants";

const CommentBox = ({
  currentComment = {},
  allComments = {},
  setComments = () => {},
}) => {
  console.log("Curent comment is", currentComment);

  const [showReplyComment, setShowReplyComment] = useState(false);
  return (
    <div className="comment-container">
      <div className="comment-header">
        <p className="comment-value">{currentComment.comment}</p>
        <div className="comment-actions">
          <button
            className="reply-btn"
            onClick={() => setShowReplyComment(!showReplyComment)}
          >
            {showReplyComment ? CANCEL : REPLY}
          </button>
          <button className="delete-btn">{DELETE}</button>
        </div>
      </div>
      {showReplyComment && (
        <ReplyComment setShowReplyComment={setShowReplyComment} />
      )}
      <div className="nested-comments">
        {currentComment?.childrens?.map((childId) => {
          console.log(childId);

          return (
            <CommentBox
              key={childId}
              currentComment={allComments[childId]}
              allComments={allComments}
              setComments={setComments}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentBox;
