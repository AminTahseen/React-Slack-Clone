import ThreadMessage from "./thread-message";

const ThreadContent = (props) => {
  const { channel } = props;
  return (
    <div className="thread-content">
      <ThreadMessage channel={channel} />
    </div>
  );
};
export default ThreadContent;
