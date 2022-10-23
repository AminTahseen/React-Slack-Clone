import React from "react";
import MentionsRepliesContent from "../components/mentions-replies-content";
import MentionsRepliesHeader from "../components/mentions-replies-header";
import Sidebar from "../components/sidebar";

const MentionsReplies = () => {
  return (
    <div className="dashboard">
      <Sidebar active={"Mentions & Replies"} />
      <div className="sidebar-content">
        <MentionsRepliesHeader />
        <MentionsRepliesContent />
      </div>
    </div>
  );
};

export default MentionsReplies;
