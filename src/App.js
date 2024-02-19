import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setListOfUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="App"> 
      <header className="App-header">
        <h1>User List App</h1> 
      </header>
      <main>
        <h2>List of Users</h2> 
        <ul className="user-list">
          {listOfUsers.map(user => (
            <li key={user.id}>
              <div className="user-details"> 
                <h3>{user.name}</h3> {/* Affichez le nom de l'utilisateur */}
                <p>Email: {user.email}</p> {/* Affichez l'email de l'utilisateur */}
                <p>Phone: {user.phone}</p> {/* Affichez le numéro de téléphone de l'utilisateur */}
              </div>
            </li>
          ))}
        </ul>
      </main>
      <footer className="App-footer">
        <p>Copyright 2024. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

