import footer from './assets/pattern-hills.svg';
import star from './assets/bg-stars.svg';
import Timer from './component/Timer';
import { useCountdown } from './component/useCountdown';
import facebook from './assets/icon-facebook.svg';
import instagram from './assets/icon-instagram.svg';
import pintrest from './assets/icon-pinterest.svg';

function App() {
  const THREE_DAYS_IN_MS = 14 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [days, hours, minutes, seconds] = useCountdown(dateTimeAfterThreeDays);

  return (
    <>
      <div
        className="h-screen flex flex-col items-center bg-[#1e1f29] py-[12.4rem] space-y-28"
        style={{ backgroundImage: `url(${star})` }}
      >
        <h1 className="text-white text-sm md:text-xl font-bold capitalize tracking-[0.449em] pt-1">
          WE&apos;RE LAUNCHING SOON
        </h1>

        <div className="flex space-x-2 md:space-x-7">
          <Timer value={days} name="Days" />
          <Timer value={hours} name="Hours" />
          <Timer value={minutes} name="Minutes" />
          <Timer value={seconds} name="Seconds" />
        </div>
      </div>
      <footer
        className="absolute bg-cover bottom-0 left-0 w-full h-48"
        style={{ backgroundImage: `url(${footer})` }}
      >
        <div className="w-full flex justify-center space-x-3 pt-24">
          <a href="https://www.facebook.com" alt="facebook">
            <img className="" src={facebook} alt="facebook SVG" />
          </a>
          <a href="https://www.instagram.com/" alt="instagram">
            <img className="" src={instagram} alt="Instagram SVG" />
          </a>
          <a href="https://www.pinterest.com/" alt="pintrest">
            <img className="" src={pintrest} alt="Pintrest SVG" />
          </a>
        </div>
      </footer>
    </>
  );
}

export default App;
