import './App.css';
import React from 'react';

function Todo({ todo, completeTodo, deleteTodo, index }) {

  return(
    <div className='todo'
      style={{
        textDecoration: !!todo.complete ? 'line-through': '' }}
    >
      {todo.text}
      <div>
       <button onClick={() => { completeTodo(index) } }>Complete</button>
       <button onClick={() => { deleteTodo(index) } }>x</button>
      </div>
    </div>

  )

}

function TodoForm({addTodo}) {

    const [field, setField] = React.useState('')

    const handleSubmit = e => {

      e.preventDefault();

      if (!field) return;

      addTodo(field);
      setField('')
    }

    return(

      <form onSubmit={handleSubmit}
      >
        <input type='text' className='input' value={field}
        onChange={e => setField(e.target.value) }
        />

      </form>

    )

}

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'laba',
      complete: false
    },
    { text: 'walis',
    complete: false
  }
    ,{
      text: 'bike' ,
      complete: false
    }
  ], 
  () => {
    console.log('arsars')
  }
    )


  const addTodo = text => {
    const newTodos = [...todos, {text, complete: false}]
    setTodos(newTodos)

  }

  const completeTodo = index => {

    const newTodos = [...todos]

    
    newTodos[index].complete = true;
    // newTodos.pop(index)

    setTodos(newTodos)

  }

  const deleteTodo = index => {

    const newTodos = [...todos]

    newTodos.splice(index, 1)

    setTodos(newTodos)
  }
  


  return (
    <div className='app'>


      <div className='todo-list'>

        {todos.map(( todo, index) => (
            <Todo 
              key={index} index={index} todo={todo}
              completeTodo={completeTodo} 
              deleteTodo={deleteTodo}
              />

        ))}


        <TodoForm addTodo={addTodo}/>
      </div>



    </div>

  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
