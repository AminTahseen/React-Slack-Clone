import Sidebar from "../components/sidebar";
import ThreadContent from "../components/threads-contents";
import SendMessage from "../components/send-message";
import ChannelThreadHeader from "../components/thead-channel-header";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import RightContent from "../components/right-content";

const ChannelDetails = () => {
  const { channel } = useParams();
  const { subChannel, rightContent } = useContext(SlackContext);
  const [channelSubChannels, setChannelSubChannels] = subChannel;
  const [showRightContent, setShowRightContent] = rightContent;
  const subChannelClone = [...channelSubChannels];
  const channelDetails = subChannelClone.find(
    (element) => element.id === Number(channel)
  );
  let div = null;

  if (showRightContent) {
    div = (
      <div class="dashboard-3-columns">
        <Sidebar active={channel} />
        <div class="sidebar-content">
          <ChannelThreadHeader channel={channelDetails} />
          <ThreadContent channel={channelDetails} />
          <SendMessage />
        </div>
        <div className="sidebar-content-right-content">
          <RightContent />
        </div>
      </div>
    );
  } else {
    div = (
      <div class="dashboard">
        <Sidebar active={channel} />
        <div class="sidebar-content">
          <ChannelThreadHeader channel={channelDetails} />
          <ThreadContent channel={channelDetails} />
          <SendMessage />
        </div>
      </div>
    );
  }
  return div;
};
export default ChannelDetails;
