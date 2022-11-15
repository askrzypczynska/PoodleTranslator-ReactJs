import styled from "styled-components"
import { useTranslations } from "../hooks"
import { Images } from "assets"
import { APP_CONFIG } from "../config"

export const Header = () => {
    const T = useTranslations()

    return(
        <HeaderContainer>
            <LogoContainer>
                <Logo src={Images.Logo}/>
                <Title>
                    {T.components.header.title}
                </Title>
            </LogoContainer>
            <LinkContainer>
                <Link 
                    href={APP_CONFIG.GITHUB_URL}
                    target="_blank"
                >
                    {T.components.header.github}
                </Link>
                <Link 
                    href={APP_CONFIG.GOOGLE_URL}
                    target="_blank"
                >
                    {T.components.header.google}
                </Link>
            </LinkContainer>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    height: 65px;
    background-color: ${({ theme }) => theme.colors.foreground};
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Logo = styled.img`
    width: auto;
    height: 30px;
    margin-right: 10px;
`

const Title = styled.h1`
    display: inline;
    font-size: 25px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.typography};
`

const LinkContainer = styled.div``

const Link = styled.a`
    color: ${({ theme }) => theme.colors.typography};
    text-decoration: underline;
    cursor: pointer;
    padding: 0 10px; 
`