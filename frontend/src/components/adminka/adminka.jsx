import { useDispatch, useSelector } from "react-redux";
import React, {useEffect, useState} from 'react';

function Adminka(){
    useEffect(()=>{
        fetch(`http://localhost:8000/data`).then(res=> res.json()).then((result)=>{
            let res=JSON.parse(result)
        Test (res)
        console.log(res)
        },(error)=>{}
        
        )},[])

    const state = useSelector((state)=>state)
    const dispatch=useDispatch()
    let nameTb=document.querySelector('.name_tb')
    let numberTb=document.querySelector('.number_tb')
    let dateTB=document.querySelector('.date_tb')
    let DFCH=document.querySelectorAll('.date_for_change')
    let testData

    function chanDate() {console.log('date====clicked')}
    console.log(state.list)
    if(state.TBarr){testData=state.TBarr}
    else testData='NODATe'

    // DFCH.forEach(elem=>{elem.onClick=chanDate})
    const Datechange=(e)=>{
        let a=+e.target.dataset.index
        console.log(a)}
    const  Test = (data)=>{
        dispatch({type:"SETTBARR",payload:data})
    }
    const ChangeInput=(e)=>{
        console.log(e.target.value)

    }
    const ConfirmTB = (e)=>{
        
        dispatch({type:"ADDTB",payload:{name:nameTb.value, number:numberTb.value, date:dateTB.value }})
        console.log('state',state.TBarr.length)
    }

    

   
    
    return (

        <div>
            
            <div className="add_tb">
                <span>Введіть назву ТБ</span>
                <br></br>
                <input type="text" className="name_tb" onChange={ChangeInput}/>
                <br></br>
                <span>Введіть номер ТБ</span>
                <br></br>
                <input type="text" onChange={ChangeInput} className="number_tb"/>
                <br></br>
                <input type="date" className="date_tb" />
                <br></br>
                <button onClick={ConfirmTB}>Підтвердити</button>
                <br></br>
                <br></br>
                <div className="listOfTB">
                    {
                        testData.map((value,index)=>{
                            return(
                                <div key={index} >
                                    <span >{index+1}</span><span >{value.num}</span><span >{value.name}</span><span data-index={index} onClick={Datechange} className="date_for_change">{value.date}</span>
                                </div>
                            )
                        })
                    }
                </div>
            
            </div>
        </div>
        
    )

}

export default Adminka