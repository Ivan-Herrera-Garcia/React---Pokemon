import React from 'react';
import {Image, Segment, Grid, Divider, Icon, Button} from "semantic-ui-react"
import {Headboard} from "./../../components"

export function About_Me() {
  return (
    <div>
        <Headboard/>
        
            <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
      <div>
            <Segment>
                <Image src={'https://avatars.githubusercontent.com/u/71898783?s=400&u=4265f7a92fb617bc2411319e36de2f377f1fe6d3&v=4'} size='small' floated='left' avatar/>
                <p style={{textAlign: `justify`}}>
                <h1><b>Me presento, soy Ivan Herrera Garcia 🙌</b></h1><br/>Soy un programador casi Ingeniero en Sistemas Computacionales por parte del 
                Tec Laguna. Realice este pequeño proyecto poniendo a prueba mis habilidades adqueridas para traerles a todos los Pokemon hasta el momento 
                <code>1008</code>. En los proximos proyectos les traeré uno en especial con Python usando las librerias de OpenAI y modelos de
                <code> GTP4ALL</code>. <br/>Si quieren conocer mas de mí y darme chamba les dejo mis redes sociales en la parte de arriba.<br/>
                </p>
            </Segment> 
            </div>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
      <div>
            <Segment>
                <p style={{textAlign: `justify`}}>
                No me puedo ir sin antes agradecer la ayuda brindadá de mi compañero y amigo Roberto Esquivel Troncoso. Quien me guio por el camino de React y quien me proporciono
                y me autorizo el uso de su API Pokemon. Si quieren conocer mas de el, puede dar click a su imagen y veran su espacio en GitHub.
                </p>
                <Button icon="big github" circular  href="https://github.com/RETBOT" size='big' floated='left' avatar/>
                
                
            </Segment> 
            </div>
      </Grid.Column>
    </Grid>
    <Divider> 
    
  </Divider>
  </Segment>
        



    </div>
  )
}
