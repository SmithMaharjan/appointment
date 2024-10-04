import React, { useState } from 'react'

const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState("Sign Up")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const formSubmittion = (e) => {
        e.preventDefault()
    }
    return (
        <form className=' min-h=[80vh] flex items-center'>
            <div className=' flex flex-col items-start m-auto gap-3 shadow-lg md:max-w-[340px] sm:min-w-96 border text-zinc-600 rounded-xl text-sm p-9 '>
                <p className=' text-2xl font-semibold'>{isLoggedIn === "Sign Up" ? "Create Account" : "Login"}</p>
                <p>Please {isLoggedIn == "Sign Up" ? "sign up" : "log in"} to book appointment</p>
                {isLoggedIn === "Sign Up" ? <div className=' w-full '>
                    <p>Full name</p>
                    <input className=' border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e) => setUsername(e.target.value)} required value={username} />
                </div> : ""}

                <div className=' w-full' >
                    <p>Email</p>
                    <input className=' border border-zinc-300 rounded w-full p-2 mt-1' type='email' onChange={(e) => setEmail(e.target.value)} required value={username} />
                </div>
                <div className=' w-full '>
                    <p>Password</p>
                    <input className=' border border-zinc-300 rounded w-full p-2 mt-1' type='password' onChange={(e) => setPassword(e.target.value)} required value={username} />
                </div>
                <button className=' bg-primary text-white w-full py-2 rounded-md text-base'>{isLoggedIn === "Sign Up" ? <p>Create Account</p> : <p>Login</p>}</button>
                <p className=' text-sm font-normal'>{isLoggedIn === "Sign Up" ? <p>Already have an account?  <span onClick={() => setIsLoggedIn("login")} className=' text-primary underline cursor-pointer'>Click here</span></p> : <p>Create an new account?  <span onClick={() => setIsLoggedIn("Sign Up")} className=' text-primary underline cursor-pointer'>Sign up</span></p>}</p>
            </div>

        </form>
    )
}

export default Login