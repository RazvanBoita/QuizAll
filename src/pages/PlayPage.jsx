import React, { useReducer, useState } from 'react'
import CustomButton from '../components/CustomButton'
import OpeningPage from '../components/OpeningPage';
import Playing from './Playing';
const categories = [
  "General Knowledge", "Music", "Films", "Computers", "Mathematics", "Sports", "Geography", "History", "Art", "Animals"
];

const difficulties = [
  "Easy", "Medium", "Hard"
];

const choices = [
  "Multiple Choice" ,"True / False"
]
const PlayPage = () => {

  const [category, setCategory] = useState(categories[0]);
  const [difficulty, setDifficulty] = useState(difficulties[0]);
  const [type, setType] = useState(choices[0]);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => setClicked(true);
  const handleSecondClick = () => setClicked(false);
  return (
    <div className='mt-[20vh] flex flex-col gap-12 items-center text-center px-2'>
        { clicked ? <Playing category={category} difficulty={difficulty} type={type} onClick2={handleSecondClick}></Playing>
          : <OpeningPage onClick={handleClick} type={type} setType={setType} category={category}  setCategory={setCategory} difficulty={difficulty} setDifficulty={setDifficulty}></OpeningPage>
        }
    </div>
  )
}

export default PlayPage