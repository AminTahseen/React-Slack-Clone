import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

const SideBarDmSection = () => {
  return (
    <div className="dm-section">
      <p>Direct Messages</p>
      <ul>
        <li className="li-dm">
          <div className="icon-container">
            <img
              src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png"
              alt="not-found"
            />
            <div className="status-circle-active"></div>
          </div>
          &nbsp;
          <Link>Amin Tahseen</Link>
        </li>

        <li className="li-dm">
          <div className="icon-container">
            <img src={avatar} alt="not-found" />
            <div className="status-circle"></div>
          </div>
          &nbsp;
          <Link>User Name</Link>
        </li>
        <li>
          <Link>
            <i className="fa-solid fa-square-plus fa-lg"></i> &nbsp;Add Teammate
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default SideBarDmSection;
