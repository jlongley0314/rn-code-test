import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView } from 'react-native';
import { array } from 'prop-types';
import { FlatList } from 'react-native-gesture-handler';
import { Product } from '../../components/Product';

export function Info(props) {
  Info.propTypes = {
    products: array,
  };

  const { products } = props;

  const getProductsByCategory = (category) => {
    return products.filter((product) => product.category === category).sort((a, b) => a.order - b.order);
  }

  return (
    <SafeAreaView>
      <ScrollView>
        {products && 
          <>
            <FlatList
              data={getProductsByCategory('Pirate')}
              keyExtractor={(item, index) => item.id}
              horizontal
              renderItem={(rowData) => {
                return <Product product={rowData.item} />
            }}
            />
            <FlatList
              data={getProductsByCategory('Sci-Fi')}
              keyExtractor={(item, index) => item.id}
              horizontal
              renderItem={(rowData) => {
                return <Product product={rowData.item} />
              }}
            />
            <FlatList
              data={getProductsByCategory('Culinary')}
              keyExtractor={(item, index) => item.id}
              horizontal
              renderItem={(rowData) => {
                return <Product product={rowData.item} />
              }}
            />
          </>
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Info);
