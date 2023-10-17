import React from 'react'
import CustomButton from '../components/CustomButton'
const WelcomePage = () => {
  return (
    <div className='flex flex-col items-center px-2 gap-12 text-white mt-[30vh] text-center'>
        <h1 className='text-5xl tracking-[4px] animate__animated animate__backInRight'>WELCOME to <span className='font-weird text-yellow-500 text-6xl'>QuizAll!</span></h1>
        <p className='text-2xl text-yellow-500'>Are you ready to take on new challenges? Become the master of any domain out there?</p>
        <CustomButton linker='play'>Let's GO!</CustomButton>
    </div>
  )
}

export default WelcomePage