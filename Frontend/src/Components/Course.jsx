import React from 'react';
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom"

function Course() {
  return (
    <div className=' max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl  md:text-4xl'>Welcome to our Programming <span className="text-green-500">Courses !</span> <span className="text-amber-600">:)</span></h1>
        <p className='mt-12'>Explore our curated collection of coding books, covering topics from web development to algorithms. Whether you’re a beginner or an experienced programmer, our library offers valuable resources to enhance your skills. Dive into HTML, CSS, JavaScript, and more, and stay up-to-date with the latest industry trends. Happy coding!</p>
        <Link to="/">
        <button className='mt-6 bg-blue-400 text-white px-4 py-2 rounded-md hover:bg-lime-600 duration-300'>EXPLORE</button>
        </Link>
      </div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {list.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
        
    </div>
  );
}

export default Course
