import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/pages/Home';
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga';
import appState from './src/redux/reducers'
import rootSaga from './src/sagas';

export function App() {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    appState,
    applyMiddleware(sagaMiddleware)
  )
  sagaMiddleware.run(rootSaga)

  const action = (type, payload) => store.dispatch({ type, payload })
  window.dispatchAction = action;
  
  React.useEffect(() => {
    window.dispatchAction('FETCH_PRODUCTS')
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Home />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
