
import { Card } from 'react-native-elements'
import { useState, useEffect } from 'react'
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import Menu from '../components/Menu'

const Produtos = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3050/produtos')
      .then((response) => response.json())
      .then((json) => setData(json))
  }, []);

      return (
  <View>
    <Menu navigation={props.navigation}/>
    <Card>
    <FlatList        
        data={data}
        keyExtractor={({ id }) => id}
        numColumns={1}
        renderItem={({item})=>(

        <View >
        <Text style={styles.titulo}>{item.descricao}</Text>
        <View style={styles.card}>
        <Image style={styles.imagem} src={require(`./images/produtos/${item.imagens}`)} />
        
        <View style={styles.precos}>
          <Text style={styles.precoinicial}>De: R$ {item.preco}</Text><br />
          <Text style={styles.precofinal}> Por: R$ {item.precofinal}</Text>
        </View>
        
        </View>
        
        <Card.Divider />
        </View>
      
        )}
        
      />
    </Card>

  </View>
)};

const styles = StyleSheet.create({ 
  imagem:{
    width: 100,
    height: 100
  },
  card:{
    flexDirection: 'row',
    textAlign: 'center'
  },
  precos:{
    flexDirection: 'column',
    marginTop: 20,
    padding: 0,
    
  },
  precoinicial:{
    fontSize: 15,
    color: 'gray'
  },
  precofinal:{
    fontSize: 25,
    color: 'red'
  },
  titulo: {
    marginBottom: 10
  }
});
export default Produtos;








