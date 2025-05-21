import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNavigator from './navigation/navigators/DrawerNavigator.tsx';
import { AdoptionProvider } from './context/AdoptionContext.tsx';


function AppContent() {
  return (
    <SafeAreaProvider>
      <AdoptionProvider>
        <DrawerNavigator />
      </AdoptionProvider>
    </SafeAreaProvider>

  )
}


export default AppContent;
