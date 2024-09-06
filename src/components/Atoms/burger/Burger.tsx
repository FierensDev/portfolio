import './Burger.css'

interface BurgerProps {
  handleDisplayNavbar: () => void;
  displayNavbar: boolean;
}

export function Burger({ handleDisplayNavbar, displayNavbar} : BurgerProps){
  return(
    <div>
       <svg 
          onClick={() => {
            handleDisplayNavbar()
          }}
          width="17.4" height="14.6" viewBox="0 0 11 11" fill="none"  className="color-subtitle onhover-color-white" xmlns="http://www.w3.org/2000/svg"
          >
          <line className={displayNavbar ? `anime-top-line` : `anime-top-line-reverse` } y1="0.5" x2="11" y2="0.5" stroke="currentColor" strokeWidth={2} />
          <line className={displayNavbar ? `anime-bottom-line` : `anime-bottom-line-reverse` } y1="8.5" x2="11" y2="8.5" stroke="currentColor" strokeWidth={2} />
        </svg>
    </div>
  )
}