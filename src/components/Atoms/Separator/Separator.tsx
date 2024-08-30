import './Separator.css'

interface SeparatorProps {
  title: string
}

export function Separator({title}: SeparatorProps){
  return(
    <div className="separator adapt-to-container">
      <div className="separator__title">{title}</div>
      <div className="separator__line"></div>
    </div>
  )
}