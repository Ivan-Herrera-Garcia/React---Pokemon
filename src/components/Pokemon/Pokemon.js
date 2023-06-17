import React, {useEffect, useState} from 'react'
import {Oval} from 'react-loader-spinner'
import './Pokemon-diseño.scss'
import {image} from '../../assets'
import {Button} from "semantic-ui-react"
import {variable} from "./../../utils"


export function Pokemon() {
      
        const [todos, setTodos] = useState();
        const  [page, setPage] = useState(50);
        const isCurrent = page > 1000;

        const diccionario = {
          Fuego: image.tipo_Fuego,
          Hielo: image.tipo_Hielo,
          Lucha: image.tipo_Lucha,
          Normal: image.tipo_Normal,
          Planta: image.tipo_Planta,
          Psíquico: image.tipo_Psiquico,
          Roca: image.tipo_Roca,
          Veneno: image.tipo_Veneno,
          Agua: image.tipo_Agua,
          Bicho: image.tipo_Bicho,
          Eléctrico: image.tipo_Electrico,
          Volador: image.tipo_Volador,
          Tierra: image.tipo_Tierra,
          Acero: image.tipo_Hierro,
          Hada: image.tipo_Hada,
          Siniestro: image.tipo_Siniestro,
          Fantasma: image.tipo_Fantasma,
          Dragón: image.tipo_Dragon
        }

        const colores = {
          Fuego: "#fe6434",
          Hielo: "#abd3f3",
          Lucha: "#CC7728",
          Normal: "#E7E2DF",
          Planta: "#5edf65",
          Psíquico: "#E281A8",
          Roca: "#7B8F98",
          Veneno: "#BD73B0",
          Agua: "#abd3f3",
          Bicho: "#dddf5e",
          Eléctrico: "#fecd00",
          Volador: "#E7E2DF",
          Tierra: "#7B8F98",
          Acero: "#7B8F98",
          Hada: "#E281A8",
          Siniestro: "#BD73B0",
          Fantasma: "#6CA8BA",
          Dragón: "#767bc0",

        }

        let url = `${variable}?limit=${page}`;
        //La api originalmente cuenta con paginado de 10 pokemon por pagina y hasta la fecha de 09/06/2023 son
        //1008 pokemons en total
      

        const fetchApu = async () => {
            const response = await fetch(url)
            const responseJson = await response.json()
            setTodos(responseJson)
        }

     
            
          
       
          
          useEffect(() => {
            fetchApu()

          }, [page])

         
      
        const loadMore = () => {
          setPage((prevState) => prevState + 100);
        };
          
        return (<div>
         <div>
          {
           

          !todos ? 
            <div ><div class="load">
            <Oval color="#FF0000" height={200} width={200} /></div>
            <br/>
            <h2 style={{paddingLeft:'850px'}}> Cargando (30 Seg)...</h2>
            <img src={image.pikachu} width={1050} alt="Cargando" style={{paddingLeft: '700px'}}/>
      
            </div> 
          : todos.docs.map( (todo,index) => (
       
            
         
              
            <div class="row">
              
              <div class="example-2 card" >
                <br/>
                <div class="wrapper"  style={{backgroundImage: `url(${todo.imagen})`, backgroundColor: `${colores[todo.tipo.split(", ")[0]]}`}}>
                  <div class='header'><div class="date">
                    <span>
                    {todo.tipo.split(", ").map ( (res, index) => {
                      if (res === "Dragón") 
                    { return <img src={diccionario[res]} alt={res} width={23} style={{marginRight:`5px`}}/>;} 
                    else {
                       return <img src={diccionario[res]} alt={res} width={20} style={{marginRight:`5px`}}/>;}
                    })}
                    </span>
                  </div></div>
                  <div class="data">
                    <div class="content">
                      <span class="author">ID: {todo._id} </span>
                      <h1 class="title">{todo.nombre}</h1>
                      <div class="header"><div class="PuntosBase"> 
                        <div className='Info'>
                       
                       <table>
                        <td style={{ width: `17%`}}>
                        <p style={{fontSize: `20px`}}>  
                        <img src={image.PS} alt='PS' width={25}/> {todo.puntosbase.ps}<br/>
                          <img src={image.logo_ataque} alt='PS' width={25}/> {todo.puntosbase.ataque}<br/>
                          <img src={image.logo_defensa} alt='PS' width={25}/> {todo.puntosbase.defensa} <br/>
                          <img src={image.logo_velocidad} alt='PS' width={25}/> {todo.puntosbase.velocidad}</p>
                         
                        </td>
                        <td  style={{ width: `83%`, textAlign: 'justify'}}>
                          {todo.descripcionversionx} {todo.descripcionversiony}
                        </td>

                       </table>
                        
                          </div>
                      </div> 
                      
                     </div>
                    </div>
                  </div>
                </div>
                <br/>
              </div>
            </div>
                  
          ))
          }
        
         
         </div>
         <div className='ButtonMas'>
            
            {!isCurrent && (
               <Button circular color='purple' icon='plus' onClick={loadMore} size='big'/>)}
                </div>
         </div>
        );
      }

