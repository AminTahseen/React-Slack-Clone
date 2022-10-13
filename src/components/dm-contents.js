import React from "react";
import DMSectionMessageItem from "./dm-section-msg-item";
import DMSectionTodayMessages from "./dm-section-today";
import { useContext } from "react";
import { SlackContext } from "../context-api/slack-context-api";
const DirectMessagingContent = () => {
  const { messages, userFuncs } = useContext(SlackContext);
  const { findUserByID } = userFuncs;
  const [directMessages] = messages;
  let messageDiv = null;
  if (directMessages.length !== 0) {
    messageDiv = directMessages.map((element) => {
      return (
        <DMSectionMessageItem
          key={element.id}
          messageContent={element.message[element.message.length - 1]}
          messageFrom={findUserByID(element.message_to_user_id)}
          mainMessage={element}
        />
      );
    });
  } else {
    messageDiv = <div>No messagess</div>;
  }
  return (
    <div className="dm-content">
      <DMSectionTodayMessages messages={directMessages} />
      <div className="dm-today">
        <b>All Messages</b>
        <div className="dm-messages-holder">{messageDiv}</div>
      </div>
    </div>
  );
};

export default DirectMessagingContent;
