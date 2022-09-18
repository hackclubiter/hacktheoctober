import React from 'react';

type props = {
    size:string,
    text:string,
}

const GlowText:React.FC<props> = ({text,size}) => {
  return (
    <div className={'font-JetBrains relative text-[#E5E1E6]/60 hover:text-[#E5E1E6] group ease-linear duration-150 cursor-pointer selection:bg-[#b4ff39] selection:text-[#170F1E] '+size}>
        {text}
        <div className='absolute top-0 group-hover:blur-[3px] text-netural-500 -z-10'>{text}</div>
    </div>
  )
}

export default GlowText