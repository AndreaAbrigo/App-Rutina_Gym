import React from 'react';
import './App.css';
import {div, Container} from 'reactstrap';
import Rutina from './Components/Rutina';
import Menu from './Components/Menu';
import Titulo from './Components/Titulo';
import {diauno, diados, diatres} from './db/rutinas.json';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      diauno,
      diados,
      diatres
    };
  }
  render(){
    const arregloDiaUno = this.state.diauno.map(
      (diauno, i) =>{
        return(
          <Rutina
          key = {i}
          ejercicio = {diauno.ejercicio}
          cantidad = {diauno.cantidad}
          descripcion = {diauno.descripcion}
          imagen = {diauno.imagen}
          />
        )
      }
    );

    const arregloDiaDos = this.state.diados.map(
      (diados, i) =>{
        return(
          <Rutina
          key = {i}
          ejercicio = {diados.ejercicio}
          cantidad = {diados.cantidad}
          descripcion = {diados.descripcion}
          imagen = {diados.imagen}
          />
        )
      }
    );

    const arregloDiaTres = this.state.diatres.map(
      (diatres, i) =>{
        return(
          <Rutina
          key = {i}
          ejercicio = {diatres.ejercicio}
          cantidad = {diatres.cantidad}
          descripcion = {diatres.descripcion}
          imagen = {diatres.imagen}
          />
        )
      }
    );

    return (
        <Container>
          <Menu />
          <div>
            <Titulo titulo="Día 1"/>
            {arregloDiaUno}
            <Titulo titulo="Día 2"/>
            {arregloDiaDos}
            <Titulo titulo="Día 3"/>
            {arregloDiaTres}
          </div>
        </Container>
    );
  }
}


export default App;
