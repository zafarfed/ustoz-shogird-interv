import './App.css';
import { Header, P} from './style';
import {Routes, Route, useNavigate} from 'react-router-dom'

function App() {

  const navigate = useNavigate()
  return (
    <div className='App'>

    <Header>

      <P onClick={()=>navigate('/')}>Home</P>
      <P onClick={()=>navigate('/about')}>About</P>
      <P onClick={()=>navigate('/signup')}>Sigh Up</P>
      <P onClick={()=>navigate('/register')}>Register</P>


                
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
