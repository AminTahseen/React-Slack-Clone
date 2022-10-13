import SendMessage from "../components/send-message";
import Sidebar from "../components/sidebar";
import ThreadHeader from "../components/thread-header";
import ThreadContent from "../components/threads-contents";
const GeneralChannel = () => {
  return (
    <div className="dashboard">
      <Sidebar active={"general"} />
      <div className="sidebar-content">
        <ThreadHeader channelName={"General"} />
        <ThreadContent channel={"general"} />
        <SendMessage />
      </div>
    </div>
  );
};
export default GeneralChannel;
