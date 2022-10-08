import Modal from "react-modal";
import MemberListItem from "./member-list-item";
import auth from "../auth/auth";
import { useContext, useEffect, useState } from "react";
import { SlackContext } from "../context-api/slack-context-api";
const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.674)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const AddMembersModal = (props) => {
  const { userFuncs } = useContext(SlackContext);
  const { findUserByID } = userFuncs;
  const { modalIsOpen, closeModal, channel } = props;

  const [memberList, setMemberList] = useState([]);
  let membersDiv = null;

  useEffect(() => {
    const members = [];
    const memberIds = [...auth.getMasterChannel().membersIds];
    memberIds.forEach((id) => {
      const user = findUserByID(id);
      members.push(user);
    });
    setMemberList(members);
  }, [findUserByID, memberList]);

  if (memberList.length > 0) {
    membersDiv = memberList.map((item) => {
      return <MemberListItem channel={channel} member={item} />;
    });
  } else {
    membersDiv = <p>No Members Found</p>;
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className="add-members">
        <div className="add-members-header">
          <h3>Add Members</h3>
          <button onClick={closeModal}>
            {" "}
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="add-members-content">{membersDiv}</div>
      </div>
    </Modal>
  );
};
export default AddMembersModal;
