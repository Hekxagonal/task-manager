import React from 'react';
import { CallNotify } from '../../pages/index/sections/notify/animations';
import * as S from './styles';

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <S.Container>
      <S.Header>
        Header
        <button onClick={CallNotify}>debug</button>
      </S.Header>
      <S.Content>
        {children}
      </S.Content>
    </S.Container>
  );
};
