import React, { useState } from 'react'

const Login = (role) => {
  const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const respond =(event)=>{
        event.preventDefault();
        console.log(username);
        console.log(password);
        console.log(role);
    }
    return(
        <header className="flex justify-center ">
            <div className="w-1/2 h-96 bg-wheat mt-32" style={{ backgroundImage: `url("/src/images/login.jpg")`, 
            backgroundSize: 'cover', backgroundPosition: 'center' }} >
            <div className="h-96 bg-red-400 w-72" style={{ backgroundImage: `url("/src/images/login.jpg")`, 
            backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h3 className="text-2xl pt-6 pl-2.5 font-bold">
              Login
            </h3>
            <h4 className="text-1xl pt-4 pl-2.5">
               login with your username to get started
            </h4>
            </div>


                <div className="ml-80 -mt-80 mx-auto">
                    <label htmlFor="" className="pr-8">
                        username
                    </label>
                    <input
                        type="text"
                        className="w-60 pl-3"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <br />
                    <br />
                    <label htmlFor="" className="pr-8 ">
                        Password
                    </label>
                    <input
                        type="password"
                        className="w-60 pl-3"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <br />
                    <br />

                    <button 
                        onClick={respond}
                        className="border-2 border-black px-1 py-0.5 bg-white ">
                        login
                    </button>
                    <p className="mt-2 text-center">forgot Password? <a href="/verify-otp" className="text-blue-500">click here</a></p>
                </div>
            </div>

            
        </header>
    );
};

export default Login