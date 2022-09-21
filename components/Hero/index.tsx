import {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Logo from "../Navbar/Logo";
import GlowText from "../Reusable/GlowText";
import GlowTextNormal from "../Reusable/GlowTextNormal";
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
       
        <div className="w-full text-2xl gap-12 md:gap-16 flex justify-center items-center">
          <div className="w-10 h-10 flex flex-col justify-center items-center">
            <div className="border-b-2"><GlowTextNormal text={date.day.toString()} size={'text-xl md:text-2xl'}/></div>
            <div className="text-base"><GlowTextNormal text={'Days'} size={'text-base md:text-xl'}/></div>
          </div>
          <div className="w-10 h-10 flex flex-col justify-center items-center">
            <div className="border-b-2"><GlowTextNormal text={date.hour.toString()} size={'text-xl md:text-2xl'}/></div>
            <div className="text-base"><GlowTextNormal text={'Hours'} size={'text-base md:text-xl'}/></div>
          </div>
          <div className="w-10 h-10 flex flex-col justify-center items-center">
            <div className="border-b-2"><GlowTextNormal text={date.minute.toString()} size={'text-xl md:text-2xl'}/></div>
            <div className="text-base"><GlowTextNormal text={'Minutes'} size={'text-base md:text-xl'}/></div>
          </div>
          <div className="w-10 h-10 flex flex-col justify-center items-center">
            <div className="border-b-2"><GlowTextNormal text={date.second.toString()} size={'text-xl md:text-2xl'}/></div>
            <div className="text-base"><GlowTextNormal text={'Seconds'} size={'text-base md:text-xl'}/></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
