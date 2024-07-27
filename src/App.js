
import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication.js';


// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Login from './pages/Login/Login.js';
import Register from "./pages/Register/Register";


// context
import { AuthProvider } from "./context/AuthContext";
import CreatPost from './pages/CreatePost/CreatPost.js';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Post from './Post/Post.js';
import EditPost from './pages/EditPost/EditPost.js';


function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavBar />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/posts/:id' element={<Post/>} />
              <Route
                path="/posts/edit/:id"
                element={user ? <EditPost /> : <Navigate to="/login" />}
              />
              <Route
                path='/login'
                element={!user ? <Login /> : <Navigate to="/" />} />
              <Route
                path='/register'
                element={!user ? <Register /> : <Navigate to="/" />}
              />
              <Route
                path='/posts/create'
                element={user ? <CreatPost /> : <Navigate to="/login" />}
              />
              <Route
                path='/dashboard'
                element={user ? <Dashboard /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
