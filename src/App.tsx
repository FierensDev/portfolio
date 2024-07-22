import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Weather } from './components/Weather/Weather';
import { ProjectCard } from './components/ProjectCard/ProjectCard';


function App() {

  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [currentTime, setCurrentTime] = useState<string>(currentDate.toLocaleTimeString())

  const handleChangeTime = () => {
    const resetDate = new Date();
    setCurrentTime(resetDate.toLocaleTimeString());
  };

  useEffect(()=>{ 
    const timer = setInterval(() => {
      handleChangeTime();
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, [])
  
  return (
    <div className="App bg-black text-custom-gray">   
      {/* background */}
      {/* <div className='absolute inset-0 bg-black px-[24px] flex place-content-between'>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[100%] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[100%] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[100%] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[100%] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[100%] w-[1px]'></div>
      </div> */}

      {/* content  */}
      <div className='px-[24px] '> 
        <div className='h-[59px]'></div>

        <div className='flex justify-between place-items-center'>
            <div>
              <p className='text-custom-gray text-deuns-xs'>Hey, bienvenue ! </p>
            </div>
            <div className='flex place-items-center'>
              <div className='bg-green-500 h-[7px] w-[7px] rounded-full opacity-100-to-0'></div>
              <p className='text-custom-gray px-2 text-deuns-xs'>Paris</p>
              <p className='text-custom-gray px-2 text-deuns-xs'>{currentTime}</p>
              <Weather />
            </div>
        </div>

        <div className='h-[100px]'></div>

        <div className='text-deuns-l md:text-deuns-xl text-left '>
          {/* <div className='bg-gradient-to-r from-gradient-black-71 absolute inset-0'></div> */}
          <p className='gradient-black-70 w-fit'>Je suis Denis,</p>
          <p className='gradient-black-70 w-fit'>un développeur web</p>
          <div className='overflow-hidden h-[59px]'>
            <p className='move-text-to-top font-semibold text-white'>Front end</p>
            <p className='move-text-to-top font-semibold text-white'>Back end</p>
          </div>
        </div>

        <div className='h-[100px]'></div>

        <div className=''>
          <div className='h-[calc(100vh)] sticky top-[75px]'>
            <ProjectCard background="bg-blue-500"/>
          </div>
          <div className='h-[calc(100vh)] sticky top-[75px]'>
            <ProjectCard background="bg-green-500"/>
          </div>
          <div className='h-[calc(100vh)] sticky top-[75px]'>
            <ProjectCard background="bg-red-500"/>
          </div>
        </div>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ratione modi enim numquam. Culpa, provident. Eveniet error sequi neque sunt enim iste perferendis quaerat, nesciunt consectetur nulla repellat laudantium voluptate?
          Voluptatibus id quam odio delectus repellendus. Ad qui accusantium atque ipsum optio rerum assumenda magni, quae porro iure eum omnis necessitatibus nisi deserunt earum sit voluptatem soluta error, explicabo impedit.
          Laborum praesentium nobis soluta facere necessitatibus? Nostrum mollitia ipsam amet, quo, harum assumenda itaque porro quia cupiditate aspernatur quae doloremque iure cumque praesentium? Natus iste quibusdam praesentium accusamus repellendus laborum.
          Quo similique minima dolor blanditiis nam obcaecati eos, beatae et eligendi voluptatum accusantium quia quos saepe ex officiis perspiciatis, error repellat, vitae qu quam odio delectus repellendus. Ad qui accusantium atque ipsum optio rerum assumenda magni, quae porro iure eum omnis necessitatibus nisi deserunt earum sit voluptatem soluta error, explicabo impedit.
          Laborum praesentium nobis soluta facere necessitatibus? Nostrum mollitia ipsam amet, quo, harum assumenda itaque porro quia cupiditate aspernatur quae doloremque iure cumque praesentium? Natus iste quibusdam praesentium accusamus repellendus laborum.
          Quo similique minima dolor blanditiis nam obcaecati eos, beatae et eligendi voluptatum accusantium q quam odio delectus repellendus. Ad qui accusantium atque ipsum optio rerum assumenda magni, quae porro iure eum omnis necessitatibus nisi deserunt earum sit voluptatem soluta error, explicabo impedit.
          Laborum praesentium nobis soluta facere necessitatibus? Nostrum mollitia ipsam amet, quo, harum assumenda itaque porro quia cupiditate aspernatur quae doloremque iure cumque praesentium? Natus iste quibusdam praesentium accusamus repellendus laborum.
          Quo similique minima dolor blanditiis nam obcaecati eos, beatae et eligendi voluptatum accusantium quia quos saepe ex officiis perspiciatis, error repellat, vitae qu quam odio delectus repellendus. Ad qui accusantium atque ipsum optio rerum assumenda magni, quae porro iure eum omnis necessitatibus nisi deserunt earum sit voluptatem soluta error, explicabo impedit.
          Laborum praesentium nobis soluta facere necessitatibus? Nostrum mollitia ipsam amet, quo, harum assumenda itaque porro quia cupiditate aspernatur quae doloremque iure cumque praesentium? Natus iste quibusdam praesentium accusamus repellendus laborum.
          Quo similique minima dolor blanditiis nam obcaecati eos, beatae et eligendi voluptatum accusantium quia quos saepe ex officiis perspiciatis, error repellat, vitae qu quam odio delectus repellendus. Ad qui accusantium atque ipsum optio rerum assumenda magni, quae porro iure eum omnis necessitatibus nisi deserunt earum sit voluptatem soluta error, explicabo impedit.
          Laborum praesentium nobis soluta facere necessitatibus? Nostrum mollitia ipsam amet, quo, harum assumenda itaque porro quia cupiditate aspernatur quae doloremque iure cumque praesentium? Natus iste quibusdam praesentium accusamus repellendus laborum.
          Quo similique minima dolor blanditiis nam obcaecati eos, beatae et eligendi voluptatum accusantium quia quos saepe ex officiis perspiciatis, error repellat, vitae quuia quos saepe ex officiis perspiciatis, error repellat, vitae qu quam odio delectus repellendus. Ad qui accusantium atque ipsum optio rerum assumenda magni, quae porro iure eum omnis necessitatibus nisi deserunt earum sit voluptatem soluta error, explicabo impedit.
          Laborum praesentium nobis soluta facere necessitatibus? Nostrum mollitia ipsam amet, quo, harum assumenda itaque porro quia cupiditate aspernatur quae doloremque iure cumque praesentium? Natus iste quibusdam praesentium accusamus repellendus laborum.
          Quo similique minima dolor blanditiis nam obcaecati eos, beatae et eligendi voluptatum accusantium quia quos saepe ex officiis perspiciatis, error repellat, vitae quidem sed? Ipsa assumenda distinctio libero quis mollitia?
          Dolorum voluptas maxime rem culpa tenetur officia dolores, rerum doloribus, delectus debitis nihil obcaecati nemo optio quis reiciendis? Consequatur sed nisi sapiente, doloribus illo sint quia blanditiis tempora ipsum! Omnis?</p>

        <Navbar />
      </div>
    </div>
  );
}

export default App;
