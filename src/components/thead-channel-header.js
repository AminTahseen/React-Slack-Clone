import { useState } from "react";
import AddMembersModal from "./add-members-modal";
import auth from "../auth/auth";

const ChannelThreadHeader = (props) => {
  const { channel } = props;
  const [modalIsOpen, setIsOpen] = useState(false);
  let channelButtons = null;

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  if (channel.created_by_user_id === auth.getLoggedInUser().id) {
    channelButtons = (
      <div>
        <button className="add-member-btn">
          <i class="fas fa-trash"></i>{" "}
        </button>
        <button className="add-member-btn" onClick={openModal}>
          <i class="fa-solid fa-user-plus"></i>{" "}
        </button>

        <AddMembersModal
          channel={channel}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </div>
    );
  } else {
    channelButtons = (
      <button className="add-member-btn">
        <i class="fa-solid fa-info"></i>
      </button>
    );
  }
  return (
    <div className="thread-header">
      <div className="main-section">
        <h3>#{channel.channelName}</h3>
        <p>
          <i class="fa-regular fa-user"></i>&nbsp;
          {channel.membersIds.length} Users
        </p>
      </div>
      {channelButtons}
    </div>
  );
};
export default ChannelThreadHeader;
