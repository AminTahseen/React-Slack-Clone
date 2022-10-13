import React from "react";

const DirectMessageConvoHeader = (props) => {
  const { heading } = props;
  return (
    <div className="dm-convo-header-details">
      <div className="icon-container-dm-convo">
        <img
          src={"https://ui-avatars.com/api/?name=John Doe"}
          alt="not-found"
          width={50}
        />
        <div className="status-circle-active"></div>
      </div>
      <h3>{heading}</h3>
    </div>
  );
};

export default DirectMessageConvoHeader;
