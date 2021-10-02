import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconWarning } from "../components/icons";

export default function Auth() {

    const [error, setError] = useState(null)
    const [authMode, setAuthMode] = useState<'login' | "registration">('login')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    // Show error for X seconds
    function showError(msg, timeInSeconds = 5) {
        setError(msg)
        setTimeout(() => setError(null), timeInSeconds * 1000)
    }

    function submit() {
        if (authMode === 'login') {
            console.log('login')
        } else {
            console.log('registration')
        }
    }

    return (
        <div className="flex h-screen items-center justify-center">

            <div className="hidden md:block md:w-1/2 lg:w-2/3">
                <img
                    src="https://source.unsplash.com/random"
                    alt="Image of auth page"
                    className="h-screen w-full object-cover"
                />
            </div>

            <div className="flex items-center justify-center text-center m-10 w-full md:w-1/2 lg:w-1/3">
                <div className="max-w-xs">

                    <h1 className={`text-3xl font-bold mb-5`}>
                        {authMode === 'login' ? 'Login with Your Account' : 'Register now'}
                    </h1>

                    {error ? (
                        <div className={`
                            flex items-center
                            bg-red-400 text-white py-3 px-5 my-2
                            border border-red-100 rounded-lg
                        `}>
                            {IconWarning()}
                            <span className="ml-3">{error}</span>
                        </div>
                    ) : false}

                    <AuthInput
                        label="Email"
                        type="email"
                        value={email}
                        valueChanged={setEmail}
                        required
                    />
                    <AuthInput
                        label="Senha"
                        type="password"
                        value={senha}
                        valueChanged={setSenha}
                        required
                    />

                    <button onClick={submit} className={`
                            w-full bg-indigo-500 hover:bg-indigo-400
                            text-white rounded-lg px-4 py-3 mt-6
                        `}>
                        {authMode === 'login' ? 'Enter' : 'Register'}
                    </button>

                    <hr className="my-6 border-gray-300 w-full" />

                    <button className={`
                        w-full bg-red-500 hover:bg-red-400
                        text-white rounded-lg px-4 py-3
                    `}>
                        {authMode === 'login' ? 'Enter' : 'Register'} with Google
                    </button>

                    {/* Switch between login and registration */}
                    {authMode === 'login' ? (
                        <p className="mt-8">
                            New around here?
                            <a onClick={() => setAuthMode('registration')} className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer ml-1
                            `}>
                                Create an Account for Free
                            </a>
                        </p>
                    ) : (
                        <p className="mt-8">
                            Already part of our community?
                            <a onClick={() => setAuthMode('login')} className={`
                                text-blue-500 hover:text-blue-700 font-semibold
                                cursor-pointer ml-1
                            `}>
                                Enter your Credentials
                            </a>
                        </p>
                    )}

                </div>
            </div>

        </div>
    )
}