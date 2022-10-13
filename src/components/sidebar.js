import { Link } from "react-router-dom";
import auth from "../auth/auth";
import { useContext, useState } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import SidebarLiActiveCheck from "./sidebar-li-active-check";
import { mainMenu } from "../constants/constants";
import SidebarActiveMain from "./sidebar-active-main";
import SideBarDmSection from "./sidebar-dm-section";
import SideBarChannelsSection from "./sidebar-channels-section";
import { SubChannel } from "../models/sub-channel";

const Sidebar = (props) => {
  const { subChannel, channelFuncs, sideBarContent } = useContext(SlackContext);
  const { addSubChannel } = channelFuncs;
  const [channelSubChannels, setChannelSubChannels] = subChannel;
  const [channelName, setChannelName] = useState(false);
  const [subChannelName, setSubChannelName] = useState("");
  const [showSideBar] = sideBarContent;

  const [addChannel, setAddChannel] = useState(false);
  const { active } = props;
  let channelsDiv = null;
  let mainMenuDiv = null;
  let channelNameDiv = null;
  let channelNameButtonDiv = null;
  let addChannelDiv = null;
  const handleSubChannelName = (e) => {
    setSubChannelName(e.target.value);
  };
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
    channelNameButtonDiv = <i className="fa-solid fa-check"></i>;
  } else {
    channelNameDiv = (
      <Link to="/channel/channelName" className="active-h2">
        <h2>{auth.getMasterChannel().channelName}</h2>
      </Link>
    );
    channelNameButtonDiv = <i className="fa-solid fa-pen-to-square"></i>;
  }

  const setAddChannelDiv = () => {
    setAddChannel(!addChannel);
  };
  const setChannelNameDiv = () => {
    setChannelName(!channelName);
  };
  /*add new sub channel to sub channel list */
  const addNewChannel = () => {
    setAddChannelDiv();
    if (subChannelName !== "") {
      if (subChannelName.indexOf(" ") >= 0) {
        alert("channel name cannot contain a white space !");
      } else {
        const id = (Math.floor(Math.random() * 100) + 1) * 2;
        const userId = auth.getLoggedInUser().id;
        const membersIds = [];
        const masterChannelId = auth.getMasterChannel().id;
        membersIds.push(auth.getLoggedInUser().id);
        const subChannel = new SubChannel(
          id,
          subChannelName,
          userId,
          membersIds,
          masterChannelId
        );
        addSubChannel(subChannel);
      }
      setSubChannelName("");
    }
  };

  if (addChannel) {
    addChannelDiv = (
      <div className="add-channel-div">
        <input
          placeholder="Channel Name"
          value={subChannelName}
          onChange={handleSubChannelName}
        />
        <button onClick={addNewChannel}>
          <i className="fas fa-check-square"></i>
        </button>
      </div>
    );
  } else {
    addChannelDiv = (
      <Link onClick={setAddChannelDiv}>
        <i className="fa-solid fa-square-plus fa-lg"></i> &nbsp;Add Channel
      </Link>
    );
  }

  return (
    <div className={showSideBar ? "sidebar" : "sidebar-block"}>
      <div className="channel-header">
        {channelNameDiv}
        <div className="button-div">
          <button onClick={setChannelNameDiv}>{channelNameButtonDiv}</button>
        </div>
      </div>
      <div className="line-break" />
      <ul>{mainMenuDiv}</ul>
      <div className="line-break" />
      <SideBarChannelsSection
        auth={auth}
        active={active}
        channelsDiv={channelsDiv}
        addChannelDiv={addChannelDiv}
      />
      <SideBarDmSection />
    </div>
  );
};
export default Sidebar;
