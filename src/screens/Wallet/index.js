import React, { useState } from 'react';
import { Switch } from 'react-native';

import { 
  Wrapper,
  Container, 
  UseBalance,
  UseBalanceTitle,
} from './styles';

import WalletHeader from '../../components/WalletHeader'; 
import WalletPaymentMethods from '../../components/WalletPaymentMethods'; 
import TicketButton from '../../components/TicketButton'; 

function Wallet() {
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleUseBalance() {
    setUseBalance((state) => !state)
  }

  return (
    <Wrapper>
      <Container>
        <WalletHeader useBalance={useBalance} />

        <UseBalance>
          <UseBalanceTitle>
            Usar saldo ao pagar
          </UseBalanceTitle>

          <Switch value={useBalance} onValueChange={handleToggleUseBalance} />
        </UseBalance>

        <WalletPaymentMethods />
        <TicketButton />
      </Container>
    </Wrapper>
  )
}

export default Wallet;