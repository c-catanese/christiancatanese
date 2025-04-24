"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // if using App Router


function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      console.log('error')
    }
  };


  return (
    <div className="bg-black w-screen h-screen">
      <main className="h-full flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
        <input
          className="mb-6 p-1.5 rounded-2xl text-black placeholder:text-black focus:outline-none"
          placeholder="Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="mb-6 p-1.5 rounded-2xl text-black placeholder:text-black focus:outline-none"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit} className="bg-white text-black px-4 py-2 rounded-2xl">
          Submit
        </button>
      </main>
      <footer></footer>
    </div>
  );
}

export default Admin;
