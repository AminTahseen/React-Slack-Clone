import { Link } from "react-router-dom";

const SidebarLiActiveCheck = (props) => {
  const { element, active } = props;
  return (
    <>
      {Number.parseInt(active) === element.id && (
        <li className="active-sidebar-item">
          <Link to={"/channel/details/" + element.id}>
            <span className="active">
              <i class="fa-solid fa-hashtag"></i> &nbsp;{element.channelName}
            </span>
          </Link>
        </li>
      )}
      {Number.parseInt(active) !== element.id && (
        <li>
          <Link to={"/channel/details/" + element.id}>
            <i class="fa-solid fa-hashtag"></i> &nbsp;{element.channelName}
          </Link>
        </li>
      )}
    </>
  );
};
export default SidebarLiActiveCheck;
