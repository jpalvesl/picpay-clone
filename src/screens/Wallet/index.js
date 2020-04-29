import React, { useState } from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
  Wrapper,
  Container, 
  UseBalance,
  UseBalanceTitle,
} from './styles';

import WalletHeader from '../../components/WalletHeader'; 
import WalletPaymentMethods from '../../components/WalletPaymentMethods'; 

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
      </Container>
    </Wrapper>
  )
}

export default Wallet;