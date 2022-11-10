import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { TranslatorScreen } from "../features/translator"
import { theme } from "./lib/styles"

export const App = () => {
    return(
        <ThemeProvider theme={ theme }>
            <AppContainer>
                <TranslatorScreen />
            </AppContainer>
        </ThemeProvider>
    )
}

const AppContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.background}
`