import { ExternalLink } from '@/components/external-link';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function TabFourScreen (){
    return (
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
          headerImage={
            <IconSymbol
              size={310}
              color="#808080"
              name="phone.fill"
              style={styles.headerImage}
            />
          }>
          <ThemedText type="title">Contacto</ThemedText>
          <ThemedText type="subtitle">Instagram:</ThemedText> 
          <ThemedText>martiherrera._</ThemedText>
          <ThemedText type="subtitle">Email:</ThemedText>
          <ThemedText>martyherrera95@gmail.com</ThemedText>
          <ThemedText type="subtitle">Telefono:</ThemedText> 
          <ThemedText>+54 9 11 1234-5678</ThemedText>
          <ThemedText type="subtitle">Perfil de Github:</ThemedText>
          <ExternalLink href="https://github.com/Marteen07">
          <button
          style={styles.boton}>Perfil</button>
        </ExternalLink>
        </ParallaxScrollView>
      );
    }

    const styles = StyleSheet.create({
      headerImage: {
        color: '#808080',
        bottom: -35,
        left: -35,
        position: 'absolute',
      },
      titleContainer: {
        flexDirection: 'row',
        gap: 8,
      },
      boton: {
        backgroundColor: 'black',
        color: 'white',
        height: 40,
        width: 80,
      }
    });
    