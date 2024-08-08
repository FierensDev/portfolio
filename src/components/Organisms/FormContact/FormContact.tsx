import './FormContact.css'

export function FormContact(){

  function handleForm(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    
  }

  function handleTextAreaHeight(e: React.KeyboardEvent<HTMLTextAreaElement>){
    const target = e.target as HTMLTextAreaElement;
    let scrollHeight = target.scrollHeight;
    console.log(scrollHeight);
    target.style.height = "auto"
    target.style.height = `${scrollHeight}px`;
  };


  return (
    <form onSubmit={handleForm} className=" grid grid-rows-[50px,50px,1fr] gap-3 text-blue-700">
      <input className="bg-transparent text-white placeholder-white border-b-white border-b-2  outline-none" type="text" name="name" id="name" placeholder="Nom"/>
      <input className="bg-transparent text-white placeholder-white border-b-white border-b-2  outline-none" type="email" name="email" id="email" placeholder="Email"/>
      <textarea className="bg-transparent text-white placeholder-white border-b-white border-b-2 min-h-[100px] outline-none" name="message" id="message" placeholder="Message" onKeyUp={handleTextAreaHeight}></textarea>
      
      <div className="parent relative border border-white h-[40px]">
        <div className="bg-white white-bg-bot-to-top"></div>
        <div className='bg-transparent absolute inset-0'>
          <button className="w-full h-full change-text-color">submit</button>
        </div>
      </div>
    </form>
  )
}