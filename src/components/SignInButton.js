import PropTypes from 'prop-types';

const SignInButton = ({ signInMethod, label, icon}) => (
    <button
      type="button"
      onClick={signInMethod}
      className="btn sign-in-button"
    >
			<i>{icon}</i>
      {label}
    </button>
  );

SignInButton.propTypes = {
	icon: PropTypes.element.isRequired,
	label: PropTypes.string.isRequired
}


export default SignInButton
