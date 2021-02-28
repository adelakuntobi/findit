import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { BsLockFill } from 'react-icons/bs'
import { ImPhone } from 'react-icons/im'
import theSVG from '../../images/signup.svg'
import { toast } from 'react-toastify'
function Signup() {

  const [data, setData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  })
  const [errorMsg, setErrorMsg] = useState("")
  // Make initial object
  const { name, email, password, phoneNumber, confirmPassword } = data

  // Add the name to data object
  const handleChange = (name) => event => {
    setData({ ...data, [name]: event.target.value })
  }

  // On submit of the form
  const onSubmitForm = async (e) => {
    e.preventDefault();
    // If the fields are empty
    if (!name || !email || !password || !confirmPassword || !phoneNumber) {
      toast.error("Please fill in the field(s)")
      setErrorMsg("Please fill in the field(s)")
    }
    // Authenticate that password and confirm password are the same thing
    else if (password !== confirmPassword) {
      setErrorMsg("Password and confirm password doesn't match")
      toast.error("Password do not match")
    }
    else {
      // register( name, email, password)
      toast.success("Everything don set, carry go")
      console.log("Everything don set, carry go")
      setErrorMsg("")
      console.log(data)
    }

  }
  // Sign Up page
  return (
    <section className="container w-11/12 md:w-10/12 mx-auto flex flex-col md:flex-row-reverse justify-between items-center pt-12">
      <img className="w-full md:w-6/12 mb-12 md:mb-0" src={theSVG} alt="login page" />
      <form className="flex flex-col justify-center items-start w-full md:w-5/12" onSubmit={onSubmitForm}>
        <h1 className="text-4xl font-bold text-center mb-8 mx-auto">Create Account</h1>
        <p className="px-4 my-4 w-full font-semibold text-xl leading-10 bg-red-700 text-white">{errorMsg}</p>
        <label className="text-xl font-medium mb-1">Fullname</label>
        <div className="flex justify-start  px-4 border w-full mb-4 rounded items-center">
          <FaUser className="text-lg mr-2" />
          <input className="border-0 outline-none w-full p-2 " onChange={handleChange('name')}
            placeholder="Ciroma Adekunle" type="text" name="name" />
        </div>
        <label className="text-xl font-medium mb-1">Email</label>
        <div className="flex justify-start  px-4 border w-full mb-4 rounded items-center">
          <FaUser className="text-lg mr-2" />
          <input className="border-0 outline-none w-full p-2 " onChange={handleChange('email')}
            placeholder="example@email.com" type="email" name="email" />
        </div>
        <label className="text-xl font-medium mb-1">Phone Number</label>
        <div className="flex justify-start  px-4 border w-full mb-4 rounded items-center">
          <ImPhone className="text-lg mr-2" />
          <input className="border-0 outline-none w-full p-2 " onChange={handleChange('phoneNumber')}
            placeholder="+234 8124 7837 822" type="text" name="phone number" />
        </div>
        <label className="text-xl font-medium mb-1">Password</label>
        <div className="flex justify-start px-4 border w-full mb-2 rounded items-center">
          <BsLockFill className="text-lg mr-2" />
          <input className="border-0 outline-none w-64 py-2 " onChange={handleChange('password')}
            placeholder="......." type="password" />
        </div>
        <label className="text-xl font-medium mb-1">Confirm Password</label>
        <div className="flex justify-start px-4 border w-full mb-2 rounded items-center">
          <BsLockFill className="text-lg mr-2" />
          <input className="border-0 outline-none w-64 py-2 " onChange={handleChange('confirmPassword')}
            placeholder="......." type="password" />
        </div>
        <button className="py-3 my-5 w-full bg-orange rounded border-0 outline-none text-white">Create Account</button>
      </form>
    </section>
  )
}

export default Signup
