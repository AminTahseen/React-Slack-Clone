import { useContext, useState, useEffect } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import { User } from "../models/user";
const ThreadMessageItem = (props) => {
  const { channel, thread } = props;
  const { userFuncs } = useContext(SlackContext);
  const { findUserByID, hideShowRightContent } = userFuncs;
  const [userName, setUserName] = useState("");

  useEffect(() => {
    //  alert(JSON.stringify(thread));
    const user = findUserByID(1);
    setUserName(user.name);
  }, [findUserByID]);

  const rightContent = () => {
    hideShowRightContent();
  };
  return (
    <div>
      <div className="thread-message-post">
        <img
          className="thread-img"
          src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
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
              <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
          </div>
          <div className="thread-actual-post">
            <p>
              {thread.threadContent} Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled
            </p>
          </div>
          <div className="thread-reactions">
            <button>
              <i class="fa-solid fa-thumbs-up"></i>&nbsp;
              {thread.reactionsCount[0]}
            </button>
            <button>
              <i class="fa-solid fa-face-grin-wide"></i>&nbsp;
              {thread.reactionsCount[1]}
            </button>
            <button>
              <i class="fa-solid fa-hands-clapping"></i>&nbsp;
              {thread.reactionsCount[2]}
            </button>
          </div>
          <a href="#" onClick={rightContent}>
            <div className="thread-replies">
              <i class="fa-solid fa-reply"></i>{" "}
              <p>{thread.replyCount} Replies</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ThreadMessageItem;
