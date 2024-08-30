import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/Organisms/Navbar/Navbar';
import { NavbarStatus } from './components/Molecules/NavbarStatus/NavbarStatus';
import { SliderTech } from './components/Organisms/SliderTech/SliderTech';
import { Separator } from './components/Atoms/Separator/Separator';

function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <main className='bg-black'> 
        <div className="navbar-fake"></div>

        <div className='container'>
          <NavbarStatus />

          <div className='delete'></div>

          <div className='adapt-to-container'>
            <h2 className='bg-red text-gradient text-h2'>Je suis Denis,<br></br>un développeur web</h2>
            <div className='text-animation'>
              <span className='move-text-to-top text-h2 text-color-text'>Front end</span>
              <span className='move-text-to-top text-h2 text-color-text'>Back end</span>
            </div>
          </div>

          <div className='delete'></div>

          <SliderTech />
          <SliderTech />

          <Separator title='projets'/>

          <div className='projet__item'>
            <div className='flex'>
              <div className='projet__item__icon'></div>
              <div className='projet__item__photo'></div>
            </div>
            <div className='projet__item__title idla'>INVESTIR DANS <br /> L'ANCIEN</div>
            <div className='projet__item__description'><span className='projet__item__description idla'>Site web</span> pour une société faisant de l'investissement locatif</div>
          </div>
        </div>


      </main>
    </div>
  );
}

export default App;
