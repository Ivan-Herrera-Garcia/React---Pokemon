import React from 'react'
import {Container, Button} from "semantic-ui-react"
import {socialData} from "./../../utils"
import { map } from 'lodash';
import "./Headboard.scss";
import logo from "./../../logo.svg";
import Pokeball from "../../assets/Pokeball.png";
import { Link } from 'react-router-dom';

export function Headboard() {
  return (
    <div className='top-bar'>
        <div className='top-bar'>
            <Container>
            <div className='top-bar'>

           <img src={Pokeball} className="App-logo" alt="logo" />  
            <img src={logo} className="App-logo react" alt="logo" />  
            

            </div>
                <div className='Botones_icons'>
            <Button as={Link} to='/'  icon='large home' size='large'/> 
            <Button as={Link} to='/busqueda' icon='large search' size='large'/>
            <Button as={Link} to='/acerca-de'  icon='large address book' size='large'/> 
            <div className='Iconos'>
                    {map(socialData, (Datos) => (
                        <Button key={Datos.type}
                            as="a"
                            target="_blank"
                            href={Datos.link}
                            color={Datos.type}
                            icon={Datos.type} />
                    ))}
                    </div>
                </div>
            </Container>
        </div>
</div>
  )
}
