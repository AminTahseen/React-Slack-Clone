import auth from "../auth/auth";

const ThreadHeader = (props) => {
  const { channelName } = props;
  return (
    <div className="thread-header">
      <div className="main-section">
        <h3>#{channelName}</h3>
        <p>
          <i class="fa-regular fa-user"></i>&nbsp;
          {auth.getMasterChannel().membersIds.length} Users
        </p>
      </div>
      <button className="add-member-btn">
        <i class="fa-solid fa-info"></i>
      </button>
    </div>
  );
};
export default ThreadHeader;
