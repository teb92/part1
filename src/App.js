
import './App.css';
import Mensaje from './mensaje.js'


function App() {
  
  return (
    <div className="App">
      Hola Mundo 
      <Mensaje color='red' message='estamos trabajndo' />
      <Mensaje color='green' message='trabajdno en' />
      <Mensaje color='yellow' message='un curso ' />
    </div>
  );
}

export default App;
