import React, { useEffect, useState, useRef} from 'react'
import CustomButton from '../components/CustomButton'
import Question from '../components/Question';
import Loader from '../components/Loader';
import Finished from '../components/Finished'
import 'animate.css';
let apiType, apiCategory, apiDifficulty;

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const Playing = ({type, category, difficulty, onClick2}) => {
  if(type=="True / False") apiType="boolean";
  else if(type=="Multiple Choice") apiType="multiple";

  apiDifficulty=difficulty.toLowerCase();

  
  if(category=="General Knowledge") apiCategory=9;
  if(category=="Music") apiCategory=12;
  if(category=="Films") apiCategory=11;
  if(category=="Computers") apiCategory=18;
  if(category=="Mathematics")  apiCategory=19;
  if(category=="Sports") apiCategory=21;
  if(category=="Geography") apiCategory=22;
  if(category=="History")  apiCategory=23;
  if(category=="Art")  apiCategory=25;
  if(category=="Animals")  apiCategory=27;
  

  const [questions, setQuestions] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [resCode, setResCode] = useState(0);
  const [finished, setFinished] = useState(false);
  const [points, setPoints] = useState(0);
  const [showEffect, setShowEffect] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [clickedAnswer, setClickedAnswer] = useState(false);
  const shuffledRef = useRef(false);

  useEffect(function(){
    const abortController = new AbortController();
    async function getData(){
      setLoading(true);
      const res = await fetch(`https://opentdb.com/api.php?amount=10&category=${apiCategory}&difficulty=${apiDifficulty}&type=${apiType}`, {signal: abortController.signal});
      const data = await res.json();
      setQuestions(data.results);
      setResCode(data.response_code)
      console.log(data);
      setLoading(false);
    }
    getData();
    return () => {
      abortController.abort();
    };
  },[])

  const triggerEffect = () => {
    setShowEffect(true);
    setTimeout(() => {
      setShowEffect(false);
    }, 1000); // Adjust the duration as needed
  };

  useEffect(() => {
    // Check if the points have increased (you can change this condition as needed)
    if (points > 0) {
      triggerEffect();
    }
  }, [points]);


  const handleNext = () => {
    if(currIndex<questions.length-1){
      setCurrIndex((currIndex)=>currIndex+1);
      setTrigger(false);
      setClickedAnswer(false);
      shuffledRef.current=false;
      if(shuffledRef.current==false){
        shuffle(options);
        shuffledRef.current=true;
      }
      else shuffledRef.current=false;
    }
    else setFinished(true);
    
  }

  const handleAnswerClick = (option) => {
    if(option===questions[currIndex]?.correct_answer && option!=null){
      setPoints((points) => points+10);
      setTrigger(true);
      setClickedAnswer(true);
    } 
    else{
      setTrigger(true);
      setClickedAnswer(true);
    }
  }

 
  let options = [];
  if(apiType=="multiple"){
    if(currIndex%10==1) options = [questions[currIndex]?.incorrect_answers[0], questions[currIndex]?.correct_answer, ,questions[currIndex]?.incorrect_answers[1],questions[currIndex]?.incorrect_answers[2]];
    if(currIndex%10==2) options = [questions[currIndex]?.incorrect_answers[0], ,questions[currIndex]?.incorrect_answers[1],questions[currIndex]?.incorrect_answers[2], questions[currIndex]?.correct_answer];
    if(currIndex%10==3) options = [questions[currIndex]?.incorrect_answers[0], ,questions[currIndex]?.incorrect_answers[1],questions[currIndex]?.correct_answer, questions[currIndex]?.incorrect_answers[2]];
    if(currIndex%10==4) options = [questions[currIndex]?.incorrect_answers[0],questions[currIndex]?.correct_answer ,questions[currIndex]?.incorrect_answers[1],questions[currIndex]?.incorrect_answers[2]];
    if(currIndex%10==5) options = [questions[currIndex]?.incorrect_answers[0], ,questions[currIndex]?.incorrect_answers[1],questions[currIndex]?.correct_answer, questions[currIndex]?.incorrect_answers[2]];
    if(currIndex%10==6) options = [questions[currIndex]?.incorrect_answers[0], ,questions[currIndex]?.incorrect_answers[1],questions[currIndex]?.correct_answer, questions[currIndex]?.incorrect_answers[2]];
    if(currIndex%10==7) options = [questions[currIndex]?.incorrect_answers[0],questions[currIndex]?.correct_answer ,questions[currIndex]?.incorrect_answers[1],questions[currIndex]?.incorrect_answers[2]];
    if(currIndex%10==8) options = [questions[currIndex]?.correct_answer, questions[currIndex]?.incorrect_answers[0], ,questions[currIndex]?.incorrect_answers[1],questions[currIndex]?.incorrect_answers[2]];
    if(currIndex%10==9) options = [questions[currIndex]?.incorrect_answers[0],questions[currIndex]?.correct_answer ,questions[currIndex]?.incorrect_answers[1],questions[currIndex]?.incorrect_answers[2]];
    if(currIndex%10==0) options = [questions[currIndex]?.incorrect_answers[0], ,questions[currIndex]?.incorrect_answers[1],questions[currIndex]?.correct_answer, questions[currIndex]?.incorrect_answers[2]];
  } 
  else if(apiType=="boolean") options = [questions[currIndex]?.correct_answer, questions[currIndex]?.incorrect_answers[0]];
  
  

  return (
    <div className='flex flex-col gap-8 items-center'>
      {
        finished ? <Finished onClick2={onClick2} points={points}></Finished> :
        <>
          {/* <h1>trigger: {trigger}</h1> */}
          <h1 className='font-weird text-yellow-500 text-6xl'>QuizAll</h1>
          {resCode==0 && <p className='text-xl text-yellow-300 font-bold'>Current score: <p className={`text-2xl text-white${showEffect && "animate__animated animate__heartBeat text-green-400"}`}>{points}</p></p>}
          {
            loading ? <Loader/> : <Question clickedAnswer={clickedAnswer} trigger={trigger} handleAnswerClick={handleAnswerClick} options={options} points={points} setPoints={setPoints} correct={questions[currIndex]?.correct_answer} question={questions[currIndex]?.question} code={resCode}></Question>
          }
          {resCode ==0 && <CustomButton onClick={handleNext}>Next</CustomButton>}
          <CustomButton onClick={onClick2}>Reset</CustomButton>
        </>
      }
    </div>
  )
}

export default Playing