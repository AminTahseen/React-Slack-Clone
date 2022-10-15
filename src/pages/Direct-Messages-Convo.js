import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DirectMessageConvoContent from "../components/dm-convo-content";
import DirectMessageConvoHeader from "../components/dm-convo-header";
import SendDirectMessage from "../components/send-dm-message";
import Sidebar from "../components/sidebar";
import { SlackContext } from "../context-api/slack-context-api";
import auth from "../auth/auth";
import { MessageContent } from "../models/message";
import { getFormattedDate2 } from "../helpers/HelperFunctions";

const DirectMessagesConvo = () => {
  const { toId, fromId, forDm } = useParams();
  const { userFuncs, messagesFuncs } = useContext(SlackContext);
  const { findUserByID } = userFuncs;
  const { sendMessageToUser } = messagesFuncs;
  let sideBarDiv = null;
  let headerDiv = null;
  const sendDmMessage = (content) => {
    if (auth.getLoggedInUser().id !== Number(toId)) {
      const id = (Math.floor(Math.random() * 100) + 1) * 2;
      const message = content;
      const to_user_id = toId;
      const from_user_id = auth.getLoggedInUser().id;
      const date_send = getFormattedDate2();
      const messageContent = new MessageContent(
        id,
        to_user_id,
        from_user_id,
        message,
        date_send
      );
      sendMessageToUser(messageContent);
      // alert(
      //   "if : Send all Dm Message to id :" + JSON.stringify(messageContent)
      // );
    } else if (auth.getLoggedInUser().id !== Number(fromId)) {
      const id = (Math.floor(Math.random() * 100) + 1) * 2;
      const message = content;
      const to_user_id = fromId;
      const from_user_id = auth.getLoggedInUser().id;
      const date_send = getFormattedDate2();
      const messageContent = new MessageContent(
        id,
        to_user_id,
        from_user_id,
        message,
        date_send
      );
      sendMessageToUser(messageContent);
      // alert(
      //   "else if : Send all Dm Message to id :" + JSON.stringify(messageContent)
      // );
    } else {
      const id = (Math.floor(Math.random() * 100) + 1) * 2;
      const message = content;
      const to_user_id = auth.getLoggedInUser().id;
      const from_user_id = auth.getLoggedInUser().id;
      const date_send = getFormattedDate2();
      const messageContent = new MessageContent(
        id,
        to_user_id,
        from_user_id,
        message,
        date_send
      );
      sendMessageToUser(messageContent);
      alert("else : send message to self");
    }
  };
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
        <SendDirectMessage sendDmMessage={sendDmMessage} />
      </div>
    </div>
  );
};

export default DirectMessagesConvo;
