
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Organisms/Navbar/Navbar';
import { StatusBar } from './components/Molecules/StatusBar/StatusBar';

import { Contact } from './components/Pages/Contact/Contact';
import { Footer } from './components/Organisms/Footer/Footer';
import { Home } from './components/Pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Root />,
    errorElement: <h1>Create error page</h1>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'contact', // Chemin relatif
        element: <Contact />
      }
    ]
  }
]);
function Root() {
  return (
    <div>
      <Navbar/>
      
      <main className='bg-black'> 
        <div className="navbar__spacer"></div>

        <div className='container'>
          <StatusBar />
          <Outlet />
        </div>
      </main>

      <footer>
       <Footer />
      </footer>
    </div>
  );
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
