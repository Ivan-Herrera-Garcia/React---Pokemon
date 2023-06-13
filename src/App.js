import React, { useEffect, useState } from 'react'
import "./css.scss"


function App() {
  const url = "https://pokedex-api-server.onrender.com/api/v1/pokedex?limit=50"
  //La api originalmente cuenta con paginado de 10 pokemon por pagina y hasta la fecha de 09/06/2023 son
  //1008 pokemons en total

  const [todos, setTodos] = useState()

  const fetchApu = async () => {
      const response = await fetch(url)
      const responseJson = await response.json()
      setTodos(responseJson)
  }

    useEffect(() => {
      fetchApu()
    }, [])


    
  return (
   <div>
    { 
    !todos ? <div class='load'>
    Cargando... <br></br>
    <img src={require('./pikachu.gif')} width={350} alt="Cargando"/>
    </div> : todos.docs.map( (todo,index) => {
      return (
        
      <div class="row">
        <div class="example-2 card">
          <br/>
          <div class="wrapper"  style={{backgroundImage: `url(${todo.imagen})`}}>
            <div class='header'><div class="date">
              <span class="day"><h4>{todo.categoria}</h4></span>
            </div></div>
            <div class="data">
              <div class="content">
                <span class="author">ID: {todo._id}</span>
                <h1 class="title">{todo.nombre}</h1>
                <p class="text">{todo.descripcionversionx}</p>
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </div>
        )      
      })
    }
   </div>
  );
}

export default App;
