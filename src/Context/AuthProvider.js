import React, { createContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    getAuth, onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup, signOut
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

    const authInfo = { user, createUser, loginUser, logoutUser, providerLogin }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;