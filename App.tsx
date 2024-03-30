//b5
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './ProductList';
import Cart from './Cart';
const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];
const App61 = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ProductList products={products} />
        <Cart />
      </SafeAreaView>
    </Provider>
  );
};
export default App61;