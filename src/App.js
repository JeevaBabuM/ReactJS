import './App.css';
import SideNav from './components/SideNav';
import Home from './components/Home'
import Applications from './components/Applications'
import About from './components/About'
import Dashboard from './components/Dashboard'
import { Routes,Route } from 'react-router';
import Calculator from './components/Applications/Calculator';

function App() {
  return (
    <>
      <div className="App">
        <Calculator />
        {/* <SideNav/>
        <div className='main-content'>
          <Routes>
            <Route path='/Home' element={ <Home /> }/>
            <Route path='/Applications' element={ <Applications /> }/>
            <Route path='/About' element={ <About /> }/>
            <Route path='/Dashboard' element={ <Dashboard /> }/>
          </Routes>
        </div> */}
      </div>
    </>
  );
}

export default App;
