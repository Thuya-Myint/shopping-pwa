import React, { useState } from 'react'
import { LoginImages, passwordRules } from './constants';
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";

const SignUp = () => {

  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowPassword2, setIsShowPassword2] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const emailRegex = /^[a-zA-Z0–9. _%+-]+@[a-zA-Z0–9. -]+/;
  const phoneRegex = /^\d{8}$/;

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    
    e.preventDefault()

      const validatePassword = (p) => {
        const failMessages = passwordRules
          .filter(rule => !rule.regex.test(password))
          .map(rule => rule.message);

          if(failMessages.length > 0){
            alert(failMessages.join('\n'));
            return false;
          }
          return true
      };

      if(email.trim() === "" || !emailRegex.test(email)){
        return alert("Invalid Email Input!")
      }else if(phoneNumber.trim() === "" || !phoneRegex.test(phoneNumber)){
        return alert("Invalid Phone Number!")
      }else if(password.trim() === ""){
        return alert("Invalid Password!")
      }else if(confirmPassword.trim() === ""){
        return alert("Please confirm your password!")
      }else if(password != confirmPassword){
        return alert("Password did not match!")
      }else if(validatePassword(password)){
      }
    try {
      setIsLoading(true);
      localStorage.setItem("user-data", JSON.stringify({
        email: email,
        phoneNumber: phoneNumber,
        password: password
      }))

      setEmail("");
      setPhoneNumber("");
      setPassword("");

      setTimeout(() => {
        setIsLoading(false)
        navigate("/login")
      }, [3000]);
    } catch (error) {
      console.log("An Error Occurred!", error)
    }
  }

  return (
    <div className='h-screen flex items-center justify-center bg-gradient-to-r from-[#78837b] via-[#c3b1b1] to-[#d4d1d1]'>
      <div className="bg-secondary w-3/5 h-3/4 rounded-3xl grid grid-cols-5">
        <div className='bg-primary rounded-tl-3xl rounded-bl-3xl col-span-3 p-3'>
          <img src={LoginImages[1]} alt="Login Image" className='w-full h-full' />
        </div>
            
        <form 
        onSubmit={(e) => handleSubmit(e)}
        className=' bg-secondary rounded-tr-3xl rounded-br-3xl col-span-2 py-10'>
          <div className='px-7'>
            <div className='flex items-center justify-center pt-2'>
              <h1 className='text-3xl font-bold font-serif selectNone text-txtColor3'>THREADED</h1>
            </div>
              <h1 className='text-center text-2xl font-mono font-bold text-txtColor mt-5 mb-3'>Sign Up Account</h1>
                <div className='grid gap-3 pt-3'>
                  <input 
                    value={email}
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Enter Email Address' 
                    className='outline-none bg-primary rounded-lg h-10 pl-2 inputHover'
                  />
                  <input 
                    value={phoneNumber}
                    type="text"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder='Enter Phone Number' 
                    className='outline-none bg-primary rounded-lg h-10 pl-2 inputHover'
                  />
                  <div className='flex bg-primary rounded-lg h-10 pl-2 inputHover items-center'>
                    <input 
                      value={password}
                      type={isShowPassword? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)} 
                      placeholder='Enter password' 
                      className='outline-none w-[90%]'
                    />
                    {
                      isShowPassword ?
                      <FaEyeSlash className='active:opacity-50' onClick={() => setIsShowPassword(!isShowPassword)} />
                      :
                      <FaEye className='active:opacity-50' onClick={() => setIsShowPassword(!isShowPassword)} />
                    }
                    
                    
                  </div>
                  <div className='flex bg-primary rounded-lg h-10 pl-2 inputHover items-center'>
                    <input 
                      value={confirmPassword}
                      type={isShowPassword2 ? "text" : "password"}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder='Confirm password' 
                      className='outline-none w-[90%]'
                    />
                    {
                      isShowPassword2 ?
                      <FaEyeSlash className='active:opacity-50' onClick={() => setIsShowPassword2(!isShowPassword2)} />
                      :
                      <FaEye className='active:opacity-50' onClick={() => setIsShowPassword2(!isShowPassword2)} />
                    }
                  </div>
              
                </div>
                  
                <div className='grid'>
                  <button 
                    type='submit'
                    className={`mt-7 w-full pt-1.5 pb-1.5 mb-3 text-center font-bold text-txtColor2 bg-primary rounded-lg btnHover ${isLoading ? 'animate-pulse' : ''}`}
                  >
                    {
                      isLoading ?
                      "Loading ..."
                      :
                      "Create Account"
                    }
                  </button>
                  <div className='flex justify-center items-center'>
                    <p className='text-txtColor font-bold'>OR</p>
                  </div>
                    <Link 
                      to="/login" 
                      className={`w-full pt-1.5 pb-1.5 mt-3 text-center font-bold text-txtColor2 bg-primary rounded-lg btnHover`}
                    >
                      {
                        isLoading ?
                        "Loading ..."
                        :
                        "Create Account with Google"
                      }
                    </Link>
                </div>
                <div className='flex justify-center items-center mt-4 gap-3'>
                  <Link to={'/login'} className='text-xs text-txtColor3 txtHover'>Already have an account?</Link>
                  <Link to={'/login'} className='text-xs text-txtColor3 txtHover'>Login</Link>
                </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp