import React, { useEffect, useState } from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle menu state

    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate("/error");
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL, }));
                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/")
            }
        });

        return () => unsubscribe();
    }, []);

    const handleGPTSearchClick = () => {
        // toggel gpt search
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="fixed w-screen h-16 px-8 py-2 z-30 flex flex-row md:flex-row justify-between bg-[#141414]">
            {/* bg-gradient-to-b from-black */}
            <img
                className="w-32 object-cover mx-auto md:mx-0"
                src={LOGO}
                alt="logo"
            />

            <button
                className="sm:hidden absolute right-6"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                Down
            </button>

            {user && (
                <div
                    className={`absolute top-16 left-0 w-full bg-[#141414] text-center p-4 transition-all duration-300 ease-in-out sm:p-0 sm:static sm:flex sm:space-x-6 sm:w-auto ${isMenuOpen ? "block" : "hidden"
                        } sm:block`}
                >
                    {showGptSearch && (
                        <select
                            name="Language"
                            className="p-2 bg-red-700 text-white h-10 rounded-lg"
                            onChange={handleLanguageChange}
                        >
                            {SUPPORTED_LANGUAGES.map((lang) => (
                                <option key={lang.identifier} value={lang.identifier}>
                                    {lang.name}
                                </option>
                            ))}
                        </select>
                    )}

                    <button
                        className="py-2 px-4 text-white hover:text-red-500"
                        onClick={handleGPTSearchClick}
                    >
                        {showGptSearch ? "Home" : "GPT Search"}
                    </button>

                    <img className="w-10 h-10 mx-auto" src={USER_AVATAR} alt="profile" />

                    <button
                        onClick={handleSignOut}
                        className="font-bold text-white mt-2 sm:mt-0"
                    >
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header