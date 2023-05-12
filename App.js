import { useState } from "react";
import * as Font from "expo-font";
// AppLoading is deprecated. The implementation og SplashScreen requires additional setup.
import AppLoading from "expo-app-loading";

import StackNavigator from "./navigation/StackNavigator";

import Home from "./screens/Home";

const loadFonts = () => Font.loadAsync({
  'Nunito': require('./assets/fonts/Nunito-Regular.ttf'),
  'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [isReady, setIsReady] = useState(false);

  return isReady ?
    <StackNavigator /> :
    <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} onError={console.warn} />;
}