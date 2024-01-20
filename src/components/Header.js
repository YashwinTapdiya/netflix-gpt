import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const isLoginPage = location.pathname === "/login";
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
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search buttton
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="w-full absolute px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src="./ngpt-red-300x71-01.png" alt="logo" />
      {isLoginPage && (
        <div className="px-4">
          <Link to="/">
            <button
              className="bg-red-600 text-white px-2 md:px-4 py-2 text-sm md:text-lg rounded-md"
              type="button"
            >
              Started Page
            </button>
          </Link>
        </div>
      )}
      {user && (
        <div className="flex p-2">
          <button
            className="py-2 px-4 mx-6 bg-purple-500 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img className="w-12 h-12" src="./avatar-red.jpeg" alt="avatar" />
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign-Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
