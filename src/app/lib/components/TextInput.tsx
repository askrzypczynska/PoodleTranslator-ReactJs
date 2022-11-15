import styled from "styled-components"

export const TextInput = () => (
    <Input placeholder="Type_Text here..." />
)

const Input = styled.textarea`
    background-color: ${({ theme }) => theme.colors.input};
    color: ${({ theme }) => theme.colors.typography};
    border-radius: 8px;
    height: 300px;
    width: 400px;
    resize: none;
    font-size: 18px;
    padding: 10px 15px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: 0px 0px 5px 0px ${({ theme }) => theme.colors.border};
`
