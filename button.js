import React from 'react'

export default ({btnName, action, value, etat})=>{
  return (
    <button className ="button" onClick={action} value={value} etat={etat}>
    {btnName}
    </button>
  )
}