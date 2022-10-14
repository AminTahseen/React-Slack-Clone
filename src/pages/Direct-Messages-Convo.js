import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DirectMessageConvoContent from "../components/dm-convo-content";
import DirectMessageConvoHeader from "../components/dm-convo-header";
import SendDirectMessage from "../components/send-dm-message";
import Sidebar from "../components/sidebar";
import { SlackContext } from "../context-api/slack-context-api";
import auth from "../auth/auth";

const DirectMessagesConvo = () => {
  const { toId, fromId, forDm } = useParams();
  const { userFuncs } = useContext(SlackContext);
  const { findUserByID } = userFuncs;
  let sideBarDiv = null;
  let headerDiv = null;
  if (forDm === "allDm") {
    sideBarDiv = (
      <Sidebar
        active={
          Number(toId) !== auth.getLoggedInUser().id
            ? findUserByID(Number(toId)).name
            : findUserByID(Number(fromId)).name
        }
      />
    );
    headerDiv = (
      <DirectMessageConvoHeader
        heading={
          Number(toId) !== auth.getLoggedInUser().id
            ? findUserByID(Number(toId)).name
            : findUserByID(Number(fromId)).name
        }
      />
    );
  } else {
    sideBarDiv = (
      <Sidebar
        active={
          Number(fromId) !== auth.getLoggedInUser().id
            ? findUserByID(Number(fromId)).name
            : findUserByID(Number(toId)).name
        }
      />
    );
    headerDiv = (
      <DirectMessageConvoHeader
        heading={
          Number(fromId) !== auth.getLoggedInUser().id
            ? findUserByID(Number(fromId)).name
            : findUserByID(Number(toId)).name
        }
      />
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
