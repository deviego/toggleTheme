import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme{
        name: string;
        color:{
            primary: string;
            second:string;
            lightGray: string;
            backgroundColor: string;
            TextColor: string
        }
    
    }
}

