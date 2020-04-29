import React from 'react';

import { 
  Wrapper,
  Container, 
} from './styles';

import WalletHeader from '../../components/WalletHeader'; 
import WalletPaymentMethods from '../../components/WalletPaymentMethods'; 
import TicketButton from '../../components/TicketButton'; 

function Wallet() {
  return (
    <Wrapper>
      <Container>
        <WalletHeader />
        <WalletPaymentMethods />
        <TicketButton />
      </Container>
    </Wrapper>
  )
}

export default Wallet;