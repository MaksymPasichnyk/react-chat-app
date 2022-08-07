import PropTypes from "prop-types";

const AuthContainer = ({children}) => (
  <div className="auth-container">
    <div className="auth-container__body">{children}</div>
  </div>
);

AuthContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthContainer;
