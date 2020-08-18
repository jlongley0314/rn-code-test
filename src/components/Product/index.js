import { object } from 'prop-types';
import { View } from 'react-native';

export function Product(props) {
    Product.propTypes = {
        product: object,
    };

    return (
        <View>
        </View>
    );
};

export function mapStateToProps(state) {
  return {
    products: state.appState.products,
  };
}

export default connect(mapStateToProps)(Product);
