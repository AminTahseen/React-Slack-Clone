import { useContext, useState, useEffect } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import parse from "html-react-parser";

const ThreadMessageItem = (props) => {
  const { thread } = props;
  const { userFuncs, threadFuncs } = useContext(SlackContext);
  const { findUserByID, hideShowRightContent } = userFuncs;
  const { updateReactionForThread } = threadFuncs;
  const [userName, setUserName] = useState("");
  const htmlInput = thread.threadContent;
  const reactElement = parse(htmlInput);
  const [emojiArray, setEmojiArray] = useState([]);

  useEffect(() => {
    //  alert(JSON.stringify(thread));
    const user = findUserByID(1);
    setUserName(user.name);
    setEmojiArray(thread.reactionsCount);
  }, [findUserByID, thread.reactionsCount]);

  const rightContent = () => {
    hideShowRightContent();
  };
  const updateThreadReaction = (emojiIndex) => {
    const dummyArray = [...emojiArray];
    if (emojiIndex === 0) {
      dummyArray[0]++;
    } else if (emojiIndex === 1) {
      dummyArray[1]++;
    } else {
      dummyArray[2]++;
    }
    setEmojiArray(dummyArray);
    updateReactionForThread(thread.id, emojiIndex);
  };
  return (
    <div>
      <div className="thread-message-post">
        <img
          className="thread-img"
          src={"https://ui-avatars.com/api/?name=" + userName}
          alt="not-found"
          width={50}
          height={50}
        />
        <div className="thread-post">
          <div className="user-details">
            <div className="user-details-values">
              <h4>{userName}</h4>
              <p>{thread.dateTimePosted}</p>
            </div>
            <button>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
          <div className="thread-actual-post">{reactElement}</div>
          <div className="thread-reactions">
            <button onClick={() => updateThreadReaction(0)}>
              <i className="fa-solid fa-thumbs-up"></i>&nbsp;
              {emojiArray[0]}
            </button>
            <button onClick={() => updateThreadReaction(1)}>
              <i className="fa-solid fa-face-grin-wide"></i>&nbsp;
              {emojiArray[1]}
            </button>
            <button onClick={() => updateThreadReaction(2)}>
              <i className="fa-solid fa-hands-clapping"></i>&nbsp;
              {emojiArray[2]}
            </button>
          </div>
          <button onClick={rightContent}>
            <div className="thread-replies">
              <i className="fa-solid fa-reply"></i>{" "}
              <p>{thread.replyCount} Replies</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ThreadMessageItem;
