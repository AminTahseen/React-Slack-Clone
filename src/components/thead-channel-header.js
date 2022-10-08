import { useState } from "react";
import AddMembersModal from "./add-members-modal";

const ChannelThreadHeader = (props) => {
  const { channel } = props;
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="thread-header">
      <div className="main-section">
        <h3>#{channel.channelName}</h3>
        <p>
          <i class="fa-regular fa-user"></i>&nbsp;
          {channel.membersIds.length} Users
        </p>
      </div>
      <div>
        <button className="add-member-btn" onClick={openModal}>
          <i class="fa-solid fa-user-plus"></i>{" "}
        </button>
        <AddMembersModal
          channel={channel}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};
export default ChannelThreadHeader;
