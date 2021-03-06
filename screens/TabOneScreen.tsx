import { Dimensions, Image, StyleSheet } from 'react-native';
import { ScreenContainer } from 'react-native-screens';

import EditScreenInfo from '../components/EditScreenInfo';
import LoginScreen from '../components/LoginScreen';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <LoginScreen />
  );
}