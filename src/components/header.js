import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import slackLogo from "../images/slackLogo.svg";
import auth from "../auth/auth";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import NotificationWindow from "./notification-window";

const contentStyle = { width: 350 };

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();

  let activeSign = null;
  let activeHome = null;
  let activeNotification = null;

  const logout = () => {
    auth.logout(() => {
      navigate("/signup");
    });
  };
  if (pathName === "/signup") {
    activeSign = <span className="active">Join Slack</span>;
    activeHome = <span>Home</span>;
  } else if (pathName === "/home" || pathName === "/") {
    activeHome = <span className="active">Home</span>;
    activeSign = <span>Join Slack</span>;
  } else if (auth.isAuthenticated()) {
    activeHome = (
      <span className="Logout" onClick={logout}>
        <i class="fa-solid fa-right-from-bracket"></i>
      </span>
    );
    activeNotification = (
      <Popup
        className="my-popup-popup-content"
        trigger={
          <span className="notification">
            <i class="fa-solid fa-caret-down"></i>{" "}
            <span>
              <i class="fa-solid fa-bell"></i>
              <span className="notification-bell">2</span>
            </span>
          </span>
        }
        {...{
          contentStyle,
        }}
        position="bottom right"
      >
        <NotificationWindow />
      </Popup>
    );
  }
  return (
    <div class="nav">
      <div class="logo">
        <div className="logo">
          <div className="brand">
            <img src={slackLogo} height={30} width={30} alt="logo" />
            <h2>Slack 2.0</h2>
          </div>
        </div>
      </div>
      <div class="items">
        <ul>
          <li>
            <Link to="/signup">{activeSign}</Link>
          </li>
          <li>
            <Link to="/home">{activeHome}</Link>
          </li>
          <li>{activeNotification}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
