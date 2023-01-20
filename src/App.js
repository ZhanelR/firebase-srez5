import React, {useState, useEffect} from 'react';
import './App.css';
import Todo from "./ToDo";
import {db} from "./firebase1";
import {query, collection, onSnapshot, QuerySnapshot, updateDoc, doc, addDoc, deleteDoc} from "firebase/firestore" 
//doc это документ в базе откуда я достаю данные 
//query запрос 
// collection это коллекция с firebase 
// onSnapshot делается перед обращением к базе и после кажд раз когда меняется состоян в БД, меняется снэпшот 

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //create todo

  const createTodo = async (e) => {
    e.preventDefault(e)
    if(input ==='') {
      alert('Please enter a value to the list')
      return
    }
    await addDoc(collection(db, 'todos'), {
      text: input, 
      completed: false,
    })
    setInput('')
  }
 
  //read todo from Firebase

  useEffect(() => {
  const q = query(collection(db, 'todos')) //отпр запрос к базе
  const unsubscribe = onSnapshot(q, (querySnapshot) => {   //onSnapshot каждый раз (всегда!!!), когда что-то меняется в базе, присыл новый снэпшот
    let todosArr = []
    querySnapshot.forEach((doc) => {
      todosArr.push({...doc.data(), id: doc.id})
    });
    setTodos(todosArr)
  })
  return () => unsubscribe() //отписка от соединение когда компон unmount (напр, если что-то не так и компон не отображ). Иначе трата памяти
  }, [])

  //update todo in Firebase

  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, 'todos', todo.id), {
      completed: !todo.completed
    })
  }

  //delete todo 
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, 'todos', id))
  }


  return (
    <div className='container'>
      <h1 className='header'>To Do List</h1>
      <form onSubmit={createTodo} className='form-style'>
        <input value={input} onChange={(e) => setInput(e.target.value)} className="input-style" type="text" placeholder='Add ToDo' />
        <button className='button-style'>Add</button>
      </form>
      <div className='list-style'>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        ))}
      </div>
      {todos.length < 1 ? null : <p>{`you have ${todos.length} todos`}</p>}
      
    </div>
  )
}

export default App;
