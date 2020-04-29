import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { 
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
} from './styles.js';

import creditCard from '../../images/credit-card.png'


function WalletPaymentMethods() {
  return (
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
    </PaymentMethods>
  )
}

export default WalletPaymentMethods;