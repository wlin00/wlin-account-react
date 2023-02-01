import * as React from 'react'
import { NavLink } from 'react-router-dom';

export const Welcome3: React.FC = () => {
  return (
    <>
      <div flex> 
        <header w-300px b-1 b-red h-100px>header</header>
        <main flex-grow b-1 b-blue h-100px>main</main>
        <footer flex-grow b-1 b-black h-100px>footer</footer>
      </div>
      <div b-1 b-red m-t-100px flex justify-center items-center>
        <NavLink to="/welcome/4">下一页</NavLink>
      </div>
    </>
  )
}