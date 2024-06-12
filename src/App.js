
import Particles from '@tsparticles/react';
import './App.css';
import Body from './Components/Body';
import ParticlesComponent from './Components/Particles';


function App() {
  return (
    <div className='w-100vw bg-[#020E1B]'>
      <ParticlesComponent/>
      <Body/>
      
    </div>
  );
}

export default App;
