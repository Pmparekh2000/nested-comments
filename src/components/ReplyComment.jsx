import React, { useState } from "react";
import { POST_REPLY, REPLY_PLACEHOLDER } from "../utils/constants";

const ReplyComment = ({ setShowReplyComment = () => {} }) => {
  const [replyComment, setReplyComment] = useState("");

  const handlePostReply = (e) => {
    setShowReplyComment(false);
    setReplyComment("");
  };

  return (
    <div className="reply-form">
      <textarea
        className="reply-textarea"
        placeholder={REPLY_PLACEHOLDER}
        value={replyComment}
        onChange={(e) => setReplyComment(e.target.value)}
      ></textarea>
      <button className="post-reply-btn" onClick={handlePostReply}>
        {POST_REPLY}
      </button>
    </div>
  );
};

export default ReplyComment;
