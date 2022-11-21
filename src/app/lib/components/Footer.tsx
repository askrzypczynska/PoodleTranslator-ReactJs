import styled from "styled-components"
import { APP_CONFIG } from "../config"
import { useTranslations } from "../hooks"

export const Footer = () => {

    const T = useTranslations()
    const year = new Date().getFullYear()

    return (
        <FooterContainer>
            <PoodleConteiner>
                &copy; {year} {T.common.companyName}
            </PoodleConteiner>
            <LinkContainer>
                <Link
                    href={APP_CONFIG.LIBRE_TRANSLATE_URL}
                    target="_blank"
                >
                    {T.components.footer.libreTranslate}
                </Link>
            </LinkContainer>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    height: 60px;
    display: flex;
    flex-diraction: row;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.foreground};
    border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const PoodleConteiner = styled.div`
    color: ${({ theme }) => theme.colors.typography};
`

const LinkContainer = styled.div`
`

const Link = styled.a`
    color: ${({ theme }) => theme.colors.typography};
    text-decoration: underline;
    cursor: pointer;
    padding: 0 10px; 
`