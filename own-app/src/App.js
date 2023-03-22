
import { MathJaxContext } from 'better-react-mathjax';
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Navbar from './Navbar/Navbar';
import Copyright from './Footer/Footer';

function App() {
  return (
    <MathJaxContext>
       <Navbar />
       <AllRoutes/>
       <Copyright />
    </MathJaxContext>
  );
}

export default App;
