import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import lightTheme from "./theme/light";
import darkTheme from "./theme/dark";
import { useState } from "react";
import { Container, Content, LeftContent, RightContent } from "./styles/styles";

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const onChangeTheme = () => {
    setTheme(theme.name == "light" ? darkTheme : lightTheme);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Header onChangeTheme={onChangeTheme}></Header>
          <Content>
            <LeftContent />
            <RightContent />
          </Content>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
