import React, { useContext } from "react";
import auth from "../auth/auth";
import { SlackContext } from "../context-api/slack-context-api";
import parse from "html-react-parser";

const DirectMessageConvoItem = (props) => {
  const { message } = props;
  const { userFuncs } = useContext(SlackContext);
  const { findUserByID } = userFuncs;
  const htmlInput = message.message_content;
  const reactElement = parse(htmlInput);
  return (
    <div className="thread-message-post">
      <img
        className="thread-img"
        src={
          "https://ui-avatars.com/api/?name=" +
          findUserByID(message.from_user_id).name
        }
        alt="not-found"
        width={50}
        height={50}
      />
      <div className="thread-post">
        <div className="user-details">
          <div className="user-details-values">
            <h4>
              {findUserByID(message.from_user_id).name ===
              auth.getLoggedInUser().name
                ? "You"
                : findUserByID(message.from_user_id).name}
            </h4>
            <p>{message.date_send}</p>
          </div>
        </div>
        <div className="thread-actual-post">{reactElement}</div>
      </div>
    </div>
  );
};

export default DirectMessageConvoItem;
