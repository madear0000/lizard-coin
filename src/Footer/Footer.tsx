import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faUser,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <Link to="/" className="footer-page">
        <div className="footer-page">
          <FontAwesomeIcon icon={faMoneyBill} />
        </div>
      </Link>
      <Link to="/friends" className="footer-page">
        <div className="footer-page">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </Link>
      <Link to="/tasks" className="footer-page">
        <div className="footer-page">
          <FontAwesomeIcon icon={faListCheck} />
        </div>
      </Link>
    </footer>
  );
}

export default Footer;
