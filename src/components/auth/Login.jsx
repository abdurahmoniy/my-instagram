import React, { useState } from 'react'
import './auth.css'
import logo from '../../assets/logo.png'
import appstore from '../../assets/appstore.png'
import googleplay from '../../assets/googleplay.png'
export default function Login() {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <div className='my-20'>
      <div className="border w-[350px] m-auto text-center py-4">
        <img src={logo} alt="" className='w-[200px] mx-auto my-4' />
        <div className={`input-container ${isFocused ? 'input-focused' : ''}`}>
          <input type="text" onFocus={handleFocus} className='h-[38px] w-[260px] px-[4px] mx-[20px] border rounded placeholder:text-[14px] my-1' />
          <label className="placeholder">Enter your text</label>
        </div>
        <div className={`input-container ${isFocused ? 'input-focused' : ''}`}>
          <input type="text" onFocus={handleFocus} className='h-[38px] w-[260px] px-[4px] mx-[20px] border rounded placeholder:text-[14px] my-1' />
          <label className="placeholder">Enter your text</label>
        </div>
        <button className='my-2 w-[260px] py-1 rounded-md text-white instabtn'>Log in</button>
        <div className="underln"></div>
        <div className=" text-blue-950 flex items-center justify-center my-4">
          <i class="fa-brands fa-square-facebook mx-1 text-[20px]"></i>
          <a href="https://www.facebook.com/login.php" className=''>Log in with Facebook</a>
        </div>
        <a className="text-[12px]" href='#'>Forgot password?</a>
      </div>
      <div className="border w-[350px] h-[63px] mx-auto my-[10px] flex justify-center items-center">
        Don't have an account <a href='/signup' className=" text-blue-500 mx-2">Sign up</a>
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
