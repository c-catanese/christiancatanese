"use client";

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter(); // Initialize the router
 //h-fit px-5 border-x-2 border-black border-solid
  return (
    <div className="w-full text-black bg-main h-12 flex flex-row justify-evenly p-5 fixed z-10 md:p-6 sm:h-16">
      <button onClick={() => router.push('/')} className="	transition-all hover:text-gray-700 text-sm md:text-lg ">
        Home
      </button>
      <button onClick={() => router.push('/about')} className=" transition-all hover:text-gray-700 text-sm md:text-lg">
        About
      </button>
      <button onClick={() => router.push('/about')} className= " transition-all hover:text-gray-700 text-sm md:text-lg">
        Projects
      </button>
      <button onClick={() => router.push('/about')} className="  transition-all hover:text-gray-700 text-sm md:text-lg">
        Blog
      </button>
    </div>
  );
}
