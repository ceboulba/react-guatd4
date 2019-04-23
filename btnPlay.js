import React from 'react'

export default ({ action, value, etat }) => {
  return (
    <button className="button is-large" onClick={action} value={value} etat={etat}>
    <i className="fas fa-play-circle"></i><i className="fas fa-pause-circle"></i>
    </button>
  )
}