import React from 'react'
import { Link } from 'react-router-dom'
const CustomButton = ({children, linker, onClick}) => {
  return (
    <Link to={linker}>
        <button onClick={onClick} className='animate__animated animate__jello w-fit px-2 py-1 bg-button nice-shadow text-xl rounded-full min-w-[200px]  transition duration-500 ease-out text-white'>{children}</button>
    </Link>
  )
}

export default CustomButton