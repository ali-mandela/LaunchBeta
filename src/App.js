import './App.css';
import React,  {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import SubscriberPage from './Pages/SubscriberPage';
import ThankYouPage from './Pages/ThankYouPage'; 
import { responseData } from './Context/dataContext'  
import AlreadyRegistered from './Pages/AlreadyRegistered';

 function App() {
  const [ resDataEmail,  setResDataEmail]= useState();
  const [ resDataRef,  setResDataRef]= useState();
return (<>
  <responseData.Provider value={ {resDataEmail, resDataRef,setResDataRef ,setResDataEmail}}> 
    <Routes>
          <Route path='/' element={<SubscriberPage/>}/> 
          <Route path='/launch/:id' exact element={<SubscriberPage/>}/> 
          <Route path='/thankYou/:id' element={<ThankYouPage/>} /> 
          <Route path='/alreadyregistered/:id' element={<AlreadyRegistered/>} /> 
            
              </Routes>
  </responseData.Provider>
  </>
  );
} 

export default App;
