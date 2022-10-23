import { useContext } from "react";
import { SlackContext } from "../context-api/slack-context-api";
import SendMessage from "./send-message";

const RightContent = () => {
  const { userFuncs } = useContext(SlackContext);
  const { hideShowRightContent } = userFuncs;

  const closeRightContent = () => {
    hideShowRightContent();
  };
  return (
    <div>
      <div className="right-content-header">
        <h4>Details</h4>
        <button onClick={closeRightContent}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      <br />
      <div className="thread-message-post">
        <img
          className="thread-img"
          src={"https://ui-avatars.com/api/?name=John Doe"}
          alt="not-found"
          width={50}
          height={50}
        />
        <div className="thread-post">
          <div className="user-details">
            <div className="user-details-values">
              <h4>John Doe</h4>
              <p>Fri, 03:22 AM</p>
            </div>
          </div>
          <div className="thread-actual-post">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,
          </div>
          <div className="thread-reactions">
            <button>
              <i className="fa-solid fa-thumbs-up"></i>&nbsp; 2
            </button>
            <button>
              <i className="fa-solid fa-face-grin-wide"></i>&nbsp; 3
            </button>
            <button>
              <i className="fa-solid fa-hands-clapping"></i>&nbsp; 4
            </button>
          </div>
        </div>
      </div>
      <SendMessage />
    </div>
  );
};
export default RightContent;
