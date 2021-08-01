import { Avatar } from "@material-ui/core";
import { VerifiedUser } from "@material-ui/icons";
import React from "react";
import "./Post.css";
function Post({ displayName, username, verified, text }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://yt3.ggpht.com/yti/APfAmoG75AhJicU3CgtiWo0SoV2FQL6K0-en8_WGK3Uebw=s88-c-k-c0x00ffffff-no-rj-mo" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              David Hevesi{" "}
              <span>
                <VerifiedUser className="post__badge" />
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Welcome here to my account lorem ipsum forever</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
