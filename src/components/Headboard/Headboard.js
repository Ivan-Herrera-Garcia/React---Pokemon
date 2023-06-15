import React from 'react'
import {Container, Button} from "semantic-ui-react"
import {socialData} from "./../../utils"
import { map } from 'lodash';
import "./Headboard.scss";
import logo from "./../../logo.svg";
import Pokeball from "../../assets/Pokeball.png";

export function Headboard() {
  return (
    <div className='top-bar'>
        <div className='top-bar'>
            <Container>
            <div className='top-bar'>

           <img src={Pokeball} className="App-logo" alt="logo" />  
            <img src={logo} className="App-logo react" alt="logo" />  
            </div>
                <div>
                    {map(socialData, (Datos) => (
                        <Button key={Datos.type}
                            as="a"
                            target="_blank"
                            href={Datos.link}
                            color={Datos.type}
                            icon={Datos.type} />
                    ))}
                </div>
            </Container>
        </div>
</div>
  )
}
