import SignInButton from "./SignInButton";
import RegisterNote from "./RegisterNote";
import ChatHeading from "./ChatHeading";
import Form from "./Form";
import PropTypes from "prop-types";
import AuthContainer from "./AuthContainer";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { Link } from "react-router-dom";

// icons
import { FcGoogle } from "react-icons/fc";
import { BsPersonFill } from "react-icons/bs";
import AuthHeading from "./AuthHeading";
import { BsFillPersonFill, BsFillKeyFill } from "react-icons/bs";

function SignIn(props) {
  return (
    <>
      <AuthContainer>
        <ChatHeading />
        <AuthHeading
					title='Login'
					desc="Please enter your Login and your Password"
				/>
        <Form>
          <FormInput
            icon={<BsFillPersonFill />}
            placeholderText="Enter your Email"
            type="text"
          />
          <FormInput
            icon={<BsFillKeyFill />}
            placeholderText="Enter your Password"
            type="password"
          />
          <Link className="forgot-password" to="/reset-password">
            Forgot Password?
          </Link>
          <FormButton title="Login" />
        </Form>
        <p className="note">or continue with</p>
        <SignInButton
          icon={<BsPersonFill />}
          label={"Guest"}
          signInMethod={props.signInAsAnonymus}
        />
        <SignInButton
          icon={<FcGoogle />}
          label={"Google"}
          signInMethod={props.signInWithGoogle}
        />
        <RegisterNote
					text="Not a member yet?"
					linkName="Register"
					to="/signup"
				/>
      </AuthContainer>
    </>
  );
}

SignIn.propTypes = {
  signInAsAnonymus: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
};

export default SignIn;
