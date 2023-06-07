import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import bcGroundimg from "../assets/background.jpg";

const Main = () => {
  return (
    <div id="main">
      <img className='w-full h-screen object-cover object-left' src={bcGroundimg} />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          
            <h1 className='sm:text-5xl text-4xl font-bold text-white'>I'm Alen</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-white'>
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
                style={{ fontSize: '1em', paddingLeft: '5px' }}
              />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
              <FaTwitter className='cursor-pointer text-cyan-400 hover:text-cyan-600 ' size={30} />
              <FaFacebookF className='cursor-pointer bg-blue-500 pt-1 text-white rounded-full hover:bg-blue-600 ' size={30} />
              <FaInstagram className='cursor-pointer  text-white bg-gradient-to-tr from-pink-500 to-purple-500  rounded-full hover:from-pink-600 hover:to-purple-600' size={30} />
              <FaLinkedinIn className='cursor-pointer text-white bg-blue-700  pt-1 rounded-lg hover:bg-blue-800' size={30} />
            </div>
         
        </div>
      </div>
    </div>
  );
}

export default Main;
