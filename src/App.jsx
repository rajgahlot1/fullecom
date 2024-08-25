import { useState } from 'react';
import './App.css'
export default function App() {
  const [old,neww]=useState();
  const [item,setitem]=useState([]);
  const [text,settext]=useState(false);
const itemEvents=(evt)=>{
 let newevt=evt.target.value;
  console.log(newevt)
  neww(newevt);
  
}
  const listItem=()=>{
  
     
       setitem((olditem)=>{

            return [...olditem,old]

        })
     
   
    neww(" ");
  }
  function deletitem(id){
    let updatelist=[...item]
    updatelist.splice(id,1);
    setitem(updatelist);
  }
  
  return (
    <>
    <h1>To Do List</h1>
      <input type='text' placeholder='Add Item' value={old} onChange={itemEvents} />
      <button onClick={listItem}>+</button>
      <lo>
        
          {
            item.map((itemval,index)=>{
              console.log(itemval);
              return(
                <div className='ToDoLast'>
                   <button  key={index} id={index} onClick={()=>deletitem(index)}>X</button>
                    <li> {itemval} </li>

                  </div>
              )
            })
          }
        
          </lo>
      
    </>
  )
}
