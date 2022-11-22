import { Confidence, ExchangeLanguage, Loader, SelectLanguage, TextCounter, TextInput } from "app/lib/components"
import { useDebouncedCallback } from "use-debounce"
import { APP_CONFIG } from "app/lib/config"
import { useTranslations } from "app/lib/hooks"
import { useAutoDetectLanguage, useTranslateText } from "./actions"
import { AutoDetectedLanguage, Language, LanguageCode } from "app/lib/models"
import React, { useState } from "react"
import styled from "styled-components"
import { SelectedLanguages } from "./types"

type TranslatorScreenProps = {
    languages: Array<Language>
}

export const TranslatorScreen: React.FunctionComponent<TranslatorScreenProps> = ({
    languages
}) => {
    const T = useTranslations()
    const [translatedText, setTranslatedText] = useState<string>("")
    const [query, setQuery] = useState<string>("")
    const [autoDetectedLanguage, setAutoDetectedLanguage] = useState<AutoDetectedLanguage>()
    const [selectedLanguages, setSelectedLanguages] = useState<SelectedLanguages>({
        source: LanguageCode.Auto,
        target: LanguageCode.English
    })
const { isLoading: 
    isDetectingLanguage, 
    hasError: hasErrorDetectingLanguage, 
    fetch: autoDetectLanguage
} = useAutoDetectLanguage(setAutoDetectedLanguage)
const {
    isLoading: isTranslatingText,
    hasError: hasErrorTranslatingText,
    fetch: translateText
} = useTranslateText(setTranslatedText)
const debounceAction = useDebouncedCallback(
    debouncedQuery => {
        if (debouncedQuery.length < 3){
            return
        }

        selectedLanguages.source === LanguageCode.Auto
            ? autoDetectLanguage(debouncedQuery)
            : translateText(debouncedQuery, selectedLanguages)
    },
    1000
)

    return (
        <Container>
        <TranslatorContainer>
                <InputContainer>
                    <SelectLanguage 
                        languages={languages}
                        exclude={[selectedLanguages.target]}
                        onChange={newCode => setSelectedLanguages(prevState => ({
                            ...prevState,
                            source: newCode
                        }))}
                        selectedLanguage={selectedLanguages.source}

                    />
                    <TextInput 
                        autoFocus
                        value={query}
                        onChangeText={newQuery => {
                            if (newQuery.length > APP_CONFIG.TEXT_INPUT_LIMIT){
                                return
                            }

                            setQuery(newQuery)
                            debounceAction(newQuery)
                        }}
                        placeholder={T.screens.translator.sourceInputPlaceholder}
                    />
                    <LoaderContainer>
                        {isDetectingLanguage && (
                            <Loader />
                        )}
                    </LoaderContainer>
                    <InputFooter>
                        <Confidence 
                            hasError={hasErrorDetectingLanguage && selectedLanguages.source === LanguageCode.Auto}
                            autoDetectedLanguage={autoDetectedLanguage}
                            onClick={() => {setSelectedLanguages(prevState => ({
                                ...prevState,
                                source: autoDetectedLanguage?.language as LanguageCode
                                }))
                                setAutoDetectedLanguage(undefined)
                            }}
                        />
                        <TextCounter 
                            counter={query.length}
                            limit={APP_CONFIG.TEXT_INPUT_LIMIT}
                            />
                    </InputFooter>
                </InputContainer>
                <ExchangeLanguage 
                    hidden={selectedLanguages.source === LanguageCode.Auto}
                    onClick={() => setSelectedLanguages(prevState => ({
                        source: prevState.target,
                        target: prevState.source
                    }))}
                />
                <InputContainer>
                    <SelectLanguage 
                        languages={languages}
                        exclude={[selectedLanguages.source, LanguageCode.Auto]}
                        onChange={newCode => setSelectedLanguages(prevState => ({
                            ...prevState,
                            target: newCode
                        }))}
                        selectedLanguage={selectedLanguages.target}
                    />
                    <TextInput 
                        disabled
                        value={translatedText}
                        hasError={hasErrorTranslatingText}
                    />
                    <LoaderContainer>
                        {isTranslatingText && (
                            <Loader />
                        )}
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
    height: 2px
`

const InputFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
