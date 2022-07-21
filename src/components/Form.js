import FormInput from "./FormInput";

// icons
import { BsFillPersonFill, BsFillKeyFill } from "react-icons/bs";

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmitForm} className="sign-in__form form">
			{props.children}
      {/*<FormInput
        icon={<BsFillPersonFill />}
        type="text"
        placeholderText="Enter your Email"
      />
      <FormInput
        icon={<BsFillKeyFill />}
        type="password"
        placeholderText="Enter your Password"
      />
      <a className="forgot-password" href="#">
        Forgot Password?
      </a>
      <button className="form-button">Login</button>*/}
    </form>
  );
}
