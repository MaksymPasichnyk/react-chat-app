import { FcGoogle } from "react-icons/fc";

export default function SignInButton(props) {
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
