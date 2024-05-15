/**
 * @format
 */

// Only for test and demo
import {AppRegistry} from 'react-native';
import BarcodeGenerator from './playground';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => BarcodeGenerator);
