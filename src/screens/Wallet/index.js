import React, { useState } from 'react';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
  Wrapper,
  Container, 
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardInfo,
  CardTitle, 
  Img,
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
} from './styles';

import WalletHeader from '../../components/WalletHeader'; 

import creditCard from '../../images/credit-card.png'

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

        <PaymentMethods>
          <PaymentMethodsTitle>
            Formas de pagamento
          </PaymentMethodsTitle>

          <Card>
            <CardBody>
              <CardDetails>
              <CardTitle>
                Cadastre seu cartão de crédito
              </CardTitle>

              <CardInfo>
                Cadastre o seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay
              </CardInfo>
            </CardDetails>

            <Img source={creditCard} resizeMode="contain" />
            </CardBody>

            <AddButton>
              <AntDesign name="pluscircleo" size={30} color="#0db060" />
              <AddLabel>Adicionar cartão de crédito</AddLabel>
            </AddButton>
          </Card>

          <UseTicketButton>
            <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </PaymentMethods>
      </Container>
    </Wrapper>
  )
}

export default Wallet;