import * as React from 'react';
import { object } from 'prop-types';
import { Image, StyleSheet, View } from 'react-native';
import InfoBar from './info_bar';


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
          <InfoBar
            description={product.short_description}
            discount={product.discount}
            discountType={product.discount_type}
            name={product.name}
            price={product.price}
          />
        </View>
    );
};

const styles = StyleSheet.create({
  product: {
    height: 281.25,
    width: 375,
    margin: 10,
  },
  image: {
    flex: 1,
    borderRadius: 15,
    aspectRatio: 4/3,
  },
});

export default Product;
