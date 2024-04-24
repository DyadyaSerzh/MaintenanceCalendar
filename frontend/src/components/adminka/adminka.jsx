import { useDispatch, useSelector } from "react-redux";
import React, {useEffect, useState} from 'react';

function Adminka(){
    const state = useSelector((state)=>state)
    const dispatch=useDispatch()
    let nameTb=document.querySelector('.name_tb')
    let numberTb=document.querySelector('.number_tb')
    let testData
    console.log(state.list)
    if(state.list){testData=state.list}
    else testData='NODATe'
    const  Test = ()=>{
        dispatch({type:"ADDITEM",payload:"TEST"})
    }
    const ChangeInput=(e)=>{
        console.log(e.target.value)

    }
    const ConfirmTB = (e)=>{
        
        dispatch({type:"ADDTB",payload:{name:nameTb.value, number:numberTb.value}})
        console.log('state',state.TBarr.length)
    }

    

    useEffect(()=>{
        fetch(`http://localhost:8000/data`).then(res=> res.json()).then((result)=>{
        
        console.log(result)
        


    
        },(error)=>{}
        
        )},[])
    
    return (

        <div>
            Hello
            <button onClick={Test}>TEST</button>
            <div>{testData}</div>
            <div className="add_tb">
                <span>Введіть назву ТБ</span>
                <br></br>
                <input type="text" className="name_tb" onChange={ChangeInput}/>
                <span>Введіть номер ТБ</span>
                <br></br>
                <input type="text" onChange={ChangeInput} className="number_tb"/>
                <br></br>
                <button onClick={ConfirmTB}>Підтвердити</button>
                <br></br>
                <br></br>
            
            </div>
        </div>
        
    )

}

export default Adminka