import React from 'react'
import IconImage from '../src/assets/images/icon-success.svg'
import  './index.css'

const SubmitCard = () => {
  return (
    <div className='max-w-full w-full max-h-full h-full bg-gray-600 '>
      <div className=' m-auto w-1/4 h-96 border p-10 bg-white rounded-2xl'>
        <img src={IconImage} alt="IconImage" />
        <h1>Thank you for subscribing!</h1>
        <p>A conformation email has been sent to musajoof447@gmail.com. please open it and click the button inside to confirm your subscrintion.</p>
        <button className='bg-black w-full h-12 text-white rounded-md mt-10 '>Dismiss Message</button>
      </div>
    </div>
  )
}

export default SubmitCard
