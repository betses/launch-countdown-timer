import footer from './assets/pattern-hills.svg';
import star from './assets/bg-stars.svg';
import Timer from './component/Timer';

function App() {
  return (
    <>
      <div
        className="h-screen flex flex-col items-center bg-[#1e1f29] py-32 space-y-28"
        style={{ backgroundImage: `url(${star})` }}
      >
        <h1 className="text-white text-xl font-bold capitalize tracking-[0.449em] pt-1">
          WE'RE LAUNCHING SOON
        </h1>
        <Timer />
      </div>
      <footer
        className="absolute bg-cover bottom-0 left-0 w-full h-48"
        style={{ backgroundImage: `url(${footer})` }}
      ></footer>
    </>
  );
}

export default App;
