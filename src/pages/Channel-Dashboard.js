import Sidebar from "../components/sidebar";
import ThreadHeader from "../components/thread-header";
import auth from "../auth/auth";

const ChannelDashboard = () => {
  return (
    <div class="dashboard">
      <Sidebar active={"main"} />
      <div class="sidebar-content">
        <ThreadHeader channelName={"Welcome"} />
        <div className="welcome">Welcome {auth.getLoggedInUser().name}</div>
      </div>
    </div>
  );
};
export default ChannelDashboard;
