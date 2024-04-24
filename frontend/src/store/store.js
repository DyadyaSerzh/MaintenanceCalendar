import {createStore} from "redux"

const reduser =(state={list:"",testblockList:{},TBarr:[]}, action)=>{
    
    switch (action.type){
        case "SETTBARR":
            state.tbarr=action.payload
            
            return {...state}
        case "ADDITEM":
            let Item
            state.list=action.payload
            return {...state}
        case "ADDTB":
            let tb={}
            tb.name=action.payload.name
            tb.num=action.payload.number
            state.TBarr[state.TBarr.length]=tb
            let ArrayTB=JSON.stringify(state.TBarr)
            
            fetch(`http://localhost:8000/writedata/?path=${ArrayTB}`).then(res=> res.json()).then((result)=>{
    
    
        },(error)=>{}
        
        )
            return {...state}
        default:
            {return {...state}}
    }
}
const store = createStore(reduser)
export default store