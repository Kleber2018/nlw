//rnbc

import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../components/Background';

import {useRoute} from '@react-navigation/native'
import {TouchableOpacity, View, Image, FlatList, Text} from 'react-native'

import { styles } from './styles';
import { GameParams } from '../../@types/@navigation';
import { useNavigation } from '@react-navigation/native'

import { Entypo } from '@expo/vector-icons'


import { THEME } from '../../theme';

import logoImg from '../../assets/logo-nlw-esports.png'
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch'


export function Game() {
     const [duos, setDuos] = useState<DuoCardProps[]>([]);
     const [discordDuoSelected, setDiscordDuoSelected] = useState('')

     const navigation = useNavigation();
     const route = useRoute();
     const game = route.params as GameParams;
     
     
     function handleGoBack(){
          navigation.goBack()
     }

     async function getDiscordUser(adsId: string){
          // fetch(`http://192.168.0.101:3333/ads/${adsId}/discord`)
          // .then(response => response.json())
          // .then(data => console.log(data));
          setDiscordDuoSelected('dd')
     }
     
     useEffect(() => {
          fetch(`http://192.168.0.101:3333/games/${game.id}/ads`)
          .then(response => response.json())
          .then(data => setDuos(data))
        }, [])

     return (
     <Background>
          <SafeAreaView style={styles.container}>
               <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                         <Entypo
                              name="chevron-thin-left"
                              color={THEME.COLORS.CAPTION_300}
                              size={20}
                         />
                    </TouchableOpacity>
                    <Image 
                         source={logoImg}
                         style={styles.logo}
                    />
                    <View style={styles.right} />
               </View>

               <Image 
                    source={{uri: game.bannerUrl}}
                    style={styles.cover}
                    resizeMode="cover" //para encaixar melhor a imagem
               />


               <Heading 
                    title={game.title}
                    subtitle='Conecte-se e comece a jogar!'
               />
               <FlatList 
                    data={duos}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                         <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
                    )}
                    horizontal
                    style={styles.containerList}
                    contentContainerStyle={[duos.length > 0 ? styles.contentList : {flex: 1, alignItems: 'center', justifyContent: 'center'}]}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={()=>(
                         <Text style={styles.emptyListText}>N??o h?? an??ncios publicados para esse jogo</Text>
                    )}

               />
               <DuoMatch 
                    visible={discordDuoSelected.length > 0} 
                    discord="sss" 
                    onClose={() => setDiscordDuoSelected('') } //esse onclose est?? sendo executado pelo modal DuoMatch
                    />
          </SafeAreaView>
    </Background>
  );
}