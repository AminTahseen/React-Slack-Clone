import React, { useContext } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import DirectMessageConvoItem from "./dm-convo-message-item";

const DirectMessageConvoContent = (props) => {
  const { messages } = useContext(SlackContext);
  const [directMessages] = messages;

  const { toId, fromId } = props;
  let conversationDiv = null;
  let filterResult = directMessages.filter((x) => {
    return (
      x.message_to_user_id === Number(toId) &&
      x.message_from_user_id === Number(fromId)
    );
  });
  if (filterResult.length !== 0) {
    conversationDiv = filterResult[0].message.map((element) => {
      return <DirectMessageConvoItem key={element.id} message={element} />;
    });
  } else {
    const filterResult2 = directMessages.filter((x) => {
      return (
        x.message_to_user_id === Number(fromId) &&
        x.message_from_user_id === Number(toId)
      );
    });
    if (filterResult2.length !== 0) {
      conversationDiv = filterResult2[0].message.map((element) => {
        return <DirectMessageConvoItem key={element.id} message={element} />;
      });
    } else {
      conversationDiv = <p>No Conversation Yet</p>;
    }
  }
  return <div className="dm-convo-content">{conversationDiv}</div>;
};

export default DirectMessageConvoContent;
