export default function Home() {
  let shadow = '';
  for (let i = 0; i < 20; i++) {
    shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 rgb(13 148 136)';
  }

  // const projects = {
  //   url: 'test'
  // }


  return (
    <div className="">
      <main className="h-screen bg-cover flex flex-col bg-main items-center justify-center font-[family-name:var(--font-geist-sans)]">
        {/* <h1 className="relative text-teal-200 font-bold text-5xl" style={{ transform: "rotate(-20deg) skew(28deg)", textShadow: shadow  }}>Christian Catanese,<br/>Software Engineer</h1> */}
        <div>
            <h1  className="font-['now'] text-black text-8xl" >Christian Catanese</h1>
        </div>
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
