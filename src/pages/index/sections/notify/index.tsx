import React from 'react';
import * as S from './styles';

interface NotifyProps {
  message: string;
  link?: string;
  mode: 'success' | 'error' | 'warn';
}

export const NotifySection = ({ message, link, mode }: NotifyProps) => {
  return (
    <S.Container id="notifyModal" mode={mode}>
      <S.Content id="notifyContent">
        {mode === 'error' ? (
          <S.AlertIcon preserveAspectRatio="none" />
        ) : mode === 'warn' ? (
          <S.WarnIcon preserveAspectRatio="none" />
        ) : (
          <S.SuccessIcon preserveAspectRatio="none" />
        )}

        <S.AlertTitle>{message}</S.AlertTitle>
        {link && <S.LinkIcon preserveAspectRatio="none" />}
        <S.CloseIcon preserveAspectRatio="none" />
      </S.Content>
    </S.Container>
  );
};
