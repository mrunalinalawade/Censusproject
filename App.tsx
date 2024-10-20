import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RouteNavigation from './src/Navigations/RouteNavigation';
import { Provider } from 'react-redux';
import { store } from './src/Components/Redux/Store';


const App = () => {
  return (
    <>
      <NavigationContainer>
      <Provider store={store}>
        <RouteNavigation />
        </Provider>
      </NavigationContainer>
    </>
  );
};

export default App;
