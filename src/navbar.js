import './App.css';
import { Header, P} from './style';
import { useNavigate} from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()
  return (
    <Header>

      <P onClick={()=>navigate('/')}>Home</P>
      <P onClick={()=>navigate('/about')}>About</P>
      <P onClick={()=>navigate('/signup')}>Sigh Up</P>
      <P onClick={()=>navigate('/register')}>Register</P>

    </Header>
  );
}

export default Navbar;
