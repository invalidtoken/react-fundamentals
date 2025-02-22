// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const ref = React.useRef(null)

  const onSubmit = event => {
    event.preventDefault()
    let str = event.target.elements.usernameInput.value
    onSubmitUsername(str)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" name="username" ref={ref} type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
