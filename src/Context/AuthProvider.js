import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup, signOut, updateProfile
} from 'firebase/auth';
import app from '../Firebase/Firebase.init';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('');

    // google provider login
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user 
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (profile)=>{
        return updateProfile(auth.currentUser, profile);
    }


    // logout User 
    const logoutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            return setUser(currentUser);
        })
        return () => {
            unSubcribe();
        };
    }, [])

    const authInfo = { user, createUser, loginUser, logoutUser, providerLogin, updateUser }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;