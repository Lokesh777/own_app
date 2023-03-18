
import { MathJaxContext } from 'better-react-mathjax';
import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <MathJaxContext>
       <Navbar />
       <AllRoutes/>
    </MathJaxContext>
  );
}

export default App;
