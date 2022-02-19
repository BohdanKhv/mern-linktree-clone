import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/:id' element={<Dashboard/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </div>
    </Router>
    <ToastContainer />
    </>
  );
}

export default App;
