import styled from 'styled-components'
interface InputProps {
  margin: string
};

export const InputComponent = styled.input<InputProps>`
    height: 50px;
    padding: 10px 20px;
    font-size: 16px;
    margin: ${props => props.margin ? props.margin : ''};
    border-radius: 5px;
    border: 0.5px solid #d9d9d9;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    `
