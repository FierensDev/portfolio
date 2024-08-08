import { InputText } from '../../Atoms/InputText/InputText';
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
      <InputText type="text" name="name" placeholder="Nom"/>
      <InputText type="email" name="email" placeholder="Email"/>
      <textarea 
        className="bg-transparent text-white placeholder-gray-500 border-b-white border-b-2  outline-none min-h-[150px]"
        name="message" id="message" placeholder="Message" onKeyUp={handleTextAreaHeight}
      ></textarea>
      
      <div className="parent relative border border-white h-[50px]">
        <div className="bg-white white-bg-bot-to-top"></div>
        <div className='bg-transparent absolute inset-0'>
          <button className="w-full h-full change-text-color">submit</button>
        </div>
      </div>
    </form>
  )
}