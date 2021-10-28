// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, style = {}, ...rest}) => {
  const getClassName = size => {
    if (size === 'large') return 'box--large'
    else if (size === 'medium') return 'box--medium'
    else return 'box--small'
  }

  return (
    <div
      className={`box ${getClassName(size)}`}
      style={{fontStyle: 'italic', ...style}}
      {...rest}
    />
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
