export function GifCard(){
  return (
    <div className='card-glass-effect border-container box-border p-[15px]'>
      <div className='w-full h-[110px] rounded-lg bg-blue-700'></div>
     
      <div className='grid grid-cols-[1fr,20%]'>
        <p className='text-white font-bold text-deuns-xs text-left break-words whitespace-normal'>Investir dans l'ancien</p>
        <div className='text-custom-gray arrow-disapear flex place-items-center justify-end'>
          <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

