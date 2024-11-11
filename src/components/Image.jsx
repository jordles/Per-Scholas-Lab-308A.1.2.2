import React from 'react'

function Image({imageSrc, title}) {
  return (
    <img src={imageSrc} alt={title} />
  )
}

export default Image