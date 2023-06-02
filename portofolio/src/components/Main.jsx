import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id="main">
        <img className='w-full h-screen object-cover object-left ' src='https://i.imgur.com/OEpPsEd.jpg'></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
          <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
         <div>
            <h1>I'm Alen</h1>
            <h2>
              I'm a
            <TypeAnimation
      sequence={[
        'Developer', // Types 'One'
        2000, // Waits 2s
        'Coder', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Tech Enthusiast', // Types 'Three' without deleting 'Two'
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft:'5px' }}
    />
            </h2>
           <div>
            <FaTwitter className='cursor-pointer' size={20}/>
            <FaFacebookF className='cursor-pointer' size={20}/>
            <FaInstagram className='cursor-pointer' size={20}/>
            <FaLinkedinIn className='cursor-pointer' size={20}/>
            </div>
            </div> 
         </div>   
        </div>
    </div>
  )
}

export default Main