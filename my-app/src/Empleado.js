import React from 'react'
import './Empleado.css'

export const Empleado = ({ datos }) => {
  return (
    <div className='empleado'>
      <img src={datos.imagen}></img>
      <div className='datos'>
        <p>Cargo: {datos.cargo}</p>
        <p>Desde-Hasta: {datos.desde}</p>
        <p>Ubicación: {datos.ubicacion}</p>
        <p>Descripción: {datos.descripcion}</p>
      </div>
    </div>
  )
}
