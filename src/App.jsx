import { useState,useEffect } from 'react'
import Navbar from './Component/Navbar'
import { v4 as uuidv4 } from 'uuid';




function App() {

  const [yourTodo, setyourTodo] = useState("")
  const [todo,setTodo] = useState([])

   useEffect(()=>{
   
         let todo=JSON.parse(localStorage.getItem("todo"))

      setTodo(todo)
    



},[])

  const saveT = (params)=>{
    localStorage.setItem("todo", JSON.stringify(todo))
  }



  const handleEdite=(e,id)=>{
    let t =todo.filter(item=>item.id===id)
    setyourTodo(t[0].yourTodo)

    let del = todo.filter(item=>{
      return item.id!==id
     });
     setTodo(del)
      saveT();


  }

  const handleDelete =(e, id)=>{
     let del = todo.filter(item=>{
      return item.id!==id
     });
     setTodo(del)

    saveT();
  

  }

  const handleAdd =()=>{
 
    setTodo([...todo,{id:uuidv4(), yourTodo,isComplete:true}])
    setyourTodo("")
    saveT();
  }
 
  

  const handleChange =(e)=>{
    setyourTodo(e.target.value)
  
  }
  
  

  return (
    <>
    <Navbar />
    <div className=' container bg-slate-500 text-white rounded mx-auto my-5 p-4 min-h-[80vh]'>
    <div className='addTodo  my-5'>
      <h1>Add Todo</h1>
      <input onChange={handleChange} value={yourTodo} type='text' className='text-black w-1/2' />
      <button onClick ={handleAdd}  className='p-1 mx-4 rounded-lg text-sm text-white font-bold bg-green-700 hover:bg-green-900 w-20'>add</button>
      </div>
      <h2>Your Todo</h2>
      <div className='yourTodo'>
        {todo.length===0 && <div className='mt-3 font-bold'>No Todo Here!</div>}
        {todo.map(item =>{


       
       return <div key ={item.id} className="todo flex justify-between w-1/2 p-3">
        <div className='text'>{item.yourTodo}</div>
        <div className="bt">
          <button  onClick={(e)=>{handleEdite(e,item.id)}} className='p-1 mx-3 rounded-lg text-sm text-white font-bold bg-green-700 hover:bg-green-900 w-20'>Edite</button>
          <button  onClick={(e)=>{handleDelete(e,item.id)}} className='p-1 mx-3 rounded-lg text-sm text-white font-bold bg-green-700 hover:bg-green-900 w-20'>Delete</button>
          </div>
        </div>

})}

      </div>

</div>
    </>
  )
}

export default App
