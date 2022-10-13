import SendMessage from "../components/send-message";
import Sidebar from "../components/sidebar";
import ThreadHeader from "../components/thread-header";
import ThreadContent from "../components/threads-contents";

const Threads = () => {
  return (
    <div className="dashboard">
      <Sidebar active={"Threads"} />
      <div className="sidebar-content">
        <ThreadHeader channelName={"Threads"} />
        <ThreadContent channel={"thread"} />
        <SendMessage />
      </div>
    </div>
  );
};
export default Threads;
