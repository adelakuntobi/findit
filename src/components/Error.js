import React from 'react'
import { Link } from 'react-router-dom'
import ErrorSVG from "../images/errorImg.svg"

const ErrorPage = () => {
  return (
    <div className="flex flex-col lg:flex-row container mx-auto  md:w-10/12 items-center my-16 p-4">
      <img src={ErrorSVG} alt="error illustration" className="w-11/12 md:w-7/12" />
      <div className="md:text-2xl pl-0 md:pl-5">
        <h1 className="font-semibold text-5xl pt-8 md:pt-0">Page <span className="d-orange">Not</span> Found</h1>
        <p className="my-4">The page you tried to access doesn't exist or is incorrect</p>
        <Link to="/">
          <button className="flex items-center justify-center py-3 px-8 bg-orange rounded border-0 outline-none text-white ">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
