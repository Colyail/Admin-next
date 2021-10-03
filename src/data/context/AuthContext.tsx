import route from 'next/router'
import { createContext, useEffect, useState } from "react";
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import User from "../../model/User";

interface AuthContextProps {
    user?: User
    loginWithGoogle?: () => Promise<void> // Async function return a Promise
}

const AuthContext = createContext<AuthContextProps>({})

// Takes the logged in user's information and returns as a normalized user within the app
async function normalizedUser(firebaseUser: firebase.User): Promise<User> {
    const token = await firebaseUser.getIdToken()
    return {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        token,
        provider: firebaseUser.providerData[0].providerId,
        imageUrl: firebaseUser.photoURL
    }
}

// Set or remove cookie that informs if the user is logged in
function manageCookie(userIsLoggedIn: boolean) {
    if (userIsLoggedIn) {
        Cookies.set(
            'admin-template-auth',
            userIsLoggedIn,
            { expires: 7 }
        )
    } else {
        Cookies.remove('admin-template-auth')
    }
}

export function AuthProvider(props) {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<User>(null)

    // Configure user session after login, saving user in state
    async function configureSession(firebaseUser) {
        if (firebaseUser?.email) {
            const user = await normalizedUser(firebaseUser)
            setUser(user)
            manageCookie(true)
            setLoading(false)
            return user.email

        } else {
            setUser(null)
            manageCookie(false)
            setLoading(false)
            return false
        }
    }

    async function loginWithGoogle() {
        // Open pop up window for user authentication with google
        const resp = await firebase.auth().signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )

        await configureSession(resp.user)
        route.push('/')
    }

    useEffect(() => {
        const cancelar = firebase.auth().onIdTokenChanged(configureSession)
        return () => cancelar()
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loginWithGoogle
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext