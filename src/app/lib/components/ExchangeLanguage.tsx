import { Images } from "assets"
import styled from "styled-components"

type ExchangeLanguageProps = {
    onClick(): void,
    hidden: boolean
}

export const ExchangeLanguage: React.FunctionComponent<ExchangeLanguageProps> = ({
    onClick,
    hidden
}) => (
    <ExchangeContainer>
        {!hidden && (
            <Exchange 
                src={Images.Exchange}
                onClick={onClick}
            />
        )}
    </ExchangeContainer>
)

const ExchangeContainer = styled.div`
    width: 20px;
    height: 20px;
`

const Exchange = styled.img`
    cursor: pointer;
    width: 20px;
    height: 20px;
`