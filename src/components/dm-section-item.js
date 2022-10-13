import React from "react";
import { Link } from "react-router-dom";
import auth from "../auth/auth";

const DmSectionItem = (props) => {
  const { userName, active, itemActive, memberId } = props;
  let statusDiv = active ? (
    <div className="status-circle-active"></div>
  ) : (
    <div className="status-circle"></div>
  );
  return (
    <>
      {itemActive === userName && (
        <li className="li-dm li-dm-active">
          <div className="icon-container">
            <img
              src={"https://ui-avatars.com/api/?name=" + userName}
              alt="not-found"
            />
            {statusDiv}
          </div>
          &nbsp;
          <Link
            to={
              "/dm/messages/" +
              auth.getLoggedInUser().id +
              "/" +
              memberId +
              "/singleDm"
            }
          >
            <span className="active">{userName}</span>
          </Link>
        </li>
      )}
      {itemActive !== userName && (
        <li className="li-dm">
          <div className="icon-container">
            <img
              src={"https://ui-avatars.com/api/?name=" + userName}
              alt="not-found"
            />
            {statusDiv}
          </div>
          &nbsp;
          <Link
            to={
              "/dm/messages/" +
              auth.getLoggedInUser().id +
              "/" +
              memberId +
              "/singleDm"
            }
          >
            {userName}
          </Link>
        </li>
      )}
    </>
  );
};

export default DmSectionItem;
