import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG } from '../utils/constants';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate the form data
        const nameValue = name.current ? name.current.value : null;
        const message = checkValidData(email.current.value, password.current.value, nameValue);
        setErrorMessage(message);
        if (message) return;

        //Sign In Sign Up Logic
        if (!isSignInForm) {
            // Sign Up Logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                      }).then(() => {
                        // Profile updated!
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(
                            addUser({ 
                                uid: uid, 
                                email: email, 
                                displayName: displayName, 
                                photoURL: photoURL, 
                            }));
                      }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                      });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMessage(errorCode + "-" + errorMessage);
                });

        }
        else {
            // Sign In Loigc
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    // const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });

        }
    }

    const toggleSignForm = () => {
        setIsSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    className="h-screen object-cover md:w-screen"
                    src={BG_IMG}
                    alt="bg-img"
                />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="w-11/12 md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
                <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign in" : "Sign Up"}</h1>
                {!isSignInForm && (
                    <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                    />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg"
                />
                <p className="py-3 text-red-500 font-bold text-lg">{errorMessage}</p>
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign in" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now. "}
                </p>
            </form>
        </div>
    )
}

export default Login