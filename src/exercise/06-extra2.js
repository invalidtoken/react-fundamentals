import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [input, setInput] = React.useState('')

  const onSubmitUsingRef = event => {
    event.preventDefault()
    onSubmitUsername(input)
  }

  return (
    <form onSubmit={onSubmitUsingRef}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          value={input}
          onChange={e => setInput(e.target.value.toLowerCase())}
          id="usernameInput"
          name="username"
          type="text"
        />
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
