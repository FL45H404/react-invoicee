
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer'
import Login from './components/Login';
import Protected from './components/Protected';
function App() {
  return (<>
  <Router>
    <Header/>
    <Routes>
      <Route element={<Protected/>}>
      <Route exact path='/' element={<Home/>}/>
      
      </Route>
      <Route path='/login' element={<Login/>}/>
    </Routes>
  
    <Footer />
    </Router>
    </>
  );
}

export default App;
