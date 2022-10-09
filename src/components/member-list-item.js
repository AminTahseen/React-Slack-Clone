import { useContext } from "react";
import { SlackContext } from "../context-api/slack-context-api";
const MemberListItem = (props) => {
  const { member, channel } = props;
  const { channelFuncs } = useContext(SlackContext);
  const { addRemoveUserToChannel } = channelFuncs;
  let memberExistDiv = null;
  let memberExistNameDiv = null;

  const addRemoveMemberToChannel = () => {
    addRemoveUserToChannel(channel.id, member.id);
  };

  memberExistDiv = channel.membersIds.includes(member.id) ? (
    <button className="remove" onClick={addRemoveMemberToChannel}>
      <i class="fa-solid fa-user-xmark"></i>
    </button>
  ) : (
    <button onClick={addRemoveMemberToChannel}>
      <i class="fa-solid fa-user-plus"></i>
    </button>
  );
  memberExistNameDiv = channel.membersIds.includes(member.id) ? (
    <p className="remove">{member.name}</p>
  ) : (
    <p>{member.name}</p>
  );
  return (
    <div className="member-list-item">
      <div className="member-list-item-member-details">
        <img
          src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
          alt="member-avatar"
          width={30}
          height={30}
        />
        {memberExistNameDiv}
      </div>
      {memberExistDiv}
    </div>
  );
};
export default MemberListItem;
