import { all, put, takeLatest } from 'redux-saga/effects';
import mockProducts from '../../assets/products.json';

function* fetchProducts() {
  const products = mockProducts;
  if (products) {
    yield put({
      type: 'UPDATE_PRODUCTS',
      payload: { products: products },
    })
  }
}

function* watchFetchProducts() {
  yield takeLatest('FETCH_PRODUCTS', fetchProducts);
}

export default function* rootSaga() {
  yield all([
    watchFetchProducts()
  ]);
}