
import { useState, useEffect } from 'react'
import { useCurrentWeather } from '../../custom-hook/custom-alba'
import { Card, Button } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { ListGroupItem } from 'react-bootstrap'
import './style.css'

function CurrentWeather() {

    const tiempo = useCurrentWeather()
    // const current = useForeCastWeather()

    console.log(tiempo)

    return (
        <div>
      
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${tiempo.map(e => e.weather[0].icon)}@2x.png`}/>
  <Card.Body>
    <Card.Title>{tiempo.map(e => e.name)}</Card.Title>
    <Card.Text>
  
    {tiempo.map(e => e.weather[0].description)}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Temp / Temp feels {tiempo.map(e => e.main.temp)}º/ {tiempo.map(e => e.main.feels_like)}º</ListGroupItem>
    <ListGroupItem>Temp Max/ Temp Min {tiempo.map(e => e.main.temp_max)}º/ {tiempo.map(e => e.main.temp_min)}º</ListGroupItem>
    <ListGroupItem>{tiempo.map(e => e.weather[0].main)}</ListGroupItem>
  </ListGroup>
  
</Card>





    

        </div >

    )
}

export default CurrentWeather