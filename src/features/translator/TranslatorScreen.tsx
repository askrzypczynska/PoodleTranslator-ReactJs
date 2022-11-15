import {  Confidence, ExchangeLanguage, Loader, SelectLanguage, TextCounter, TextInput } from "app/lib/components"
import React, { useTransition } from "react"
import styled from "styled-components"

export const TranslatorScreen: React.FunctionComponent = () => {
    
    return(
    <Container>
       <TranslatorContainer>
            <InputContainer>
                <SelectLanguage />
                <TextInput />
                <LoaderContainer>
                    <Loader />
                </LoaderContainer>
                <InputFooter>
                    <Confidence />
                    <TextCounter />
                </InputFooter>
            </InputContainer>
            <ExchangeLanguage />
            <InputContainer>
                <SelectLanguage />
                <TextInput />
                <LoaderContainer>
                    <Loader />
                </LoaderContainer>
            </InputContainer>
       </TranslatorContainer>
    </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: ${({ theme }) => theme.colors.typography}
`

const TranslatorContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
`

const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    padding: 0 5px;
    margin: 0px 3%;
`

const LoaderContainer = styled.div`
    padding: 10px;
`

const InputFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`