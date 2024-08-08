export function LinkSquare(){
  return(
    <div className=' grid grid-cols-[60px,1fr] gap-4'>
      <div className='parentLinkSquare relative border border-white h-[60px] w-full'>
        <div className='white-bg-bot-to-top'></div>
      </div>

      <div className='flex flex-col justify-center'>
        <p>linkedin</p>
        <p>@fierensdenis</p>
      </div>
    </div>
  )
}