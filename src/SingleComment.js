import React from "react";
import profile1 from "./image/1.png";

const SingleComment = () => {
  return (
    <div>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={profile1} alt="profile" />
        </a>

        <div className="content">
          <a href="/" className="author">
            Vikrant
          </a>
          <div className="metadata">
            <span className="date">Today at 5:00pm</span>
          </div>
          <div className="text">It is nice!!!</div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
