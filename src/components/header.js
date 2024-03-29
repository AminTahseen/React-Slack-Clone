import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import slackLogo from "../images/slackLogo.svg";
import auth from "../auth/auth";
import { useNavigate } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import NotificationWindow from "./notification-window";
import { SlackContext } from "../context-api/slack-context-api";
import { useContext } from "react";

const contentStyle = { width: 350 };
const logoutStyle = { width: 100 };

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const navigate = useNavigate();
  const { sideBar, sideBarContent } = useContext(SlackContext);
  const { hideShowSideBar } = sideBar;
  const [showSideBar] = sideBarContent;

  let activeSign = null;
  let activeHome = null;
  let activeNotification = null;
  let menuDiv = null;
  const hideShowSideBarFunc = () => {
    hideShowSideBar();
  };
  const logout = () => {
    auth.logout(() => {
      navigate("/signup");
    });
  };
  if (pathName === "/signup") {
    activeSign = <span className="active">Join Slack</span>;
    activeHome = (
      <Link to="/home">
        <span>Home</span>
      </Link>
    );
  } else if (pathName === "/home" || pathName === "/") {
    activeHome = (
      <Link to="/home">
        <span className="active">Home</span>
      </Link>
    );
    activeSign = <span>Join Slack</span>;
  } else if (auth.isAuthenticated()) {
    activeHome = (
      <Popup
        className="my-popup-popup-content"
        trigger={
          <span className="header-account">
            <img
              src={
                "https://ui-avatars.com/api/?name=" +
                auth.getLoggedInUser().name
              }
              alt="not-found"
              width={30}
            />
            <i className="fa-solid fa-caret-down"></i>{" "}
          </span>
        }
        {...{
          logoutStyle,
        }}
        position="bottom right"
      >
        <div className="option-section">
          <p>My Profile</p>
          <p>My Settings</p>
        </div>
        <button className="logout" type="button" onClick={logout}>
          Logout
        </button>
      </Popup>
    );
    activeNotification = (
      <Popup
        className="my-popup-popup-content"
        trigger={
          <span className="notification">
            <span>
              <i className="fa-solid fa-bell"></i>
              <span className="notification-bell">2</span>
            </span>
            <i className="fa-solid fa-caret-down"></i>{" "}
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
  if (showSideBar) {
    menuDiv = <i className="fa-solid fa-bars"></i>;
  } else {
    menuDiv = <i className="fas fa-times"></i>;
  }
  return (
    <div className="nav">
      <div className="logo">
        <div className="brand">
          <i onClick={hideShowSideBarFunc}>{menuDiv}</i>
          <img src={slackLogo} height={30} width={30} alt="logo" />
          <h2>Slack 2.0</h2>
        </div>
      </div>
      <div className="items">
        <ul>
          <li>
            <Link to="/signup">{activeSign}</Link>
          </li>
          <li>{activeHome}</li>
          <li>{activeNotification}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
