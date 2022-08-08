import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AuthNote = ({ text, linkName, to }) => (
  <div className="register-note">
    <span className="register-note__text">{text}</span>
    <Link to={to} className="register-note__link">
      {linkName}
    </Link>
  </div>
);

AuthNote.propTypes = {
	text: PropTypes.string,
	linkName: PropTypes.string,
	to: PropTypes.string,
}

export default AuthNote;
