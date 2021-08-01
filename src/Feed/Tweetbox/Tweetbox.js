import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Tweetbox.css";

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input placeholder="What is happening" />
          {/* <input placeholder="What is happening" /> */}
        </div>
        <div>
          <Button className="tweetBox_tweetButton">Tweet</Button>
        </div>
      </form>
    </div>
  );
}

export default Tweetbox;
