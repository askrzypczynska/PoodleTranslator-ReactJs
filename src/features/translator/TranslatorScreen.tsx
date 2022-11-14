import React, { useTransition } from "react"
import styled from "styled-components"


export const TranslatorScreen: React.FunctionComponent = () => {
    
    return(
    <Container>
        Hello
    </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: ${({ theme }) => theme.colors.typography}
`