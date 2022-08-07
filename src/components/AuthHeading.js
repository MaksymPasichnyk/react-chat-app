import PropTypes from "prop-types";

const AuthHeading = ({ title, desc }) => (
  <>
    <h2 className="auth-heading__title">{title}</h2>
    <p className="auth-heading__desc">{desc}</p>
  </>
);

AuthHeading.propTypes = {
	title: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired
}

export default AuthHeading;
