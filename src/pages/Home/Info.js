import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export function Info(props) {
  Info.propTypes = {
    products: array,
  };

  const { products } = props;

  return (
    <SafeAreaView>
      
    </SafeAreaView>
  )
}

export function mapStateToProps(state) {
  return {
    products: state.appState.products,
  };
}

export default connect(mapStateToProps)(Info);
