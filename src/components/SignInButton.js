import PropTypes from 'prop-types';

function SignInButton(props) {
  return (
    <button
      type="button"
      onClick={props.signInMethod}
      className="btn sign-in-button"
    >
			<i>{props.icon}</i>
      {props.label}
    </button>
  );
}

SignInButton.propTypes = {
	icon: PropTypes.element.isRequired,
	label: PropTypes.string.isRequired
}


export default SignInButton
