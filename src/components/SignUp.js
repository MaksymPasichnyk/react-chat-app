// components
import AuthContainer from "./AuthContainer";
import ChatHeading from "./ChatHeading";
import AuthHeading from "./AuthHeading";
import Form from "./Form";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import RegisterNote from "./RegisterNote";
import { useState } from "react";
import FileUploader from "./FileUploader";
// utils
import validateInfo from "../utils/validateInfo";

// npm
import { registerWithEmailAndPassword } from "../firebase/firebase";
import useForm from "../hooks/useForm";

// icons
import { BsFillPersonFill, BsFillKeyFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function SignUp() {
  const { form, handleInputChange, handleSubmitForm, errors } = useForm(
    validateInfo,
    registerWithEmailAndPassword
  );
  const [selectedFile, setSelectedFile] = useState(null);

	console.log(selectedFile)

  return (
    <AuthContainer>
      <ChatHeading />
      <AuthHeading
        title="Registration"
        desc="Please enter your credetials to create account"
      />
      <Form
        handleSubmitForm={(event) =>
          handleSubmitForm(event, registerWithEmailAndPassword, form)
        }
      >
        <FormInput
          placeholderText="Type in Username"
          icon={<BsFillPersonFill />}
          type="text"
          name="username"
          value={form.username}
          handleInputChange={handleInputChange}
          error={errors.username}
          errorClassMod="error--sign-up"
        />
        <FormInput
          placeholderText="Type in Email"
          icon={<MdEmail />}
          type="text"
          value={form.email}
          name="email"
          handleInputChange={handleInputChange}
          error={errors.email}
          errorClassMod="error--sign-up"
        />
        <FormInput
          placeholderText="Create an password"
          type="password"
          icon={<BsFillKeyFill />}
          value={form.password}
          name="password"
          handleInputChange={handleInputChange}
          error={errors.password}
          errorClassMod="error--sign-up"
        />
        <FormInput
          placeholderText="Confirm your password"
          type="password"
          icon={<BsFillKeyFill />}
          value={form.confirmPassword}
          name="confirmPassword"
          handleInputChange={handleInputChange}
          error={errors.confirmPassword}
          errorClassMod="error--sign-up"
        />
				<FileUploader
					onFileSelect={(file) => setSelectedFile(file)}
				/>
        <FormButton type="submit" title="Create an Account" />
      </Form>
      <RegisterNote to="/" text="Already Have An Account?" linkName="Sign in" />
    </AuthContainer>
  );
}

export default SignUp;
