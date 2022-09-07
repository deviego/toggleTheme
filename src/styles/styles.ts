import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${(props) => props.theme.color.backgroundColor};
`;
export const Content = styled.div`
  display: flex;
  height: 85%;
  margin-top: 32px;

  padding: 0 32px;

  gap: 32px;
;
`;
export const LeftContent = styled.div`
  width: 35%;
  height: 100%;
  background: ${(props) => props.theme.color.lightGray};
`;
export const RightContent = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.color.lightGray};
`;
