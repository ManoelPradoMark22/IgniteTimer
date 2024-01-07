import styled from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 6.25rem;
  height: 2.5rem;
  border-radius: 4px;
  border: 0;
  margin: 0.5rem;

  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme.white}
`;