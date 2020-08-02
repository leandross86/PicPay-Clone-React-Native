import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { 
  Container, 
  Header, 
  Title, 
  Card, 
  CardHeader, 
  Avatar, 
  Description, 
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divide,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../../assets/images/avatar.png'

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@joaosilva</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Leandro Souza</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>180,00</Value>
            <Divide />

            <Feather name="lock" color="#fff" size={14}/>
            <Date>há 2 anos</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons name="comment-outline" size={14} color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  )
}