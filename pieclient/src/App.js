import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);

  return (
    <div className="App">
      <Navbar />
      <p>This is a test of React!</p>
      {sessionToken}
    </div>
  );
}

export default App;
