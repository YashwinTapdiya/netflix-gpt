import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  backToHomeOnSignOut,
  removeMovieResult,
  toggleGptSearchView,
} from "../utils/gptSlice";
import { Link } from "react-router-dom";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const isLoginPage = location.pathname === "/login";
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeMovieResult());
        dispatch(backToHomeOnSignOut());
      })
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
    dispatch(removeMovieResult());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 w-full py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row items-center justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src="./ngpt-red-300x71-01.png"
        alt="logo"
      />
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
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="font-semibold px-2 items-center py-1 mx-8 text-md text-start w-fit m-auto text-white bg-black bg-opacity-50 border-2 hover:border-white hover:bg-red-800"
            onClick={handleGptSearchClick}
          >
            {!showGptSearch ? "GPT Search" : "HomePage"}
          </button>
          <img
            className="w-10 h-10 my-2 -mx-3 rounded-lg"
            src="./avatar-red.jpeg"
            alt="avatar"
          />
          <button
            className="font-bold text-white p-2 m-2"
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
