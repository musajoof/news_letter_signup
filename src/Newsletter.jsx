import React, { useState } from 'react';
import CardImage from '../src/assets/images/illustration-sign-up-desktop.svg';
import IconImage from '../src/assets/images/icon-success.svg'
import IconListImage from '../src/assets/images/icon-list.svg'

import './index.css';

const Newsletter = () => {
  const currentDate = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribe, setSubscribe] = useState(false);
  const [status, setStatus] = React.useState("idel");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };
  const handleResetButton = () => {
    setEmail('');
    setSubscribe(false);
    setStatus('idel');
    setIsButtonDisabled(false);
    setError(null)  // Reset the error
    setIsButtonDisabled(false); // Enable the button after resetting
  };

  return (
    <><div className='max-w-full w-[700px] max-h-screen mx-auto h-screen p-8 flex justify-center items-center'>
      {status === "idel" ? (

        <div className='bg-white p-3 flex rounded-2xl'>
          <div className='w-[310px] h-[430px] border-none p-3 pl-6 pr-6 bg-white rounded-2xl text-slate-800'>
            <h1 className='mt-3 text-center font-bold text-2xl'>Stay updated!</h1>
            <p className=''>Just 60,000+ products receiving monthly updates on:</p>
            <div className='flex gap-x-3 text-xs justify-start items-start mt-6 '>
              <img src={IconListImage} alt="Icon List Image" />
              <span>product delivery and building what matters</span>
            </div>
            <div className='flex text-xs justify-start items-start gap-x-3 mt-4 '>
              <img src={IconListImage} alt="Icon List Image" />
              <span>Measuring to ensure success is a must</span>
            </div>
            <div className='flex text-xs justify-start items-start gap-x-3 mt-4 '>
              <img src={IconListImage} alt="Icon List Image" />
              <span>And much more!</span>
            </div>

            <form className='mt-8' action='#' onSubmit={handleSubmit}>
              <div className=' mt-4'>
                <div className='flex justify-start items-center'>
                  <label className='block  w-[230px]' htmlFor='email'>
                    Email Address
                  </label>
                  {error && <span className="text-red-500 text-xs inline  w-[330px]">{error}</span>}
                </div>
                <input
                  className='border w-full h-10 p-1 rounded-md'
                  type='text'
                  id='email'
                  name='email'
                  placeholder='email@company.com'
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setEmailError(''); // Clear any previous error message
                  } } />
              </div>
              <button
                className='w-full h-10 bg-black text-slate-300 mt-5 rounded-md'
                type='submit'
                value={subscribe}
                onClick={() => {
                  if (!email || !email.includes('@') || !email.includes('.')) {
                    setError('Valid email required.');
                  } else {
                    setStatus(subscribe);
                  }
                } }
              >
                Subscribe to monthly newspaper
              </button>

            </form>
          </div>
          <div className='w-2/4 h-[430px] pl-4 '>
            <img className=' h-[430px] object-cover' src={CardImage} alt='CardImage' />
          </div>
        </div>
      ) : (

        <div className='max-w-full w-full max-h-full h-full bg-gray-600 '>
          <div className=' m-auto w-2/3 h-92 border p-10 bg-white rounded-2xl text-slate-800'>
            <img src={IconImage} alt="IconImage" />
            <h1 className='mt-4 text-3xl font-extrabold'>Thank you for subscribing!</h1>
            <p>A conformation email has been sent to <a className='font-bold' href="/">{email}</a>. please open it and click the button inside to confirm your subscription.</p>
            <button
              className='bg-black w-full h-12 text-white rounded-md mt-10 hover:bg-gradient-to-r from-red-500 to-orange-400 hover:shadow-2xl'
              type='button'
              disabled={isButtonDisabled}
              onClick={handleResetButton}
            >
              Dismiss Message
            </button>
          </div>
        </div>
      )}
    </div>
    <footer className='text-white text-center mb-'>
        <p>&copy; Develop By Musa Joof {currentDate}. All Right Reserved.</p>
    </footer></>

  );
};

export default Newsletter;
