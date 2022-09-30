import {
  FunctionComponent,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from 'next/link';
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
    let countDownDate = new Date("October 01, 2022 00:00:00").getTime();
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
  // <p className=" leading-10 text-center font-JetBrains mt-20 text-2xl font-bold md:text-4xl"><a className=" text-5xl bg-gradient-to-r  m-5 from-purple-400  to-pink-300  shadow-custom p-1 rounded-md ">HACK CLUB ITER</a> <br/>in collaboration with <br/><a className=" text-4xl p-1 bg-gradient-to-r m-5 from-teal-400  to-teal-300 rounded-md shadow-custom2">GDSC ITER</a> presents</p>
  return (
    <>
      <div
        className={
          "w-full min-h-screen flex flex-col gap-10 font-JetBrains " + styles.hero
        }
      >
        <div className="mx-auto mt-6">
          <Link href={'https://iter.hackclub.com/'}>
            <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r  my-3 from-purple-400  to-pink-300  shadow-custom p-1 rounded-md font-JetBrains px-4 cursor-pointer">
                Hack Club ITER
            </div>
          </Link>
          <div className="text-base md:text-xl mx-auto text-center text-[#E5E1E6]/90 font-JetBrains">
          in collaboration with
          </div>
          <Link href={'https://gdsc.community.dev/institute-of-technical-education-research-bhubaneswar/'}>
            <div className="w-60 mx-auto text-center text-2xl md:text-4xl font-bold p-1 bg-gradient-to-r my-3 from-teal-400  to-teal-300 rounded-md shadow-custom2 font-JetBrains px-4 cursor-pointer">
                GDSC ITER
            </div>
          </Link>
          <div className="text-base md:text-xl mx-auto text-center text-[#E5E1E6]/90 font-JetBrains uppercase">
          presents
          </div>
        </div>

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

        <div className="mx-auto">
          <Link href={'https://iter.hackclub.com/register'}>
            <div className='text-base md:text-xl px-4 py-1 md:px-8 md:py-2  text-black ease-linear duration-150  cursor-pointer bg-gradient-to-r from-yellow-300  via-teal-300 to-violet-600 font-bold shadow-2xl hover:rotate-2' style={{"clipPath":"polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px)"}}>
              Registration now open
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center font-JetBrains">
            Event starts in
          </p>
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
