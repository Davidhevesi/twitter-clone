import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SidebarOption from "../SidebarOption/SidebarOption";
function Sidebar() {
  return (
    <div>
      <TwitterIcon />
      <SidebarOption Icon={HomeIcon} text="Home" />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notification" />
    </div>
  );
}

export default Sidebar;
