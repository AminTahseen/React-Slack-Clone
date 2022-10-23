import Modal from "react-modal";
import MemberListItem from "./member-list-item";
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
  const { modalIsOpen, closeModal, channel, memberList } = props;

  let membersDiv = null;

  if (memberList.length > 0) {
    membersDiv = memberList.map((item) => {
      return (
        <div key={item.id}>
          <MemberListItem channel={channel} member={item} />
        </div>
      );
    });
  } else {
    membersDiv = <p>No Members Found</p>;
  }
  return (
    <Modal
      ariaHideApp={false}
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
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="add-members-content">{membersDiv}</div>
      </div>
    </Modal>
  );
};
export default AddMembersModal;
