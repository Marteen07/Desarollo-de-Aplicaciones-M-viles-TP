import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabThreeScreen (){
    return(
    
        <ParallaxScrollView
              headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
              headerImage={
                <IconSymbol
                  size={310}
                  color="#808080"
                  name="book.fill"
                  style={styles.headerImage}
                />
              }>
    <ThemedText type="title">Educación</ThemedText>
    <ThemedText type="subtitle">Educación primaria:</ThemedText>
    <ThemedText>-Ensa Alejandro Korn (2014-2019) </ThemedText>
    <ThemedText type="subtitle">Educación secundaria:</ThemedText>
    <ThemedText>-E.E.S.T.N°2 San Vicente (2020 - en curso)</ThemedText>
    <ThemedText>-Orientación en Programación: (2023 - en curso)</ThemedText>
    <ThemedText type="subtitle">Educación de Inglés:</ThemedText>
    <ThemedText>-Aya Alejandro Korn (2015 - 2023)</ThemedText>



    </ParallaxScrollView>
    




);
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});