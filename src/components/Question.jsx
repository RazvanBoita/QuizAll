import React, { useEffect, useRef, useState } from 'react'
import AnswerButton from './AnswerButton';
const Question = ({code, question, options, correct, points, setPoints, handleAnswerClick, trigger, clickedAnswer}) => {



  return (
    <div>
      {
        code==0 &&
        <div className='flex flex-col gap-4 items-center'>
          <h1 className='text-2xl text-center font-bold text-white'><span className='text-yellow-500'>
            Question</span>: {question}
          </h1>

          {options?.map((option,idx) => (
            <AnswerButton clickedAnswer={clickedAnswer} trigger={trigger} key={idx} handleAnswerClick={handleAnswerClick} option={option} setPoints={setPoints} points={points} idx={idx} correct={correct}></AnswerButton>
          ))}

        </div>
      } 
      {
        code==1 && <h1 className='text-2xl text-center text-white'>Please change the filters, we couldn't find enough questions. 😢</h1>
      }
    </div>
  )
}

export default Question