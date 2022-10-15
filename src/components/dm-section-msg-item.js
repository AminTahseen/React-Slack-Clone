import React from "react";
import { useContext } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import auth from "../auth/auth";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const DMSectionMessageItem = (props) => {
  const { userFuncs } = useContext(SlackContext);
  const { findUserByID } = userFuncs;
  const { messageContent, messageFrom, mainMessage } = props;
  const htmlInput = messageContent.message_content;
  const reactElement = parse(htmlInput);
  // const fromUser = findUserByID(messageFromId);
  return (
    <div className="dm-message-item">
      <div className="dm-message-item-img">
        <img
          src={"https://ui-avatars.com/api/?name=" + messageFrom.name}
          alt="not-found"
          width={50}
        />
      </div>
      <div className="dm-message-item-content">
        <Link
          to={
            "/dm/messages/" +
            mainMessage.message_from_user_id +
            "/" +
            mainMessage.message_to_user_id +
            "/allDm"
          }
        >
          <div className="dm-message-item-content-details">
            <p className="userName">{messageFrom.name}</p>
            <p className="msg-date">{messageContent.date_send}</p>
          </div>
          <div className="dm-message-item-content-message">
            {findUserByID(messageContent.from_user_id).id ===
            auth.getLoggedInUser().id
              ? "You"
              : findUserByID(messageContent.from_user_id).name}
            : {reactElement}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DMSectionMessageItem;
