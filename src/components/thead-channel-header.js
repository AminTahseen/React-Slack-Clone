import auth from "../auth/auth";

const ChannelThreadHeader = (props) => {
  const { channel } = props;
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
        <button className="add-member-btn">
          <i class="fa-solid fa-user-plus"></i>{" "}
        </button>
      </div>
    </div>
  );
};
export default ChannelThreadHeader;
