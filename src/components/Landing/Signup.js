import React from 'react'
import { FaUser } from 'react-icons/fa'
import { BsLockFill } from 'react-icons/bs'
import theSVG from '../../images/signup.svg'
function Signup() {
  // Login page
  return (
    <section className="container w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row-reverse justify-between items-center pt-12">
      <img className="w-full md:w-6/12 mb-12 md:mb-0" src={theSVG} alt="login page" />
      <form className="flex flex-col justify-center items-start w-full md:w-5/12">
        <h1 className="text-4xl font-bold text-center mb-8 mx-auto">Create Account</h1>
        <label className="text-xl font-medium mb-1">Fullname</label>
        <div className="flex justify-start  px-4 border w-full mb-4 rounded items-center">
          <FaUser className="text-lg mr-2" />
          <input className="border-0 outline-none w-full p-2 " placeholder="Ciroma Adekunle" type="text" name="name"/>
        </div>
        <label className="text-xl font-medium mb-1">Email</label>
        <div className="flex justify-start  px-4 border w-full mb-4 rounded items-center">
          <FaUser className="text-lg mr-2" />
          <input className="border-0 outline-none w-full p-2 " placeholder="example@email.com" type="email" name="email"/>
        </div>
        <label className="text-xl font-medium mb-1">Phone Number</label>
        <div className="flex justify-start  px-4 border w-full mb-4 rounded items-center">
          <FaUser className="text-lg mr-2" />
          <input className="border-0 outline-none w-full p-2 " placeholder="+234 8124 7837 822" type="text" name="phone number"/>
        </div>
        <label  className="text-xl font-medium mb-1">Password</label>
        <div className="flex justify-start px-4 border w-full mb-2 rounded items-center">
          <BsLockFill className="text-lg mr-2" />
          <input className="border-0 outline-none w-64 py-2 " placeholder="......." type="password" />
        </div>
        <button className="py-3 my-5 w-full bg-orange rounded border-0 outline-none text-white">Create Account</button>
      </form>
    </section>
  )
}

export default Signup
