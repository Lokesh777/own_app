
import Sidebar from './Components/sidebar/Sidebar';
import MainPage from './Components/main/Main';
import "./App.css"

function GamePage() {
  return (
    <div >
      <div style={{display:"flex"}} className='containWeb'>
        <div style={{backgroundColor:"#202636"}}>
          <Sidebar />
        </div>
        <div className="main" >
          <MainPage />
        </div>
      </div>
    </div>
  );
}

export default GamePage;
