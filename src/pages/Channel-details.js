import Sidebar from "../components/sidebar";
import ThreadContent from "../components/threads-contents";
import SendMessage from "../components/send-message";
import ChannelThreadHeader from "../components/thead-channel-header";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import RightContent from "../components/right-content";
import { Thread } from "../models/thread";
import auth from "../auth/auth";
import { getFormattedDate } from "../helpers/HelperFunctions";

const ChannelDetails = () => {
  const { channel } = useParams();
  const { subChannel, rightContent, threadFuncs } = useContext(SlackContext);
  const { addThreadToChannel } = threadFuncs;
  const [channelSubChannels] = subChannel;
  const [showRightContent] = rightContent;
  const subChannelClone = [...channelSubChannels];
  const channelDetails = subChannelClone.find(
    (element) => element.id === Number(channel)
  );
  let div = null;
  const sendMessageToChannel = (postContent) => {
    const id = Math.floor(Math.random() * 100) + 2;
    const userId = auth.getLoggedInUser().id;
    const channelId = channelDetails.id;
    const threadContent = postContent.toString();
    const dateTimePosted = getFormattedDate();
    const replyCount = 0;
    const reactionsCount = [0, 0, 0];
    const thread = new Thread(
      id,
      userId,
      channelId,
      threadContent,
      dateTimePosted,
      replyCount,
      reactionsCount
    );
    addThreadToChannel(thread);
  };
  if (showRightContent) {
    div = (
      <div class="dashboard-3-columns">
        <Sidebar active={channel} />
        <div class="sidebar-content">
          <ChannelThreadHeader channel={channelDetails} />
          <ThreadContent channel={channelDetails} />
          <SendMessage sendMessageToChannel={sendMessageToChannel} />
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
          <SendMessage sendMessageToChannel={sendMessageToChannel} />
        </div>
      </div>
    );
  }
  return div;
};
export default ChannelDetails;
