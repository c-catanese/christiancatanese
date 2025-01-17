"use client"

export default function Home() {
  let shadow = '';
  for (let i = 0; i < 20; i++) {
    shadow += (shadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 rgb(13 148 136)';
  }

  return (
    <div className="w-full h-full">
      <main className="h-screen bg-cover flex flex-col bg-main items-center justify-center font-[family-name:var(--font-geist-sans)]">
        <div className="relative text-center">
          <h1
            className="font-['now'] text-black text-6xl animate-fadeInOut"
          >
            Christian Catanese
          </h1>
          <div className="inline-block h-fit overflow-hidden whitespace-nowrap w-full animate-widthReveal">
            <h2 className="font-['now'] h-fit py-5 text-black text-3xl animate-slideIn">
              Software Engineer
            </h2>
          </div>
        </div>
      </main>
      <footer></footer>
      {/* Custom animations */}
      <style jsx>{`
        @keyframes fadeInOut {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          0% {
            transform: translateX(-100%);
          }
          20% {
            transform: translateX(-100%);
          }
          35%, 100% {
            transform: translateX(0);
          }
        }

        @keyframes widthReveal {
          0% {
            opacity: 0;
            width: 0;
          }
          20% {
            opacity: 1;
            width: 0;
          }
          30%, 80% {
            width: 100%;
          }
          100% {
            width: 100%;
          }
        }

        .animate-fadeInOut {
          animation: fadeInOut 7s;
        }

        .animate-slideIn {
          animation: slideIn 7s;
        }

        .animate-widthReveal {
          animation: widthReveal 7s;
        }
      `}</style>
    </div>
  );
}
