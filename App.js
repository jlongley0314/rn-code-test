import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/redux/reducers'
import rootSaga from './src/sagas';

export function App() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)

  const action = (type, payload) => store.dispatch({ type, payload })
  window.dispatchAction = action;
  
  React.useEffect(() => {
    window.dispatchAction('FETCH_PRODUCTS')
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Home />
    </NavigationContainer>
  );
}

export default App;
