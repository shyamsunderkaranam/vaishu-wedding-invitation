import React from 'react'
import './FlowersEffect.css'

function FlowersEffect() {
  return (
    <div className="flower-container">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flower">🌸</div>
          ))}
    </div>
  )
}

export default FlowersEffect
