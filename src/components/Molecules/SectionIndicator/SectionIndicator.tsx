import { HorizontalLine } from "../../Atoms/HorizontalLine/HorizontalLine";

export function SectionIndicator({title}: { title: string }){
  return (
    <div className='grid grid-cols-[auto,1fr] place-items-center gap-2'>
      <p className='text-deuns-xs'>{title}</p>
      <HorizontalLine/>
    </div>
  )
}