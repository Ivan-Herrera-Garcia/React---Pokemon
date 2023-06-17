import React, {useState} from 'react'
import {Input, Button, Label} from 'semantic-ui-react'
import {image} from "./../../assets"
import {variable} from "./../../utils"
import "./SearchID.scss"

export function SearchID() {

    const [idJson, setIdJson] = useState(null);
    const [inputValue, setInputValue] = useState('');
   
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

    const handleClean = () => {
      setIdJson(null);
      setInputValue('1');
    }

    const handleChange = (event) => {
        const value = event.target.value;
        if (value >= 1 && value <=1008) {
        setInputValue(value); } else {
          setInputValue(1008);
        }

      };

      const handleSubmit = async (event) => {
        const value = event.preventDefault();
        const id = parseInt(inputValue);
        if (value === '' || (parseFloat(value) >= 1 && parseFloat(value) <= 1008)) {
          
        } else { 
          try {
            const response = await fetch(`${variable}/id/${id}`);
            const data = await response.json();
            setIdJson(data); 
          } catch(error) {
              console.error('ERROR AUTODESTRUCCION INICIADA EN 5 SEG', error);
               }
        }
          };


  return (
     <div className='Busqueda'>
        
          <Label as='a' basic color='gray' size='big'>Busqueda por ID</Label>
          <Input className="Etiqueta" placeholder="Solo ID" type="number" min='1' max='1008' value={inputValue} size='large' onChange={handleChange}/>
          <Button color='blue' className='' onClick={handleSubmit} icon='add' size='large'/>
          <Button color='red' onClick={handleClean} type='button' icon='trash alternate' size='large'/>
        
          
       {idJson && (
        <div> <div>
              
        <div className='Busqueda-Poke'>
          <br/>
          <div class="wrapper"  style={{backgroundImage: `url(${idJson.imagen})`, backgroundRepeat:`no-repeat`, backgroundColor: `${colores[idJson.tipo.split(", ")[0]]}`}}>
            <div class='header'><div class="date">
              <span>
              {idJson.tipo.split(", ").map ( (res, index) => {
                if (res === "Dragón") 
              { return <img src={diccionario[res]} alt={res} width={23} style={{marginRight:`5px`}}/>;} 
              else {
                 return <img src={diccionario[res]} alt={res} width={20} style={{marginRight:`5px`}}/>;}
              })}
              </span>
            </div>
            </div>
            <div class="header"><div class="PuntosBase"> 
            <div className='Info'>
            <table style={{paddingLeft:`55%`}}>
                
              
                
                 
                 
                 
                 <td  style={{ width: `50%`, textAlign: 'justify'}}>
                 ID: {idJson._id}
                <h1>{idJson.nombre}</h1>
                    {idJson.descripcionversionx} {idJson.descripcionversiony}
                <p><br/>Categoria: <b>{idJson.categoria}</b><br/>
                Habilidad: <b>{idJson.habilidad}</b><br/>
                Peso: <b>{idJson.peso}</b><br/>
                Altura: <b>{idJson.altura}</b></p>
                  </td>

                  <tr style={{ width: `50%`}}>
                  <p style={{fontSize: `20px`}}>  
                  <img src={image.PS} alt='PS' width={25}/> {idJson.puntosbase.ps}<br/>
                    <img src={image.logo_ataque} alt='PS' width={25}/> {idJson.puntosbase.ataque}<br/>
                    <img src={image.logo_defensa} alt='AT' width={25}/> {idJson.puntosbase.defensa} <br/>
                    <img src={image.logo_ataque_esp} alt='DF' width={25}/> {idJson.puntosbase.ataqueespecial} <br/>
                    <img src={image.logo_defensa_esp} alt='AS' width={25}/> {idJson.puntosbase.defensaespecial} <br/>
                    <img src={image.logo_velocidad} alt='DS' width={25}/> {idJson.puntosbase.velocidad}</p>
                   
                  </tr>
                  
                 </table>
                  
                    </div>
                </div> 
                
               </div>
            
          
          </div>
          <br/>
        </div>
      </div></div>
       )} 
       </div>
  )
}
