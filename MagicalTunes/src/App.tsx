import { Outlet } from "react-router-dom"
import { Container } from "@mui/material"

function App() {
  return (
    <>
      <Container>
        <h1>MagicalTunes</h1>
        <Outlet />
      </Container>
    </>
  )
}

export default App
