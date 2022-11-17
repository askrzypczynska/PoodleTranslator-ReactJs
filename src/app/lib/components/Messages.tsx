import styled from "styled-components"
import React, { useTransition } from "react"
import { useTranslations } from "../hooks"

type MessageProps = {
    message: string,
    withButton?: boolean,
    onClick?(): void
}

export const Message: React.FunctionComponent<MessageProps> = ({
    message,
    withButton,
    onClick
}) => {
    const T = useTranslations()
    return (
        <MessageContainer>
            <Text>
                {message}
            </Text>
            {withButton && (
                <Button 
                   onClick={onClick}
                >
                    {T.components.message.tryAgain}
                </Button>
            )}
        </MessageContainer>
    )
}

const MessageContainer = styled.div`
`

const Button = styled.div`
`

const Text = styled.div`
    color: ${({ theme }) => theme.colors.typography}
`