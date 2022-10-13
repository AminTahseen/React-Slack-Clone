import React, { useContext } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import DMSectionMessageItem from "./dm-section-msg-item";

const DMSectionTodayMessages = (props) => {
  const { messages } = props;
  const { userFuncs } = useContext(SlackContext);
  const { findUserByID } = userFuncs;
  let messageDiv = null;
  if (messages.length !== 0) {
    messageDiv = messages.map((element) => {
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
    <div className="dm-today">
      <b>Today</b>
      <div className="dm-messages-holder">{messageDiv}</div>
    </div>
  );
};

export default DMSectionTodayMessages;
