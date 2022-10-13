import { useContext, useEffect, useState } from "react";
import AddMembersModal from "./add-members-modal";
import auth from "../auth/auth";
import { SlackContext } from "../context-api/slack-context-api";

const ChannelThreadHeader = (props) => {
  const { userFuncs } = useContext(SlackContext);
  const { findUserByID } = userFuncs;
  const { channel } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  let channelButtons = null;
  const [memberList, setMemberList] = useState([]);
  const members = [];

  const memberIds = [...auth.getMasterChannel().membersIds];

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    memberIds.forEach((id) => {
      const user = findUserByID(id);
      members.push(user);
    });
    setMemberList(members);
  }, [findUserByID]);

  if (channel.created_by_user_id === auth.getLoggedInUser().id) {
    channelButtons = (
      <div>
        <button className="add-member-btn">
          <i className="fas fa-trash"></i>{" "}
        </button>
        <button className="add-member-btn" onClick={openModal}>
          <i className="fa-solid fa-user-plus"></i>{" "}
        </button>

        <AddMembersModal
          channel={channel}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          memberList={memberList}
        />
      </div>
    );
  } else {
    channelButtons = (
      <button className="add-member-btn">
        <i className="fa-solid fa-info"></i>
      </button>
    );
  }
  return (
    <div className="thread-header">
      <div className="main-section">
        <h3>#{channel.channelName}</h3>
        <p>
          <i className="fa-regular fa-user"></i>&nbsp;
          {channel.membersIds.length} Users
        </p>
      </div>
      {channelButtons}
    </div>
  );
};
export default ChannelThreadHeader;
