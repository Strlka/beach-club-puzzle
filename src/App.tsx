
import './App.css'
import { Grid, GridItem } from '@chakra-ui/react'
import PuzzleArea from './components/PuzzleArea'
import NavBar from './components/NavBar'

function App() {


  return (
    <Grid 
      height='100vh'
      minHeight='0'
      templateAreas={`"navBar" "main"`}
      templateRows={{
        base: "auto 1fr",
        lg: "auto 1fr",
      }}
    >
      <GridItem 
        area="navBar"
        bgColor='black'
      >
        <NavBar />
      </GridItem>
      <GridItem 
        area="main"
        height='100%'
        minHeight='0'
        bgGradient="to-r" gradientFrom="red.200" gradientTo="blue.200"
      >
        <PuzzleArea />
      </GridItem>
    </Grid>
  )
}

export default App
