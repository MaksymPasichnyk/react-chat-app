import { BiExit } from "react-icons/bi";

const SignOut = ({auth} ) => (
    auth.currentUser && 
			<button className="sign-out-btn" onClick={() => auth.signOut()}>
				<i className="sign-out-btn__icon"><BiExit/></i>
				Sign Out
			</button>
  );

export default SignOut