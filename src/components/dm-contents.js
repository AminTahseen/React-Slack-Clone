import React from "react";
import DMSectionMessageItem from "./dm-section-msg-item";
// import DMSectionTodayMessages from "./dm-section-today";
import { useContext } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import auth from "../auth/auth";
const DirectMessagingContent = () => {
  const { messages, userFuncs } = useContext(SlackContext);
  const { findUserByID } = userFuncs;
  let [directMessages] = messages;
  let messageDiv = null;
  /*
const filter1=get messages where ("message_to_userId" === 1)
if (filter1!==null) {
   return filter1;
} else {
   const filter2=get messages where ("message_from_userId" === 1)
   abc code
}
*/
  const filter1 = directMessages.filter(
    (element) => element.message_to_user_id === auth.getLoggedInUser().id
  );

  if (filter1.length !== 0) {
    const filter2 = directMessages.filter(
      (element) => element.message_from_user_id === auth.getLoggedInUser().id
    );
    const directMessages2 = filter1.concat(filter2);
    if (directMessages2.length !== 0) {
      messageDiv = directMessages2.map((element) => {
        return (
          <DMSectionMessageItem
            key={element.id}
            messageContent={element.message[element.message.length - 1]}
            messageFrom={
              element.message_from_user_id !== auth.getLoggedInUser().id
                ? findUserByID(element.message_from_user_id)
                : findUserByID(element.message_to_user_id)
            }
            mainMessage={element}
          />
        );
      });
    } else {
      messageDiv = <div>No messagess</div>;
    }
  } else {
    const filter2 = directMessages.filter(
      (element) => element.message_from_user_id === auth.getLoggedInUser().id
    );
    //alert("filter 2: " + JSON.stringify(filter2));
    if (filter2.length !== 0) {
      messageDiv = filter2.map((element) => {
        return (
          <DMSectionMessageItem
            key={element.id}
            messageContent={element.message[element.message.length - 1]}
            messageFrom={
              element.message_from_user_id !== auth.getLoggedInUser().id
                ? findUserByID(element.message_from_user_id)
                : findUserByID(element.message_to_user_id)
            }
            mainMessage={element}
          />
        );
      });
    } else {
      messageDiv = <div>No messagess</div>;
    }
  }

  return (
    <div className="dm-content">
      {/* <DMSectionTodayMessages messages={directMessages} /> */}
      <div className="dm-today">
        <b>All Messages</b>
        <div className="dm-messages-holder">{messageDiv}</div>
      </div>
    </div>
  );
};

export default DirectMessagingContent;
