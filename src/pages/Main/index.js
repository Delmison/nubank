import React from 'react';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

//import { Container, Content, CardHeader, CardContent, CardFooter, Description, Annotation, Title} from './styles';
import {
  Container,
  Content,
  Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation, SafeAreaView,
} from './styles';

export default function Main(){
  return(
    <Container >
      <Header />

      <Content>
      <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponivel</Title>
            <Description>R$ 197.611,28</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 100,00 recebida hoje as 14:00h
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}

