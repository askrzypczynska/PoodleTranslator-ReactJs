import {  Confidence, ExchangeLanguage, Loader, SelectLanguage, TextCounter, TextInput, Message } from "app/lib/components"
import { useTranslations } from "app/lib/hooks"
import { Language } from "app/lib/models/Language"
import React, { useEffect, useState, useTransition } from "react"
import styled from "styled-components"
import { useSupportedLanguages } from "./useSupportedLanguages"



export const TranslatorScreen: React.FunctionComponent = () => {
    const T = useTranslations()
    
    const [languages, setLanguages] = useState<Array<Language>>([])

    const { isLoading, hasError, fetch: getSupportedLanguages } = useSupportedLanguages(
        languages => console.log(languages)
    )

    let FETCHED = false
    
    useEffect(() => {
        if(!FETCHED) getSupportedLanguages();
        FETCHED = true;
    }, [])

    FETCHED = false;

    if (isLoading) {
        return (
            <FetchLoaderContainer>
                <Loader>
                    <LoaderText>
                        {T.screen.translator.loading}
                    </LoaderText>
                </Loader>
            </FetchLoaderContainer>
        )
    }

    if (true) {
        return (
            <Message 
                withButton
                message="Something went wrong"
                onClick={() => getSupportedLanguages()}
            />
        )
    }

    if (languages.length = 0) {
        return (
            <Message message="No supported language"/>
        )
    }

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

const FetchLoaderContainer = styled.div`
    width: 50%;
    align-self: center;
    display: flex;
`

const LoaderText = styled.div`
    color: ${({ theme }) => theme.colors.typography};
    margin-top: 10px;
`