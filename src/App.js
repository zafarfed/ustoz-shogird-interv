import './App.css';
import { Header, P} from './style';
import {Routes, Route, useNavigate} from 'react-router-dom'
import axios from 'axios';
import { useEffect, useRef} from 'react';

function App() {
  const audio = new Audio('/retro-notification.mp3')
  const navigate = useNavigate()
  const bg = useRef()
  console.log(audio);

  useEffect( () =>{
    async function getStatus(){
      const backgrounds = await axios.get('https://54.uz/rang.php')
      alert('status rangi : '+ backgrounds.data.status);

      switch (backgrounds.data.status) {
        case 'qizil' : return bg.current.style.background = 'red'
         break;
         case 'sariq' : return bg.current.style.background = 'yellow'
         break;

         case 'oq' : return bg.current.style.background = 'white'
         break;

         case 'qora' : return bg.current.style.background = 'black'
         break;

         case 'yaxshil' : return bg.current.style.background = 'green'
         break;

         case "ko'k" : return bg.current.style.background = 'blue'
         break;

        default : return bg.current.style.background = 'green'
          break;
      }
    } 
    getStatus()
  },[])


  function Home(){
    audio.play()
    navigate('/')
  }

  function About(){
    audio.play()
    navigate('/about')
  }

  function Signup(){
    audio.play()
    navigate('/signup')
  }

  function Register(){
    audio.play()
    navigate('/register')
  }
  return (
    <div className='App'>

       <Header ref={bg}>

            <P onClick={Home}>Home</P>
            <P onClick={About}>About</P>
            <P onClick={Signup}>Sign Up</P>
            <P onClick={Register}>Register</P>

       </Header>

        <Routes>
            <Route path='/' element={'Home'}/>
            <Route path='/signup' element={'Signup'}/>
            <Route path='/about' element={'About'}/>
            <Route path='/register' element={'Register'}/>
            <Route path='*' element={'404 Not found'}/>
        </Routes> 

    </div>
  );
}

export default App;
