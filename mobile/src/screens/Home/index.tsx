import { Image, FlatList } from 'react-native';

import { styles } from './styles';


import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { GameCard, GameCardProps } from '../../components/GameCard';


import { useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';



export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]); //precisa desse estado apra o react saber quando foi atualizado, set é a propriedade que altera a variavel

 const navigation = useNavigation();

  //roteamento para game
  function handleOpenGame({id, title, bannerUrl}: GameCardProps){
    navigation.navigate('game', {id, title, bannerUrl})
  }

  useEffect(() => {
    fetch('http://192.168.0.101:3333/games')
    .then(response => response.json())
    .then(data => setGames(data))
  }, [])



  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image 
          source={logoImg}
          style={styles.logo}
        />
        <Heading 
          title='Econtre seu duo!'
          subtitle='seleccione o game que deseja jogar'
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <GameCard 
                data={item}
                onPress={() => handleOpenGame(item)}
              />
          )}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}