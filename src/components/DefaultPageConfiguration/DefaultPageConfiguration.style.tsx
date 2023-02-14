import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
   opacity: 0;
  }
  50% {
    opacity: 0%;
  }
  100% {
    opacity: 100%;
  }
`;

export const DefaultPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.secondary};
  transition: all ${(props) => props.theme.anim.normal} ease;
`;
