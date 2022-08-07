// components
import SignInButton from "./SignInButton";
import RegisterNote from "./RegisterNote";
import ChatHeading from "./ChatHeading";
import Form from "./Form";
import PropTypes from "prop-types";
import AuthContainer from "./AuthContainer";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import Error from "./Error";

// npm
import { Link } from "react-router-dom";
import { logInWithEmailAndPassword } from "../firebase/firebase";
import { useState } from "react";

// icons
import { FcGoogle } from "react-icons/fc";
import { BsPersonFill } from "react-icons/bs";
import AuthHeading from "./AuthHeading";
import { BsFillPersonFill, BsFillKeyFill } from "react-icons/bs";

function SignIn(props) {
	const [authError, setAuthError] = useState('');
  const initialFormState = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialFormState);

  function handleInputChange(event) {
    const target = event.target;
    const { name, value } = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }

  function handleSubmitForm(event, formData) {
		event.preventDefault()
    const { email, password } = formData;

    if (email && password) {
      logInWithEmailAndPassword(email, password, setAuthError);
    }
  }

  return (
    <>
      <AuthContainer>
        <ChatHeading />
        <AuthHeading
          title="Login"
          desc="Please enter your Login and your Password"
        />

        <Form handleSubmitForm={(event) => handleSubmitForm(event, form)}>
					{authError && <Error classMod='error--sign-in' error={authError} />}
          <FormInput
            icon={<BsFillPersonFill />}
            placeholderText="Enter your Email"
            type="text"
            handleInputChange={handleInputChange}
            name="email"
            value={form.email}
          />
          <FormInput
            icon={<BsFillKeyFill />}
            placeholderText="Enter your Password"
            type="password"
            handleInputChange={handleInputChange}
            name="password"
            value={form.password}
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
