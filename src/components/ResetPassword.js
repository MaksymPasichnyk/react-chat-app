import AuthContainer from "./AuthContainer";
import Form from "./Form";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import { MdEmail } from "react-icons/md";
import AuthNote from "./AuthNote";
import AuthHeading from "./AuthHeading";
import Error from "./Error";

//
import { useState, useEffect } from "react";
import { sendPasswordReset } from "../firebase/firebase";
import { Link } from "react-router-dom";

const initialText = {
  title: "Forgot your password?",
  desc: "Enter your registered email below to receive password reset instruction",
};

const succesfullySendText = {
  title: "Check your mail",
  desc: "We have sent a password recover instructions to your email.",
};

function ResetPassword() {
  const [emailValue, setEmailValue] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {}, [error]);

  console.log(error);

  function handleInputChange(event) {
    setEmailValue(event.target.value);
  }

  function handleSubmitForm(event) {
    event.preventDefault();

    if (!emailValue) return;

    sendPasswordReset(emailValue, setError, setStatus);
  }
	
  return (
    <AuthContainer>
      <AuthHeading
        title={`${status ? succesfullySendText.title : initialText.title}`}
        desc={`${status ? succesfullySendText.desc : initialText.desc}`}
      />
			{error && <Error error={error} />}
      <Form handleSubmitForm={handleSubmitForm}>
        {!status && (
          <>
            <FormInput
              placeholderText="Type in Email"
              icon={<MdEmail />}
              type="email"
              value={emailValue}
              name="emailValue"
              handleInputChange={handleInputChange}
            />
            <AuthNote text="Remember password?" linkName="Login" to="/" />
            <FormButton type="submit" title="Send instructions" />
          </>
        )}
        {status && (
          <Link to="/">
            <FormButton title="Login" />
          </Link>
        )}
      </Form>
    </AuthContainer>
  );
}

export default ResetPassword;
