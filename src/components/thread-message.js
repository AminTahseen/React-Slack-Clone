import ThreadMessageItem from "./thread-message-item";
import { useContext } from "react";
import { SlackContext } from "../context-api/slack-context-api";
const ThreadMessage = (props) => {
  const { threads } = useContext(SlackContext);
  const [channelThreads, setChannelThreads] = threads;
  const { channel } = props;
  const threadList = [...channelThreads];
  let div = null;
  if (channel === "thread") {
    div = <div>Message For threads</div>;
  } else if (channel === "general") {
    div = <div>Message For general</div>;
  } else {
    div = threadList.map((element) => {
      return element.channelId === channel.id ? (
        <ThreadMessageItem
          key={element.id}
          channel={channel}
          thread={element}
        />
      ) : null;
    });
  }
  return div;
};
export default ThreadMessage;
