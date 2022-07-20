import { BiExit } from "react-icons/bi";

export default function SignOut(props) {
	const { auth } = props;

  return (
    auth.currentUser && 
			<button className="sign-out-btn" onClick={() => auth.signOut()}>
				<i className="sign-out-btn__icon"><BiExit/></i>
				Sign Out
			</button>
  );
}