// import styles from "./page.module.scss"

function Admin() {
  return (
    <div className="bg-black w-screen h-screen">
      <main className="h-full flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
        <input
          className="mb-6 p-1.5 rounded-2xl text-black placeholder:text-black focus:outline-none"
          placeholder="Email"
          type="text"
        />
        <input
          className="mb-6 p-1.5 rounded-2xl text-black placeholder:text-black focus:outline-none"
          placeholder="Password"
          type="password"
        />
        <button>Submit</button>
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}

export default Admin