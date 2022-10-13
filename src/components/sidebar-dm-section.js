import { Link } from "react-router-dom";
import DmSectionItem from "./dm-section-item";
import auth from "../auth/auth";
import { useContext, useEffect, useState } from "react";
import { SlackContext } from "../context-api/slack-context-api";

const SideBarDmSection = (props) => {
  const { active } = props;
  const { userFuncs } = useContext(SlackContext);
  const { findUserByID } = userFuncs;
  const memberIds = [...auth.getMasterChannel().membersIds];
  const [memberList, setMemberList] = useState([]);
  const members = [];
  let dmList = null;
  let addTeamMate = null;

  useEffect(() => {
    memberIds.forEach((id) => {
      const user = findUserByID(id);
      members.push(user);
    });
    setMemberList(members);
  }, [findUserByID]);
  if (memberList.length > 0) {
    dmList = memberList.map((item) => {
      return (
        <DmSectionItem
          key={item.id}
          userName={item.name}
          active={item.status}
          itemActive={active}
          memberId={item.id}
        />
      );
    });
  } else {
    dmList = <p>No Members Found</p>;
  }
  if (
    auth.getMasterChannel().created_by_user_id === auth.getLoggedInUser().id
  ) {
    addTeamMate = (
      <Link>
        <i className="fa-solid fa-square-plus fa-lg"></i> &nbsp;Add Teammate
      </Link>
    );
  }
  return (
    <div className="dm-section">
      <p>Direct Messages</p>
      <ul>
        {dmList}
        <li>{addTeamMate}</li>
      </ul>
    </div>
  );
};
export default SideBarDmSection;
