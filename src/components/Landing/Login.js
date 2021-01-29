import React from 'react'
import { FaUser } from 'react-icons/fa'
import { BsLockFill } from 'react-icons/bs'
import theSVG from '../../images/signup1.svg'
function Login() {
  // Login page
  return (
    <section className="container w-10/12 mx-auto flex justify-between items-start pt-12">
      <img className="w-6/12" src={theSVG} alt="login page" />
      <form className="flex flex-col justify-center items-start w-5/12">
        <h1 className="text-4xl font-bold text-center mb-8 mx-auto">Login</h1>
        <label className="text-xl font-medium mb-1">Email</label>
        <div className="flex justify-start py-2 px-4 border w-full mb-4 rounded items-center">
          <FaUser className="text-lg mr-2" />
          <input className="border-0 outline-none w-64" placeholder="example@email.com" />
        </div>
        <label  className="text-xl font-medium mb-1">Password</label>
        <div className="flex justify-start py-2 px-4 border w-full mb-2 rounded items-center">
          <BsLockFill className="text-lg mr-2" />
          <input className="border-0 outline-none w-64" placeholder="......." />
        </div>
        <button className="py-3 my-5 w-full bg-orange rounded border-0 outline-none text-white">Login</button>
      </form>
    </section>
  )
}

export default Login
