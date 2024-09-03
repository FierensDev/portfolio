import './Separator.css'

interface SeparatorProps {
  title: string,
  id:string
}

export function Separator({title, id}: SeparatorProps){
  return(
    <div className="separator adapt-to-container" id={id}>
      <div className="separator__title">{title}</div>
      <div className="separator__line"></div>
    </div>
  )
}