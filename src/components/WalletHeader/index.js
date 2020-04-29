import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { 
  Header, 
  HeaderContainer, 
  Title, 
  BalanceContainer, 
  Value, 
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel, } from './styles';


function WalletHeader({ useBalance }) {
  const [isVisible, setIsVisible] = useState(true);

  function handleToggleVisibility() {
    setIsVisible((state) => !state)
  }

  return (
    <Header 
      colors={useBalance 
        ? ['#52e78c', '#1ab563'] 
        : ['#d3d3d3', '#868686']
      }
    >
      <HeaderContainer>
        <Title>Saldo PicPay</Title>

        <BalanceContainer>
          <Value>
            R$ <Bold>{isVisible? '0,00': '----' }</Bold>
          </Value>

          <EyeButton onPress={handleToggleVisibility}>
            <Feather name={isVisible? "eye": "eye-off"} size={28} color="#fff" />
          </EyeButton>
        </BalanceContainer>

        <Info>
          Seu saldo está rendendo 100% do CDI
        </Info>

        <Actions>
          <Action>
            <MaterialCommunityIcons name="cash" size={28} color="#fff" />
            <ActionLabel>Adicionar</ActionLabel>
          </Action>

          <Action>
            <FontAwesome name="bank" size={20} color="#fff" />
            <ActionLabel>Adicionar</ActionLabel>
          </Action>
        </Actions>
      </HeaderContainer>
    </Header>
  )
}

export default WalletHeader;