import * as React from 'react';
import { string } from 'prop-types';
import { Image, StyleSheet, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function InfoBar(props) {
    InfoBar.propTypes = {
        description: string,
        discount: string,
        discountType: string,
        name: string,
        price: string,
    };

    const { description, discount, discountType, name, price } = props;

    const getDiscountText = () => {
        const discountedPrice = (discountType === 'amount')
          ? (price - discount) / 100
          : (price - ((discount / 100) * price)) / 100
        return  (
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            <Text style={styles.discountText}>
              {(price / 100).toFixed(2)}
            </Text>
            <Text style={styles.productText}>
              {(discountedPrice === 0) ? 'Free' : discountedPrice.toFixed(2)}
            </Text>
          </View>
        )
      }

      return (
        <View style={styles.infoBar}>
            <View style={styles.infoBarLeft}>
                <Text style={styles.productText}>{name}</Text>
                {
                (discount) 
                    ? getDiscountText()
                    : <Text style={styles.productText}>{(price === 0) ? 'Free' : (price / 100).toFixed(2)}</Text>
                }
                <Text style={{ color: 'rgb(154, 154, 154)' }}>{description}</Text>
            </View>
            <View style={styles.infoBarRight}>
                <MaterialIcons name={'account-circle'} size={30} color={'white'} />
            </View>
          </View>
      );
};

const styles = StyleSheet.create({
    avatarImage: {
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    discountText: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        color: 'rgb(154, 154, 154)',
        marginRight: 10,
    },
    infoBar: {
        position: 'absolute',
        bottom: 0,
        height: 125,
        width: 375,
        backgroundColor: 'rgba(36, 37, 37, 0.9)',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        padding: 10,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row'
      },
    infoBarLeft: {
        display: 'flex',
        flexDirection: 'column',
        flex: 8,
    },
    infoBarRight: {
        flex: 1,
    },
    productText: {
        color: 'white',
        marginBottom: 5,
    },
})

export default InfoBar;