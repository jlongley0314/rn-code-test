export const UPDATE_ACTIVE_PRODUCT = 'UPDATE_ACTIVE_PRODUCT'
export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS'
  
export function updateActiveProduct(product) {
  return { type: UPDATE_ACTIVE_PRODUCT, product }
} 

export function updateProducts(products) {
  return { type: UPDATE_PRODUCTS, products }
}
