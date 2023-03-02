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
    const [loading, setLoading] = useState(true);

    // google provider login
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (profile)=>{
        return updateProfile(auth.currentUser, profile);
    }


    // logout User 
    const logoutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser)
            setLoading(false);
            return setUser(currentUser);
        })
        return () => {
            unSubcribe();
        };
    }, [])

    const authInfo = { user, createUser, loginUser, logoutUser, providerLogin, updateUser, loading }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;