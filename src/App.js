
import './App.css';
import Register from './components/Register.js';
import Getd from './components/Getd.js';
import Dele from './components/Delete.js';



//const URL="http://localhost:3000";
function App() {
  

  return (
    <div className="Main">
      <h1 className="Heading">Your personalised Book Store!!!</h1>

      <div className="Container">
          <Register/>
          <Getd/>
          <Dele/>
     
      </div>
      
    </div>
  );
}


export default App;
