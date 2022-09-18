import React from 'react';

type props = {
    size:string,
    text:string,
}

const GlowTextNormal:React.FC<props> = ({text,size}) => {
  return (
    <div className={'font-bold font-JetBrains relative text-[#E5E1E6] ease-linear duration-150 cursor-pointer selection:bg-[#b4ff39] selection:text-[#170F1E] '+size}>
        {text}
        <div className='absolute top-0 blur-[3px] text-netural-500 -z-10'>{text}</div>
    </div>
  )
}

export default GlowTextNormal;