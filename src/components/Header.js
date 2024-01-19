import React, { useEffect } from "react";
import { NETFLIX_LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";

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
    onAuthStateChanged(auth, (user) => {
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
  }, []);

  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSignOut}
          >
            Sign-Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
