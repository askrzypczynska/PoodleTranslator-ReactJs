import styled from "styled-components"
import { useTranslations } from "../hooks"
import { AutoDetectedLanguage } from "../models"

type LanguageProps = {
    disabled: boolean
}

type ConfidenceProps = {
    hasError: boolean,
    onClick(): void,
    autoDetectedLanguage?: AutoDetectedLanguage
}

export const Confidence: React.FunctionComponent<ConfidenceProps> = ({
    hasError,
    onClick,
    autoDetectedLanguage = {}
}) => {
    const T = useTranslations()
    const { confidence, language } = autoDetectedLanguage

    return (
        <Container>
            <Percentage>
                {confidence && `${confidence}%`}
            </Percentage>                    
            <Language
                onClick={() => {
                    if (!hasError) {
                        onClick()
                    }
                }}
                disabled={hasError}
            >
                {hasError && T.components.confidence.error}
                {language && `(${language})`}
            </Language>
        </Container>
    )
}

const Container = styled.div`
`

const Percentage = styled.span`
    color: ${({ theme }) => theme.colors.primary}
`

const Language = styled.a<LanguageProps>`
    cursor: ${({ disabled }) => disabled ? undefined : "pointer"}
    text-decoration: ${({ disabled }) => disabled ? undefined : "underline"}
    margin-left: 5px;
    color: ${({ theme, disabled }) => disabled ? theme.colors.error : theme.colors.primary}
`