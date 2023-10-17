import React from 'react'
import CustomButton from './CustomButton'
const Finished = ({points, onClick2}) => {
  return (
    <div className='flex flex-col gap-12'>
      <h1 className='text-white text-4xl'>Congratulations! 🎉</h1>
      <p className='text-white text-3xl'>You finished the quiz with <span className='text-yellow-500 font-bold'>{points}</span> points out of <span className='text-red-500 font-bold'>100</span>!</p>
      <CustomButton onClick={onClick2}>Try again?</CustomButton>
    </div>
  )
}

export default Finished