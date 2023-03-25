import footer from './assets/pattern-hills.svg';
import star from './assets/bg-stars.svg';
import Timer from './component/Timer';
import { useCountdown } from './component/useCountdown';

function App() {
  const THREE_DAYS_IN_MS = 14 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

  return (
    <>
      <div
        className="h-screen flex flex-col items-center bg-[#1e1f29] py-32 space-y-28"
        style={{ backgroundImage: `url(${star})` }}
      >
        <h1 className="text-white text-xl font-bold capitalize tracking-[0.449em] pt-1">
          WE'RE LAUNCHING SOON
        </h1>

        <div className="flex space-x-2">
          <Timer value={days} name="Day" />
          <Timer value={hours} name="Hour" />
          <Timer value={minutes} name="Minutes" />
          <Timer value={seconds} name="Seconds" />
        </div>
      </div>
      <footer
        className="absolute bg-cover bottom-0 left-0 w-full h-48"
        style={{ backgroundImage: `url(${footer})` }}
      ></footer>
    </>
  );
}

export default App;
