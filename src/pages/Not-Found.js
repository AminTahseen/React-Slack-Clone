import { Link } from "react-router-dom";
import slackLogo from "../images/slackLogo.svg";
const NotFound = () => {
  return (
    <div className="not-found">
      <img src={slackLogo} height={100} alt="not-found" />
      <h1>404 - Not Found!</h1>
      <Link to="/">Go Home</Link>
    </div>
  );
};
export default NotFound;
