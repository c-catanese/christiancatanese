"use client"

import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter(); // Initialize the router

  return (
    <div className="w-full text-black bg-main h-12 flex flex-row justify-between p-5 fixed">
      <button onClick={() => router.push('/')}>
        Home
      </button>
      <button onClick={() => router.push('/about')}>
        About Me
      </button>
      <button onClick={() => router.push('/projects')}>
        Projects
      </button>
      <button onClick={() => router.push('/blog')}>
        Blog
      </button>
    </div>
  );
}