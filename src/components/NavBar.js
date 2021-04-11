import React from 'react'
import { NavLink } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

export default function NavBar() {
   return (
       <header>
           <div>
               <nav>
                   <NavLink 
                        to='/' 
                        activeClassName='text-black font-bold'
                        exact
                    >
                        Home
                    </NavLink>
                   <NavLink 
                        to='/post'
                        activeClassName='text-black font-bold'
                    >
                        Post
                   </NavLink>
                   <NavLink 
                        to='/about'
                        activeClassName='text-black font-bold'
                   >
                       About
                   </NavLink>
                   <NavLink to='/project'>Project</NavLink>
               </nav>
               <div>
                    <SocialIcon url='https://twitter.com' target='_blank' fgColor='#fff' style={{height: 35, width: 35}}/>
               </div>
           </div>
       </header>
   )
}