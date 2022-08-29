import { Container } from "./styled";
import ReactSwitch from "react-switch";
import { useContext } from "react";
import {  ThemeContext } from "styled-components";

type Props =  {
    onChangeTheme: ( ) => void
}

export default function Header({onChangeTheme}: Props) {
    const {name, color} = useContext(ThemeContext)

  return (
    <Container>
      <h3>Deviego</h3>
      <ReactSwitch 
      onChange={onChangeTheme} 
      checked ={name == 'light'}
      height={20}
      width={40}
      uncheckedIcon={false}
      checkedIcon={false}
        handleDiameter={20}
      offColor={color.second}
      onColor={color.second}

      />
    </Container>
  );
}
