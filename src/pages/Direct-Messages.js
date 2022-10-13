import React from "react";
import DirectMessagingContent from "../components/dm-contents";
import DirectMessagingHeader from "../components/dm-header";
import Sidebar from "../components/sidebar";

const DirectMessages = () => {
  return (
    <div className="dashboard">
      <Sidebar active={"All DMs"} />
      <div className="sidebar-content">
        <DirectMessagingHeader
          heading={"All Direct Messages"}
          showSearchBar={true}
        />
        <DirectMessagingContent />
      </div>
    </div>
  );
};

export default DirectMessages;
