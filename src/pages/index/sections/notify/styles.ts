import styled, { css } from 'styled-components';
import { RiExternalLinkLine, RiErrorWarningLine, RiErrorWarningFill } from 'react-icons/ri';
import { IoClose } from 'react-icons/io5';
import { BiCheckCircle } from 'react-icons/bi';


interface ContainerProps {
  mode: 'success' | 'error' | 'warn';
}

export const Container = styled.div<ContainerProps>`
  width: 95vw;
  margin-top: 10px;
  height: 40px;
  color: white;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  border-radius: 6px;

  ${props => {
    switch (props.mode) {
      case 'success': return css`
        background-color: #00b894;
      `;
      case 'error': return css`
        background-color: #d63031;
      `;
      case 'warn': return css`
        background-color: #fdcb6e;
      `;
    }
  }}
`;

export const AlertIcon = styled(RiErrorWarningFill).attrs({
  color: 'white',
  size: 30,
})`
`;

export const WarnIcon = styled(RiErrorWarningLine).attrs({
  color: 'white',
  size: 30,
})`
`;

export const SuccessIcon = styled(BiCheckCircle).attrs({
  color: 'white',
  size: 30,
})`
`;

export const LinkIcon = styled(RiExternalLinkLine).attrs({
  color: 'white',
  size: 20,
})`
  cursor: pointer;
`;

export const CloseIcon = styled(IoClose).attrs({
  color: 'white',
  size: 20,
})`
  cursor: pointer;
`;

export const AlertTitle = styled.div`
  width: calc(100% - 160px);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`;