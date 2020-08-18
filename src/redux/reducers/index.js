import { UPDATE_ACTIVE_PRODUCT, UPDATE_PRODUCTS } from '../actions'

const productInitialState = {
    activeProduct: undefined,
    products: [],
};

const rootReducer = (state = productInitialState, action) => {
    switch (action.type) {
        case (UPDATE_ACTIVE_PRODUCT):
            return Object.assign({}, state, {
                activeProduct: action.payload.activeProduct,
            });
        case (UPDATE_PRODUCTS):
            return Object.assign({}, state, {
                products: action.payload.products,
            });
        default:
            return state;
    }
};

export default rootReducer;
