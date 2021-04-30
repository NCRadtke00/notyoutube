import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExplore,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdWatchLater,
} from "react-icons/md";
const Sidebar = () => {
  return (
    <nav className="sidebar">
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      <li>
        <MdExplore esize={23} />

        <span>Explore</span>
      </li>

      <li>
        <MdSubscriptions size={23} />
        <span>Subscriptions</span>
      </li>
      <hr />
      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>
      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>
      <li>
        <MdWatchLater size={23} />
        <span>Watch later</span>
      </li>
      <li>
        <MdThumbUp size={23} />
        <span>Liked Video</span>
      </li>

      <hr />
        Subscriptions
        <hr/>
        MORE FROM YOUTUBE
      <li>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>

      <hr />
    </nav>
  );
};

export default Sidebar;
