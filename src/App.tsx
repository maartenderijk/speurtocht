import { Container, Paper } from '@mui/material'
import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Paper>
        <h1>Vite + React</h1>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

    </Paper>
    </Container >
  )
}

export default App
