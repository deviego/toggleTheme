import { ThemeProvider } from "styled-components"
import Header from "./components/Header"
import lightTheme from "./theme/light"
import darkTheme from "./theme/dark"
import { useState } from "react"

function App() {
 const [theme, setTheme] = useState(lightTheme)

  const onChangeTheme = () => {
    setTheme(theme.name == 'light' ? darkTheme : lightTheme)
 }

  return (
   <>
   <ThemeProvider theme={theme}>
    <Header onChangeTheme={onChangeTheme}></Header>
    </ThemeProvider>
  </>
  )
}

export default App
