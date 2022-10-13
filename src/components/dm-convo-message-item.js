import React from "react";

const DirectMessageConvoItem = (props) => {
  const { message } = props;
  return <div>{message.message_content}</div>;
};

export default DirectMessageConvoItem;
