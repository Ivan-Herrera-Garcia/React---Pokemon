import React from 'react'
import {Container, Button} from "semantic-ui-react"
import {socialData} from "./../../utils"
import { map } from 'lodash';
import "./Headboard.scss";

export function Headboard() {
  return (
    <div className='top-bar'>
        <div className='top-bar'>
            <Container>
              <br/>
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
