import {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Logo from "../Navbar/Logo";
import GlowText from "../Reusable/GlowText";
import styles from "./Hero.module.css";

interface HeroSectionProps {}

const HeroSection: FunctionComponent<HeroSectionProps> = () => {
  const [date, setDate] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
  });
  const heroTextRef: MutableRefObject<SVGTextElement> = useRef();
  useEffect(() => {
    if (heroTextRef.current) {
      setInterval(() => {
        setTimeout(() => {
          heroTextRef.current.innerHTML = "Hack";
        }, 0);
        setTimeout(() => {
          heroTextRef.current.innerHTML = "The";
        }, 1000);
        setTimeout(() => {
          heroTextRef.current.innerHTML = "October";
        }, 2000);
      }, 3000);
    }
  }, []);

  useEffect(() => {
    let countDownDate = new Date("October 30, 2022 00:00:00").getTime();
    let x = setInterval(function () {
      let now = new Date().getTime();
      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDate({
        day: days,
        hour: hours,
        minute: minutes,
        second: seconds,
      });
    });
    return () => clearInterval(x);
  }, []);
  return (
    <>
      <div
        className={
          "w-full min-h-screen flex flex-col gap-10 pt-20 " + styles.hero
        }
      >
        <Logo width={300} height={300} />
        <div
          className={
            "flex w-full flex-col justify-center items-center text-7xl md:text-9xl " +
            styles.text
          }
        >
          <text ref={heroTextRef} className={styles.heroText}>
            Hack
          </text>
        </div>
        <div className="font-JetBrains text-center opacity-70 px-5 md:px-56">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic
          distinctio ipsum, voluptatum ut, id veritatis nemo quibusdam
          doloremque assumenda mollitia, necessitatibus magni praesentium?
          Dolore consequatur ea corrupti eaque at vel?
        </div>
        <div className="w-full text-2xl gap-16 flex justify-center items-center">
          <div className="w-10 h-10 flex flex-col justify-center items-center">
            <div className="border-b-4">{date.day}</div>
            <div className="text-base">days</div>
          </div>
          <div className="w-10 h-10 flex flex-col justify-center items-center">
            <div className="border-b-4">{date.hour}</div>
            <div className="text-base">hours</div>
          </div>
          <div className="w-10 h-10 flex flex-col justify-center items-center">
            <div className="border-b-4">{date.minute}</div>
            <div className="text-base">minutes</div>
          </div>
          <div className="w-10 h-10 flex flex-col justify-center items-center">
            <div className="border-b-4">{date.second}</div>
            <div className="text-base">seconds</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
