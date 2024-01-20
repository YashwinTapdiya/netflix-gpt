import React, { useEffect } from "react";
import { AVTAR_URL, NETFLIX_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = ()=>{
    //Toggle GPT Search buttton
    dispatch(toggleGptSearchView());
  }

  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src="./ngpt-red-300x71-01.png" alt="logo" />
      {user && (
        <div className="flex p-2">
          <button
            className="py-2 px-4 mx-6 bg-purple-500 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img className="w-12 h-12" src="./avatar-red.jpeg" />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign-Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
