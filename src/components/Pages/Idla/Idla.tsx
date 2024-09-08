import './Idla.css'
import BgIdla from '../../../assets/bgIdla.jpg'
import LogoIdla from '../../../assets/idlaTabSize.svg'
import { Separator } from '../../Atoms/Separator/Separator'

import IconPrisma from '../../../assets/prisma.svg'
import IconNext from '../../../assets/next.svg'
import IconPostgresql from '../../../assets/postgresql.svg'
import IconTailwind from '../../../assets/tailwind.svg'


export function Idla(){
  return(
    <div className='adapt-to-container'>
      <h2 className="color-idla-gradient text-h2 m-auto text-center">INVESTIR DANS L'ANCIEN</h2>
      <div className='idla__introduction'>
        <p className="text-center m-auto text-h3 text-gradient">
          L'entreprise est spécialisée dans l'investissement locatif
          <br /><br />
          Elle accompagne ses clients dans la recherche de bien immobilier, son achat, sa rénovation, sa gestion, ainsi que la recherche de locataires.
        </p>
        <div className="idla__picture">
          <img src={BgIdla} alt="idla" />
          <div className='idla__picture__logo'>
            <img src={LogoIdla} alt="logo idla" />
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-20'>Challenge</h3>
        <p  className='text-20 text-gradient'>Pouvoir créer une application qui repond aux besoins de ses clients et de l’entreprise</p>
      </div>

      <div className='idla__recap'>
        <div>
          <div className='idla__recap__title-clients'>Besoins des clients</div>
          <div className='text-gradient'>
            <p>-Pouvoir consulter les biens disponible</p>
            <p>-Effectuer des simulations de financements</p>
          </div>
        </div>
        
        <div>
          <div className='idla__recap__title-clients'>besoins de l’entreprise</div>
          <div className='text-gradient idla__recap__subtitle'>
            <p>-Faire signer des mandats de recherche</p>
            <p>-Recevoir moin d’appels telephonique concernants les recherches de biens et les simulations de financements</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className='text-20'>Solution</h3>
        <p  className='text-20 text-gradient'>Créer un site qui regroupera l’ensemble des biens disponible en permetant aux  clients de pouvoir faire une simulation de financement sur chaque bien</p>
      </div>

      <div className='grid-gap-24'>
        <div className="separator-idla adapt-to-container">
          <div className="separator__title-idla">année</div>
          <div className="separator__line-idla"></div>
        </div>
        <p className='color-idla'>2023 . 2024</p>
        <div className="separator-idla adapt-to-container">
          <div className="separator__title-idla">durée</div>
          <div className="separator__line-idla"></div>
        </div>
        <p className='color-idla'>1 an</p>

        <div className="separator-idla adapt-to-container">
          <div className="separator__title-idla">outils</div>
          <div className="separator__line-idla"></div>
        </div>
        <div className='idla__icon-container'>
          <img src={IconPrisma} alt="prisma logo" />
          <img src={IconNext} alt="next icon" />
          <img src={IconPostgresql} alt="postgresql icon" />
          <img src={IconTailwind} alt="tailwind" />
        </div>
      </div>
    </div>
  )
}