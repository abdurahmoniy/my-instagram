import React from 'react'
import './auth.css'
import logo from '../../assets/logo.png'
import appstore from '../../assets/appstore.png'
import googleplay from '../../assets/googleplay.png'
export default function Register() {
  return (
    <div className='my-4'>
      <div className="border w-[350px] m-auto text-center px-9 py-4">
        <img src={logo} alt="" className='w-[200px] mx-auto my-4' />
        <div className="text-gray-500 my-2 font-bold">
          Sign up to see photos and videos from your friends.
        </div>
        <button className="my-2 w-[260px] py-1 rounded-md text-white instabtn">
          <i class="fa-brands fa-square-facebook mx-1 text-[20px]"></i>
          <a href="https://www.facebook.com/login.php" className=''>Log in with Facebook</a>
        </button>
        <div className="underln"></div>
        <input type="text" className='h-[38px] w-[260px] px-[4px] border rounded placeholder:text-[14px] my-1' placeholder='Mobile number or Email' />
        <input type="text" className='h-[38px] w-[260px] px-[4px] border rounded placeholder:text-[14px] my-1' placeholder='Full name' />
        <input type="text" className='h-[38px] w-[260px] px-[4px] border rounded placeholder:text-[14px] my-1' placeholder='Username' />
        <input type="text" className='h-[38px] w-[260px] px-[4px] border rounded placeholder:text-[14px] my-1' placeholder='Password' />
        <div className="text-[12px] text-gray-500">
          <p className='my-3'>
            People who use our service may have uploaded your contact information to Instagram. Learn More
          </p>
          <p className='my-3'>
            By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .
          </p>
        </div>
        <button className='my-2 w-[260px] py-1 rounded-md text-white instabtn'>Sign up</button>
      </div>
      <div className="border w-[350px] h-[63px] mx-auto my-[10px] flex justify-center items-center">
        Have an account? <a href='/login' className=" text-blue-500 mx-2">Log in</a>
      </div>
      <div className="text-center my-5 text-[13px]">
        Get the App.
      </div>
      <div className="flex justify-center">
        <a href="#">
          <img src={appstore} alt="" className='w-[140px] mx-1' />
        </a>
        <a href="#">
          <img src={googleplay} alt="" className='w-[140px] mx-1' />
        </a>
      </div>
    </div>
  )
}
