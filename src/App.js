import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsScreen from './ContactCard';
import SignIn from './SignIn';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
