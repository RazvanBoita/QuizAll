import React from 'react'

const Selecter = ({option, state, setter}) => {

  function handleChange(e){
    setter(e.target.value);
  }  

  return (
    <select className="lg:select lg:select-primary w-full max-w-lg min-w-[20rem] px-4 py-2 cursor-pointer text-white tracking-[2px] font-bold text-xl" value={state} onChange={handleChange}>
        {
            option.map((option, index) => (
                <option key={option}>{option}</option>
            ))
        }
    </select>
  )
}

export default Selecter