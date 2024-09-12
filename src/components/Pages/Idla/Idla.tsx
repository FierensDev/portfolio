import './Idla.css'
import BgIdla from '../../../assets/bgIdla.jpg'
import LogoIdla from '../../../assets/idlaTabSize.svg'
import { Separator } from '../../Atoms/Separator/Separator'

import IconPrisma from '../../../assets/prisma.svg'
import IconNext from '../../../assets/next.svg'
import IconPostgresql from '../../../assets/postgresql.svg'
import IconTailwind from '../../../assets/tailwind.svg'

import IphoneBezel from '../../../assets/Iphone.svg'
import IpadBezel from '../../../assets/ipad.svg'
// import PhoneContent from '../../../assets/phone_content.svg'
import PhoneContent from '../../../assets/Group 8606.svg'
import Desktop from '../../../assets/montageidla.png'
import NextAuth from '../../../assets/nextauth.jpg'
import MapGif from '../../../assets/mapgif.gif'
import BeforeAfterGif from '../../../assets/beforeaftergif.gif'
import AlertIdla from '../../../assets/alertidla.png'

export function Idla(){
  return(
    <div className='adapt-to-container'>
      <h2 className="color-idla-gradient text-h2 m-auto text-center">INVESTIR DANS L'ANCIEN</h2>
      <div className='idla__introduction'>
        <p className="text-center m-auto text-h3 text-gradient lh-15">
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

      <div className='mt-80 grid-gap-16'>
        <h3 className='text-20 color-idla'>Challenge</h3>
        <p  className='text-20 text-gradient lh-15 font-weight-700'>Pouvoir créer une application qui repond aux besoins de ses clients et de l’entreprise</p>
      </div>

      <div className='idla__recap'>
        <div>
          <div className='idla__recap__title-clients '>Besoins des clients</div>
          <div className='text-gradient lh-15'>
            <p>-Pouvoir consulter les biens disponible</p>
            <p>-Effectuer des simulations de financements</p>
          </div>
        </div>
        
        <div>
          <div className='idla__recap__title-clients '>besoins de l’entreprise</div>
          <div className='text-gradient idla__recap__subtitle lh-15'>
            <p>-Faire signer des mandats de recherche</p>
            <p>-Recevoir moin d’appels telephonique concernants les recherches de biens et les simulations de financements</p>
          </div>
        </div>
      </div>

      <div className='idla__soluce '>
        <div className='mt-80 grid-gap-16 '>
          <h3 className='text-20 color-idla'>Solution</h3>
          <p  className='text-16-20 text-gradient lh-15'>Créer un site qui regroupera l’ensemble des biens disponible en permetant aux  clients de pouvoir faire une simulation de financement sur chaque bien</p>
        </div>

        <div className='grid-gap-8 mb-40'>
          <div className="separator-idla adapt-to-container">
            <div className="separator__title-idla">année</div>
            <div className="separator__line-idla"></div>
          </div>
          <p className='color-idla text-20'>2023 . 2024</p>
          <div className="separator-idla adapt-to-container">
            <div className="separator__title-idla">durée</div>
            <div className="separator__line-idla"></div>
          </div>
          <p className='color-idla text-20'>1 an</p>

          <div className="separator-idla adapt-to-container">
            <div className="separator__title-idla">outils</div>
            <div className="separator__line-idla"></div>
          </div>
          <div className='idla__icon-container '>
            <img src={IconPrisma} alt="prisma logo" />
            <img src={IconNext} alt="next icon" />
            <img src={IconPostgresql} alt="postgresql icon" />
            <img src={IconTailwind} alt="tailwind" />
          </div>
        </div>
      </div>

      <Separator title='maquette' id='maquette'/>

      <div className='idla-mockup'>
        <h3 className='text-20 text-center text-gradient m-auto font-weight-700 lh-15 my-40'>création d’un parcours client et d’un design responsive</h3>

        <div className='idla-mockup-grid mb-80'>
          <div className='idla-mockup-grid__phone'>
            <img className='iphone' src={IphoneBezel} alt="iphone" />
            
            <img className='ipad' src={IpadBezel} alt="iphone" />
            <div className='desktop'  >
              <img src={Desktop} alt="" />
            </div>
            {/* <img className='iphone_content' src={PhoneContent} alt="" /> */}
          </div>
          {/* <div className='idla-mockup-grid__tablet'></div> */}
          {/* <div className='idla-mockup-grid__desktop'></div> */}
        </div>
      </div>


      <div className='idla__security'>
        <Separator title='sécurité' id='security'/>
        <img src={NextAuth} alt="next auth icon" />
        <p className='text-gradient text-center text-16-20 m-auto font-weight-700 lh-15'>Authentification avec
          NextAuth, incluant 
          la double
          authentification par
          email et SMS, ainsi que 
          la sécurisation des pages 
          et des fonctionnalités
          sensibles
        </p>
      </div>

      <Separator title='autre' id='other'/>
      <div className='idla__other'>
        <p className='text-gradient text-center m-auto text-20 font-weight-700 lh-15'>Ajout d’elements intéractifs tel qu’une carte intéractive, d’animations, de filtres, scroll infini intégration d’api externe, affichage des erreurs, achat d’un nom de domaine et déploiement via Vercel </p>

        <div className='idla__other__grid'>
          <img src={MapGif} alt="" />
          <img src={BeforeAfterGif} alt="" />
          <img src={AlertIdla} alt="" />
        </div>
      </div>
    </div>
  )
}