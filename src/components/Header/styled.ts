import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 64px;
    background:${props => props.theme.color.backgroundColor};
    
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3{
        color: ${props => props.theme.color.TextColor};
    }
`
