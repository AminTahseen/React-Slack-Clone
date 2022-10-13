import { Link } from "react-router-dom";
import auth from "../auth/auth";

const SidebarActiveMain = (props) => {
  const { element, active } = props;
  return (
    <>
      {active === element.title && (
        <li className="active-sidebar-item">
          <Link
            to={"/channel" + element.path + auth.getMasterChannel().channelName}
          >
            <span className="active">
              <i className={element.icon}></i> &nbsp;{element.title}
            </span>
          </Link>
        </li>
      )}
      {active !== element.title && (
        <li>
          <Link
            to={"/channel" + element.path + auth.getMasterChannel().channelName}
          >
            <i className={element.icon}></i> &nbsp;{element.title}
          </Link>
        </li>
      )}
    </>
  );
};
export default SidebarActiveMain;
