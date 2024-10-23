import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './src/Navigations/RouteNavigation';
import { Provider } from 'react-redux';
import { store } from './src/Components/Redux/Store';
// import InternetIndicator from './src/assets/InternetIndicator';+



const App = () => {
  return (
    <>
      <NavigationContainer>
      <Provider store={store}>
        <RouteNavigation />
        </Provider>
        {/* <InternetIndicator /> */}
      </NavigationContainer>
    </>
  );
};

export default App;
