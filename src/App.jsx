
import { useState } from 'react'
import './App.css'
import { FcEditImage } from "react-icons/fc";
import { IoMdAdd } from "react-icons/io";
import { RiEdit2Line } from "react-icons/ri";
import { MdOutlineDelete } from "react-icons/md";
function App() {
  const[todos,setTodos]=useState([{id:1,todo:"go to gym",checked:false},{id:2,todo:"project",checked:false},{id:3,todo:"Library",checked:false}]);
  const[isedit,setisedit]=useState(false);
  const[name,setName]=useState("");
   const[editobj,seteditobj]=useState(null);
  const addOrEdit=()=>{
  if(isedit){
    setTodos(todos.map((todo)=>todo.id===editobj.id?{...todo,todo:name}:todo));
    setisedit(false);
    setName("");
    seteditobj(null);

  }else{
  
  setTodos([...todos,{id:todos.length+1,todo:name,checked:false}]);
  setName("");
  }
  }
   const deletetodo=(id)=>{
    setTodos(todos.filter((todo)=>todo.id!=id).map((todo,idx)=>({...todo,id:idx+1})));
    
  }

  const edit=(id)=>{
    setisedit(true);
    const a=todos.find((todo)=>todo.id==id);
    seteditobj(a)
    setName(a.todo);

  }


  return (
    <>
<div className='bigcon'>
<h1> To do List</h1>
<div className='new' style={{display:'flex',gap:'5px'}}>
  <input type="text" placeholder='Enter todo' onChange={(e)=>setName(e.target.value)} value={name} style={{ padding:'10px'}}/>
  {isedit?
<FcEditImage  tabIndex={0} role="button" onClick={()=>addOrEdit()}/>:<IoMdAdd tabIndex={0} role="button" onClick={()=>addOrEdit()}/>
}
</div>

  <div className='subcon'>
   <ul className='todolist'>
    {todos.map(todo=> (<li key={todo.id}><div style={{display:"flex",flexDirection:"row",alignItems:'center',gap:'15px' ,fontSize:'20px'}}>
      <p style={{flex:1}}>{todo.todo}</p>
   
      <RiEdit2Line  onClick={()=>edit(todo.id)} tabIndex={0} role="button"/>
      <MdOutlineDelete onClick={()=>deletetodo(todo.id)}tabIndex={0} role="button"/>
      </div>
    </li>))}
   </ul>
  </div>

</div>
    </>
  )
}

export default App
