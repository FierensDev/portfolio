import { ArrowLink } from "../../Atoms/ArrowLink/ArrowLink";

export function ButtonAnimated(){
  return (
    <div className='m-auto relative flex place-items-center justify-center w-fit p-[2px] border-container'>
    <div className='bg-white w-[50%] h-full absolute border-to-right'></div>
    <div className='bg-black flex relative p-4'>
      <p className='text-custom-gray text-deuns-xs font-light'>A propos de moi</p>
      <ArrowLink />
    </div>
  </div>
  )
}