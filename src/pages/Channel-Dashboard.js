import Sidebar from "../components/sidebar";
import ThreadHeader from "../components/thread-header";
import auth from "../auth/auth";

const ChannelDashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar active={"main"} />
      <div className="sidebar-content">
        <ThreadHeader channelName={"Welcome"} />
        <div className="welcome">Welcome {auth.getLoggedInUser().name}</div>
      </div>
    </div>
  );
};
export default ChannelDashboard;
