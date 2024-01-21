import React, { useRef, useState } from "react";
import Header from "./Header";
import { BACK_IMG } from "../utils/constants";
import checkValidateData from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInFrom, setIsSignInFrom] = useState(true);
  const [loginMessage, setLoginMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInFrom(!isSignInFrom);
  };

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButtonClick = () => {
    const nameValue = name.current? name.current.value : null;
    const message = checkValidateData(
      email.current.value,
      password.current.value,
      nameValue
    );
    setLoginMessage(message);
    if (message) return;
    // Sign / Sign Up Logic
    if (!isSignInFrom) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              // An error occurred
              setLoginMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoginMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoginMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACK_IMG} alt="back-ground-image" className="h-screen md:h-full object-cover"/>
      </div>
      <form
        className="absolute text-white px-12 py-4 md:py-8 bg-black my-36 mx-auto right-0 left-0 w-[85%] md:w-3/12 text-center bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl text-[26px] md:text-3xl py-3 md:py-4 text-start">
          {isSignInFrom === true ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInFrom && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 md:p-4 px-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 md:p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 md:p-4 my-4 w-full bg-gray-700"
        />
        <p className="py-2 text-red-500 font-bold text-lg">{loginMessage}</p>
        <button
          className="p-3 md:p-4 my-3 md:my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInFrom === true ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 md:py-4 text-start cursor-pointer" onClick={toggleSignInForm}>
          {isSignInFrom === true
            ? "New to Netflix? Sign-Up Now"
            : "Already registered? Sign-In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
