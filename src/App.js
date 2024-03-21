import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Board from './components/Board';
import Header from './components/Header';

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const handleRegister = (username, password) => {
    const newUser = { username, password };
    setUsers([...users, newUser]);
    setCurrentUser(newUser); 
  };

  const handleLogin = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      setCurrentUser(user);
    } else {
      alert('Nieprawidłowe dane');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Router>
      <div>
        <Header />
        {currentUser && (
          <div>
            <p>Witaj, {currentUser.username}!</p>
            <button onClick={handleLogout}>Wyloguj</button>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Navigate replace to="/game" />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/game" element={<Board />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;