import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DirectMessageConvoContent from "../components/dm-convo-content";
import DirectMessageConvoHeader from "../components/dm-convo-header";
import SendDirectMessage from "../components/send-dm-message";
import Sidebar from "../components/sidebar";
import { SlackContext } from "../context-api/slack-context-api";

const DirectMessagesConvo = () => {
  const { toId, fromId, forDm } = useParams();
  const { userFuncs } = useContext(SlackContext);
  const { findUserByID } = userFuncs;
  let sideBarDiv = null;
  let headerDiv = null;
  if (forDm === "allDm") {
    sideBarDiv = <Sidebar active={findUserByID(Number(toId)).name} />;
    headerDiv = (
      <DirectMessageConvoHeader heading={findUserByID(Number(toId)).name} />
    );
  } else {
    sideBarDiv = <Sidebar active={findUserByID(Number(fromId)).name} />;
    headerDiv = (
      <DirectMessageConvoHeader heading={findUserByID(Number(fromId)).name} />
    );
  }
  return (
    <div className="dashboard">
      {sideBarDiv}
      <div className="sidebar-content">
        {headerDiv}
        <DirectMessageConvoContent toId={toId} fromId={fromId} />
        <SendDirectMessage />
      </div>
    </div>
  );
};

export default DirectMessagesConvo;
