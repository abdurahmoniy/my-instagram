import { useContext, useState } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import MainScreen from './components/Main/MainScreen';
import { GlobalContext } from './state/context/GlobalContext';

function App() {
  const {isAuthenticated, isOnboarded} = useContext(GlobalContext)

  return (
    // isAuthenticated && isOnboarded ? <MainScreen /> : <Auth />
    <>
    <MainScreen/>
    </>
  );
}

export default App;
