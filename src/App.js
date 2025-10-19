import logo from "./logo.svg";
import "./App.css";
import CommentBox from "./components/CommentBox";
import { useState } from "react";
import { DUMMY_COMMENTS_DATA } from "./utils/constants";

function App() {
  const [comments, setComments] = useState(DUMMY_COMMENTS_DATA);

  // Iterating over all top level comments
  return (
    <div className="App">
      {Object.keys(comments)
        ?.filter((commentId) => !comments[commentId].parentId)
        ?.map((commentId) => {
          return (
            <CommentBox
              currentComment={comments[commentId]}
              allComments={comments}
              setComments={setComments}
            />
          );
        })}
    </div>
  );
}

export default App;
