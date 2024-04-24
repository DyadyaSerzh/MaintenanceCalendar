import React, {useEffect, useState} from 'react';
import './App.css';
import Adminka from './components/adminka'
import Calendar from './components/Calendar';
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from "react-redux";
import store from "./store";


function App() {
  const Hello='Hello NodeServ'
  const [data, setData] = useState()
  // const state = useSelector((state)=>state)
  // const dispatch=useDispatch()

  useEffect(()=>{
    fetch(`http://localhost:8000/?path=${Hello}`).then(res=> res.json()).then((result)=>{
    
    setData(result.path)
    let tbarr={}
    // dispatch({type:'SETTBARR', payload:tbarr})

    },(error)=>{}
    
    )},[])

    
  return (
    
     <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Calendar/>}/>
          <Route path="Adminka" element={<Adminka/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  
  );
}

export default App;
