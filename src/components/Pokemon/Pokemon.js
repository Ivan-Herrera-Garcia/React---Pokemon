import React, {useEffect, useState} from 'react'
import {Oval} from 'react-loader-spinner'
import './Pokemon.scss'
import {image} from '../../assets'



export function Pokemon() {

        function getFirst(cadena) {
          const arr = cadena.split(",");
        
          let img = diccionario[arr[0]];
          if (img === null && img === undefined) {
            img = diccionario[1];
          } 
          return img
        }

        const url = "https://pokedex-api-server.onrender.com/api/v1/pokedex?limit=50"
        //La api originalmente cuenta con paginado de 10 pokemon por pagina y hasta la fecha de 09/06/2023 son
        //1008 pokemons en total
      
        const [todos, setTodos] = useState()
      
        const diccionario = {
          Fuego: image.tipo_Fuego,
          Hielo: image.tipo_Hielo,
          Lucha: image.tipo_Lucha,
          Normal: image.tipo_Normal,
          Planta: image.tipo_Planta,
          Psiquico: image.tipo_Psiquico,
          Tierra: image.tipo_Roca,
          Veneno: image.tipo_Veneno,
          Agua: image.tipo_Agua,
          Bicho: image.tipo_Bicho,
          Eléctrico: image.tipo_Electrico
          

        }

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
          !todos ? 
            <div ><div class="load">
            <Oval color="#FF0000" height={200} width={200} /></div>
            <br/>
            <h2 style={{paddingLeft:'850px'}}> Cargando...</h2>
            <img src={image.pikachu} width={1050} alt="Cargando" style={{paddingLeft: '700px'}}/>
      
            </div> 
          : todos.docs.map( (todo,index) => (
       

          
              
            <div class="row">
           
              <div class="example-2 card">
                <br/>
                <div class="wrapper"  style={{backgroundImage: `url(${todo.imagen})`}}>
                  <div class='header'><div class="date">
                    <span><img src={getFirst(todo.tipo)} width={20} alt='Tipos'></img></span>
                  </div></div>
                  <div class="data">
                    <div class="content">
                      <span class="author">ID: {todo._id}</span>
                      <h1 class="title">{todo.nombre}</h1>
                      <p class="text">{todo.descripcionversionx}</p>
                    </div>
                  </div>
                </div>
                <br/>
              </div>
            </div>
                  
          ))
          }
         </div>
        );
      }

