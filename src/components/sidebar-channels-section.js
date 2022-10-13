import { Link } from "react-router-dom";

const SideBarChannelsSection = (props) => {
  const { auth, active, channelsDiv, addChannelDiv } = props;
  return (
    <div className="channels-section">
      <p>Channels</p>
      <ul>
        {active !== "general" && (
          <li>
            <Link
              to={"/channel/general/" + auth.getMasterChannel().channelName}
            >
              <i className="fa-solid fa-hashtag"></i> &nbsp;General
            </Link>
          </li>
        )}
        {active === "general" && (
          <li className="active-sidebar-item">
            <Link
              to={"/channel/general/" + auth.getMasterChannel().channelName}
            >
              <span className="active">
                <i className="fa-solid fa-hashtag"></i> &nbsp;General
              </span>
            </Link>
          </li>
        )}
        {channelsDiv}
        <li>{addChannelDiv}</li>
      </ul>
    </div>
  );
};
export default SideBarChannelsSection;
