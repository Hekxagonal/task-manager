import React from 'react';
import * as S from './styles';
import { NotifySection } from './sections/notify';

export const IndexPage = () => {
  return (
    <div>
      <S.Container>
        <NotifySection
          message="Fatura do Banco Inter Atrasada! Dia 26/12 Valor: R$500,00"
          link="link"
          mode="error"
        />
        <NotifySection
          message="Fatura do Banco Inter Atrasada! Dia 26/12 Valor: R$500,00"
          link=""
          mode="warn"
        />
        <NotifySection
          message="Fatura do Banco Inter Atrasada! Dia 26/12 Valor: R$500,00"
          link="link"
          mode="success"
        />
      </S.Container>
    </div>
  );
};
