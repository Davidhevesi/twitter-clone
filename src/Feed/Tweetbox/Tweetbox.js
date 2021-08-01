import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./Tweetbox.css";

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://yt3.ggpht.com/yti/APfAmoG75AhJicU3CgtiWo0SoV2FQL6K0-en8_WGK3Uebw=s88-c-k-c0x00ffffff-no-rj-mo" />
          <input placeholder="What is happening" />
          {/* <input placeholder="What is happening" /> */}
        </div>
        <Button className="tweetBox_tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default Tweetbox;
