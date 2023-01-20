import React from 'react';
import './ToDo.css';

const ToDo = ({todo, toggleComplete, deleteTodo}) => {
  //const [isToggleChecked, setisToggleChecked] = useEffect(false);
  return (
    <div className='content-container'>
        <div className='todocont'>
        <input id="checkbox" onChange={() => toggleComplete(todo)} type="checkbox" className="todocheck" checked={todo.completed ? 'checked' : ''} />
        <p id="text" onClick={() => toggleComplete(todo)}>{todo.text}</p>
        </div>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
   
    //<li className={todo.completed}>

    //</li>
  )
}

/* <li className={todo.completed}>
<div className='todocont'>
<input onChange={() => toggleComplete(todo)} type="checkbox" className="todocheck" checked={todo.completed ? 'checked' : ''} />
<p onClick={() => toggleComplete(todo)} className={`todotext ${todo.completed ? "todoDone" : ''}`}>{todo.text}</p>
</div>
<button onClick={() => deleteTodo(todo.id)}>Delete</button>
</li> */

export default ToDo;