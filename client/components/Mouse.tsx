import { useState } from 'react'
import mouseImg from '/mouseImg.png'
import squeak from '/squeak.mp3'

function Mouse() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [showMouse, setShowMouse] = useState(true)

  const handleClick = () => {
    const audio = new Audio(squeak)
    audio.play()
    
    setPos({
      x: Math.floor(Math.random() * (window.innerWidth - 50)),
      y: Math.floor(Math.random() * (window.innerHeight - 50)),
    })
    setShowMouse(true)
  }

  return (
    <>
      <button
        onClick={handleClick}
        style={{
          position: 'absolute',
          left: `${pos.x}px`,
          top: `${pos.y}px`,
        }}
      >
        {showMouse && (
          <img src={mouseImg} className="mouse-img" alt="a Taunting Mouse" />
        )}
      </button>
    </>
  )
}

export default Mouse
