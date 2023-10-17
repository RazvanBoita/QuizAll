import { useEffect, useState } from 'react'
import WelcomePage from './pages/WelcomePage'
import { Route, Routes } from 'react-router-dom'
import PlayPage from './pages/PlayPage'
import Playing from './pages/Playing'
function App() {

  // useEffect(function(){
  //   async function getData(){
  //     // fetch("https://opentdb.com/api.php?amount=8&category=21&difficulty=medium&type=multiple").then((res)=>res.json()).then((data)=>console.log(data))
  //   }
  //   getData();
  // },[])

  return (
    <>
    <div className='w-full font-young flex justify-center min-h-[100vh]'>
        <Routes>
          <Route path='/' element={<WelcomePage/>}></Route>
          <Route path='play' element={<PlayPage/>}></Route>
          <Route path='play/startgame' element={<Playing />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
