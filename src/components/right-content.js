import { useContext } from "react";
import { SlackContext } from "../context-api/slack-context-api";

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
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <br />
      Show Right Content
    </div>
  );
};
export default RightContent;
