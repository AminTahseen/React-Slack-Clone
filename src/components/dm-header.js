import React from "react";

const DirectMessagingHeader = (props) => {
  const { heading, showSearchBar } = props;
  return (
    <div className="dm-header">
      <div className="dm-header-details">
        <h3>{heading}</h3>
      </div>
      {showSearchBar ? (
        <div className="dm-header-input">
          <span>
            <input
              type={"text"}
              placeholder="Search for members"
              className="dm-searchbar"
            />
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default DirectMessagingHeader;
