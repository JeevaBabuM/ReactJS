import './App.css';
import SideNav from './components/SideNav';
import Home from './components/Home'
import Applications from './components/Applications'
import About from './components/About'
import Dashboard from './components/Dashboard'
import { Routes,Route } from 'react-router';
import Calculator from './components/Applications/Calculator';
import CalcReducer from './components/Applications/CalcReducer';
import Weather from './components/Applications/Weather';

function App() {
  return (
    <>
      <div className="App">
        <SideNav/>
        <div className='main-content'>
          <Routes>
            <Route path='home' element={ <Home /> }/>
            <Route path='applications' element={ <Applications /> }> 
              <Route path='calculator' element={ <Calculator /> }/> 
              <Route path='calcreducer' element={ <CalcReducer /> } />
              <Route path='weather' element={ <Weather /> } />
            </Route>
            <Route path='about' element={ <About /> }/>
            <Route path='dashboard' element={ <Dashboard /> }/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
