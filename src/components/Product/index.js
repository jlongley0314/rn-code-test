import * as React from 'react';
import { object } from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';


export function Product(props) {
    Product.propTypes = {
        product: object,
    };

    const { product } = props;

    return (
        <View style={styles.product}>
          <Image 
            source={{
              uri: product.image,
            }}
            style={styles.image}  
          />
          <View style={styles.infoBar}>

          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  product: {
    height: 150,
    width: 200,
    margin: 10,
  },
  image: {
    flex: 1,
    borderRadius: 15,
    aspectRatio: 4/3,
  },
  infoBar: {
    position: 'absolute',
    bottom: 0,
    height: 30,
    width: 200,
    backgroundColor: 'black',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  }
});

export default Product;
