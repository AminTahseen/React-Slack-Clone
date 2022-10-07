import { Link } from "react-router-dom";
import avatar from "../images/avatar.png";
import auth from "../auth/auth";
import { useContext, useState } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import SidebarLiActiveCheck from "./sidebar-li-active-check";
import { mainMenu } from "../constants/constants";
import SidebarActiveMain from "./sidebar-active-main";

const Sidebar = (props) => {
  const { subChannel } = useContext(SlackContext);
  const [channelSubChannels, setChannelSubChannels] = subChannel;
  const [channelName, setChannelName] = useState(false);

  const { active } = props;
  let channelsDiv = null;
  let mainMenuDiv = null;
  let channelNameDiv = null;
  let channelNameButtonDiv = null;
  channelsDiv = channelSubChannels.map((element) => {
    return element.masterChannelId === auth.getMasterChannel().id ? (
      <SidebarLiActiveCheck
        key={element.id}
        element={element}
        active={active}
      />
    ) : null;
  });
  mainMenuDiv = mainMenu.map((element) => {
    return (
      <SidebarActiveMain key={element.id} element={element} active={active} />
    );
  });
  if (channelName) {
    channelNameDiv = (
      <div className="channel-name-edit">
        <input placeholder="Channel Name" />
      </div>
    );
    channelNameButtonDiv = <i class="fa-solid fa-check"></i>;
  } else {
    channelNameDiv = (
      <Link to="/channel/channelName" className="active-h2">
        <h2>{auth.getMasterChannel().channelName}</h2>
      </Link>
    );
    channelNameButtonDiv = <i class="fa-solid fa-pen-to-square"></i>;
  }
  const setChannelNameDiv = () => {
    setChannelName(!channelName);
  };
  return (
    <div class="sidebar">
      <div className="channel-header">
        {channelNameDiv}
        <div className="button-div">
          <button onClick={setChannelNameDiv}>{channelNameButtonDiv}</button>
        </div>
      </div>
      <div className="line-break" />
      <ul>{mainMenuDiv}</ul>
      <div className="line-break" />
      <div className="channels-section">
        <p>Channels</p>
        <ul>
          {active !== "general" && (
            <li>
              <Link
                to={"/channel/general/" + auth.getMasterChannel().channelName}
              >
                <i class="fa-solid fa-hashtag"></i> &nbsp;General
              </Link>
            </li>
          )}
          {active === "general" && (
            <li className="active-sidebar-item">
              <Link
                to={"/channel/general/" + auth.getMasterChannel().channelName}
              >
                <span className="active">
                  <i class="fa-solid fa-hashtag"></i> &nbsp;General
                </span>
              </Link>
            </li>
          )}
          {channelsDiv}

          <li>
            <Link>
              <i class="fa-solid fa-square-plus fa-lg"></i> &nbsp;Add Channel
            </Link>
          </li>
        </ul>
      </div>
      <div className="dm-section">
        <p>Direct Messages</p>
        <ul>
          <li className="li-dm">
            <div class="icon-container">
              <img
                src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
                alt="not-found"
              />
              <div class="status-circle-active"></div>
            </div>
            &nbsp;
            <Link>Amin Tahseen</Link>
          </li>

          <li className="li-dm">
            <div class="icon-container">
              <img src={avatar} alt="not-found" />
              <div class="status-circle"></div>
            </div>
            &nbsp;
            <Link>User Name</Link>
          </li>
          <li>
            <Link>
              <i class="fa-solid fa-square-plus fa-lg"></i> &nbsp;Add Teammate
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
