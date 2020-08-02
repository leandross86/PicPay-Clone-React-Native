import React from 'react';
import { Text } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons' 

import { Wrapper, Container, Header, BalanceContainer, BalanceTitle, Balance } from './styles';
import Suggestions from '../../components/Suggestions';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />

          <BalanceContainer>
            <BalanceTitle>Meu saldo</BalanceTitle>
            <Balance>R$ 12.386,00</Balance>
          </BalanceContainer>

          <AntDesign name="gift" size={30} color="#10c86e" />
        </Header>
        <Suggestions />
      </Container>
    </Wrapper>
  );
}