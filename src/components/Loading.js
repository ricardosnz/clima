import React from 'react'
const Loading = () => (
  <div className="loading">
    <div className="loading__point" style={{"--delay": "100ms"}}></div>
    <div className="loading__point" style={{"--delay": "200ms"}}></div>
    <div className="loading__point" style={{"--delay": "300ms"}}></div>
  </div>
)
export default Loading