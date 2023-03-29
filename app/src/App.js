//import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import RegistrationForm from './components/registrationForm'

function App() {
  const [backendData, setBackendData] = useState([]);

  const fetchData = async()=>{
  await fetch('/form').then(response => response.json()).then(data => setBackendData(data))
  .catch (error => error.message)

  }

  useEffect(()=>{
    fetchData()
  }, [])

  return (
    <div className="App">
      <Header/>
      <RegistrationForm backendData={backendData} />
    </div>
  );
}

export default App;