import AuthContainer from "./AuthContainer";
import ChatHeading from "./ChatHeading";
import AuthHeading from "./AuthHeading";
import Form from "./Form";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import RegisterNote from "./RegisterNote";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import { createUserWithEmailAndPassword } from "firebase/auth";

// icons
import { BsFillPersonFill, BsFillKeyFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { async } from "@firebase/util";
import { addDoc, collection } from "firebase/firestore";
import { func } from "prop-types";

function SignUp() {
  const initialFormState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [error, setError] = useState("");
  const [form, setForm] = useState(initialFormState);
  const [user, setUser] = useState();
  const { createUserWithEmailAndPassword, auth, firestore } =
    useContext(AuthContext);

	console.log(auth)
	
  function validatePassword() {
    let isValid = true;
    const { password, confirmPassword } = form;

    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }

    return isValid;
  }

  //const registerWithEmailAndPassword = async (name, email, password) => {
  //  try {
  //    const res = await createUserWithEmailAndPassword(auth, email, password);
  //    const user = res.user;
  //    await addDoc(collection(db, "users"), {
  //      uid: user.uid,
  //      name,
  //      authProvider: "local",
  //      email,
  //    });
  //  } catch (err) {
  //    console.error(err);
  //    alert(err.message);
  //  }
  //};

  const registerUser = async (e) => {
    e.preventDefault();

    const { email, password, name } = form;

    try {
      const res = await auth.createUserWithEmailAndPassword(email, password);
      const user = res.user;
      await addDoc(collection(firestore, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
      });
    } catch (err) {
      console.error(err);
    }
  };

  //function register(e) {
  //  e.preventDefault();
  //  setError("");
  //  if (validatePassword()) {
  //    auth
  //      .createUserWithEmailAndPassword(form.email, form.password)
  //      .then((userCredential) => {
  //        const user = userCredential.user;
  //        console.log(user);
  //      })
  //      .catch((err) => setError(err.message));
  //  }
  //  setForm(initialFormState);
  //}

  function handleInputChange(event) {
    const target = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    const { name, value } = target;
  }

  return (
    <AuthContainer>
      <ChatHeading />
      <AuthHeading
        title="Registration"
        desc="Please enter your credetials to create account"
      />
      <Form handleSubmitForm={registerUser}>
        <FormInput
          placeholderText="Type in Name"
          icon={<BsFillPersonFill />}
          type="text"
          name="name"
          value={form.name}
          handleInputChange={handleInputChange}
        />
        <FormInput
          placeholderText="Type in Email"
          icon={<MdEmail />}
          type="text"
          value={form.email}
          name="email"
          handleInputChange={handleInputChange}
        />
        <FormInput
          placeholderText="Create an password"
          type="password"
          icon={<BsFillKeyFill />}
          value={form.password}
          name="password"
          handleInputChange={handleInputChange}
        />
        <FormInput
          placeholderText="Confirm your password"
          type="password"
          icon={<BsFillKeyFill />}
          value={form.confirmPassword}
          name="confirmPassword"
          handleInputChange={handleInputChange}
        />
        <FormButton type="submit" title="Create an Account" />
      </Form>
      <RegisterNote to="/" text="Already Have An Account?" linkName="Sign in" />
    </AuthContainer>
  );
}

export default SignUp;
