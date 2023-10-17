import React, { useState } from 'react'

const AnswerButton = ({option, points, setPoints, idx, correct, handleAnswerClick, trigger, clickedAnswer}) => {


  return (
    <button 
    onClick={()=>handleAnswerClick(option)}
    key={option}
    disabled={trigger}
    className={`btn-ui py-2 flex items-center justify-center text-center min-w-[18rem] rounded-2xl border-2 border-red-100 text-white text-lg font-bold
    ${clickedAnswer==true ? (option===correct ? 'bg-green-500' : 'bg-red-500') : 'bg-transparent'}
    `}>
      {option}
    </button>
  )
}

export default AnswerButton