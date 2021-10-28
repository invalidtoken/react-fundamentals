import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [input, setInput] = React.useState('')
  const containsUpperCase = input => !(input === input.toLowerCase())

  const onSubmitUsingRef = event => {
    event.preventDefault()
    if (!containsUpperCase(input)) {
      onSubmitUsername(input)
    }
  }

  return (
    <form onSubmit={onSubmitUsingRef}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          id="usernameInput"
          name="username"
          type="text"
        />
      </div>
      {containsUpperCase(input) ? (
        <div style={{color: 'red'}} role="alert">
          Username must be lower case
        </div>
      ) : null}
      <button disabled={containsUpperCase(input)} type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
