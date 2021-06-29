
import { Card, Tile } from 'react-native-elements'
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Menu from '../components/Menu'

const Lojas = (props) => {
    const data = [
        {
            endereco: 'Avenida do Estado, 5533',
            complemento: 'Sala 32',
            cidade: 'São Paulo',
            foto: 'saopaulo.jpg'
        },
        {
            endereco: 'Centro Empresarial Mourisco | Praia de Botafogo, 501',
            complemento: '5º e 6º Andar',
            cidade: 'Rio de Janeiro',
            foto: 'riodejaneiro.jpg'
        },
        {
            endereco: 'Avenida Conde de Boa Vista, 800',
            complemento: '3º, 8º e 9º Andar',
            cidade: 'Recife',
            foto: 'recife.jpg'
        }
    ]

      return (
  <View>
    <Menu navigation={props.navigation}/>

  {
    data.map((d, i) => {
      return (
        <Card >
        <Tile key={i}
        imageSrc={require(`../../assets/${d.foto}`)}
        imageContainerStyle={{width: 310, backgroundColor: 'rgba(120, 120, 120, 0.550)'}}
        title={d.cidade}
        titleStyle={{fontSize: 40, }}
        caption={d.endereco}
        featured
      >
        </Tile>
        </Card>

      );
    })
}
  </View>
)};

const styles = StyleSheet.create({ 
    imagem:{
        width: 310,
        height: 150
    },
    nome:{
        textAlign: 'center',
        fontSize: 50,
        fontFamily: 'sans-serif',

    }
})

export default Lojas;