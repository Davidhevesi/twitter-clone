import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../SidebarOption/SidebarOption";
import {
  BookmarkBorderOutlined,
  Home,
  ListAltOutlined,
  MailOutline,
  MoreHorizOutlined,
  Notifications,
  PermIdentity,
  Search,
} from "@material-ui/icons";
import { Button } from "@material-ui/core";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitter__icon" />
      <SidebarOption active Icon={Home} text="Home" />
      <SidebarOption Icon={Search} text="Explore" />
      <SidebarOption Icon={Notifications} text="Notifications" />
      <SidebarOption Icon={MailOutline} text="Mail" />
      <SidebarOption Icon={BookmarkBorderOutlined} text="Bookmarks" />
      <SidebarOption Icon={ListAltOutlined} text="List" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      <SidebarOption Icon={MoreHorizOutlined} text="More" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
