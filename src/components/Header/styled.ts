import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    height: 64px;
    background:${props => props.theme.color.primary};
    
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 180px;
        margin-top: 30px;
    }
`
