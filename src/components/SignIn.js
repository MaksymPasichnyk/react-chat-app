import React, { useState, useEffect } from "react";
import SignInButton from "./SignInButton";
import RegisterNote from "./RegisterNote";
import { BsFillPersonFill, BsFillKeyFill } from "react-icons/bs";
import ChatHeading from "./ChatHeading";

// icons 
import { FcGoogle } from "react-icons/fc";
import { BsPersonFill } from "react-icons/bs";

function SignIn(props) {
  return (
    <>
      <div className="sign-in">
        <div className="sign-in__body">
					<ChatHeading />
          <h2 className="sign-in__title">Login</h2>
          <p className="sign-in__desc">Please enter your Login and Password</p>
          <form className="sign-in__form form">
            <div className="form__group">
							<i className="form__field-icon"><BsFillPersonFill /></i>
              <input 
								placeholder="Enter your Email"
								className="form__field" 
								type="text" 
							/>
            </div>
            <div className="form__group">
							<i className="form__field-icon"><BsFillKeyFill /></i>
              <input 
								placeholder="Enter you Password"
								className="form__field" 
								type="password" 
							
							/>
            </div>
            <a className="forgot-password" href="#">
              Forgot Password?
            </a>
            <button className="form__submit">Login</button>
          </form>
          <p className="note">or continue with</p>
					<SignInButton icon={<BsPersonFill />} label={'Guest'} signInMethod={props.signInAsAnonymus} />
					<SignInButton icon={<FcGoogle />} label={'Google'} signInMethod={props.signInWithGoogle} />
					<RegisterNote />
        </div>
      </div>
    </>
  );
}

export default SignIn;
