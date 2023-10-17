import React from 'react'
import people1 from '../assets/people1.svg'
import Selecter from '../components/Selecter'
import CustomButton from './CustomButton';
const categories = [
    "General Knowledge", "Music", "Films", "Computers", "Mathematics", "Sports", "Geography", "History", "Art", "Animals"
];

const difficulties = [
    "Easy", "Medium", "Hard"
];

const choices = [
    "Multiple Choice" ,"True / False"
]

const OpeningPage = ({category,difficulty,setCategory,setDifficulty,type,setType, onClick}) => {
  return (
        <div className='flex flex-col gap-12'>
            <h1 className='font-weird text-yellow-500 text-6xl'>QuizAll</h1>
            <img src={people1} alt="" className='absolute max-w-[20%] max-md:max-w-[20%] left-0 bottom-0' />
            <img src={people1} alt="" className='absolute max-w-[20%] max-md:max-w-[20%] right-0 bottom-0' />
            <img src={people1} alt="" className='absolute max-w-[20%] max-md:max-w-[20%] right-0 top-0' />
            <img src={people1} alt="" className='absolute max-w-[20%] max-md:max-w-[20%] left-0 top-0' />
            <div className='flex flex-col gap-5'>
                <Selecter option={categories} state={category} setter={setCategory}></Selecter>
                <Selecter option={difficulties} state={difficulty} setter={setDifficulty}></Selecter>
                <Selecter option={choices} state={type} setter={setType}></Selecter>
            </div>
            <CustomButton onClick={onClick}>Play</CustomButton>
        </div>
  )
}

export default OpeningPage