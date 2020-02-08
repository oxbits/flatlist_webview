import { AppRegistry, Platform } from 'react-native';
import App from './App';

import 'react-native-gesture-handler';


AppRegistry.registerComponent('heyo_wfl', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('heyo_wfl', { rootTag });
}
