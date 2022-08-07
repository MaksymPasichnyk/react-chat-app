import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const RegisterNote = ({ text, linkName, to }) => (
  <div className="register-note">
    <span className="register-note__text">{text}</span>
    <Link to={to} className="register-note__link">
      {linkName}
    </Link>
  </div>
);

RegisterNote.propTypes = {
	text: PropTypes.string,
	linkName: PropTypes.string,
	to: PropTypes.string,
}

export default RegisterNote;
