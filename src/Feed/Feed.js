import React from "react";
import Feedbox from "./Tweetbox/Tweetbox"
import "./Feed.css";
function Feed() {
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed__header">

      </div>
      {/* Tweet box */}
     <Feedbox />
      {/* Post */}
    </div>
  );
}

export default Feed;
