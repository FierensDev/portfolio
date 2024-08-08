export function InputText({name, placeholder, type}: {name: string, placeholder:string, type:string}){
  return (
    <input 
      type={type} 
      name={name} 
      id={name} 
      placeholder={placeholder}
      className="bg-transparent text-white placeholder-gray-500 border-b-white border-b-2  outline-none" 
    />
  )
}