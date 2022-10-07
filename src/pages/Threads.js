import SendMessage from "../components/send-message";
import Sidebar from "../components/sidebar";
import ThreadHeader from "../components/thread-header";
import ThreadContent from "../components/threads-contents";
import { useParams } from "react-router-dom";

const Threads = () => {
  const { name } = useParams();
  return (
    <div class="dashboard">
      <Sidebar active={"Threads"} />
      <div class="sidebar-content">
        <ThreadHeader channelName={"Threads"} />
        <ThreadContent channel={"thread"} />
        <SendMessage />
      </div>
    </div>
  );
};
export default Threads;
