import { Routes,Route } from 'react-router-dom';
import './App.css';
import Cars from './components/Cars';
import Header from './components/Header';
import Info from './components/Info';
import Slide from './components/Slide';
function App() {
  return (
    <div className="App">
      <Header/>
      <Slide/>
     <Cars/>
     <Routes>
       <Route path="/info/:id" element={<Info/>}/>
     </Routes>
    </div>
  );
}

export default App;
