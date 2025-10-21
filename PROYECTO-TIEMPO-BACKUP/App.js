import * as React from "react"
import { NavigationContainer } from '@react-navigation/native';
import MainStack from "./src/navigate/mainStack";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
