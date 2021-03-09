import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsScreen from './ContactCard';
import SignIn from './SignIn';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if(isAuthenticated === true) {
      setTimeout(() => {
        setIsAuthenticated(false)
      }, 300000)
    }
  })
  return (
    <div className="App">
      {
        (!isAuthenticated)
        ?
        <SignIn auth={setIsAuthenticated} />
        :
        <ContactsScreen />
      }
    </div>
  );
}

export default App;
