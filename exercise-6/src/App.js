import { useState } from 'react';

import './App.css';
import { FlexDiv, Title, SecondaryTitle, LayoutColumn } from './components/UI/main';

import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  return (
    <div className="App">
      <Title>Proceso de compra</Title>

      <FlexDiv alignItems="flex-start">
        <LayoutColumn width="60%">
          <SecondaryTitle>Elige los productos</SecondaryTitle>
          <ProductList setPurchasedProducts={setPurchasedProducts} purchasedProducts={purchasedProducts} />
        </LayoutColumn>
        
        <LayoutColumn width="40%" bgColor="#A0B2BC" color="white">
          <SecondaryTitle>Carrito de la compra</SecondaryTitle>
          { purchasedProducts.length === 0
            ?
            <p>El carrito está vacío</p>
            :
            <ShoppingCart purchasedProducts={purchasedProducts}/>
          }
        </LayoutColumn>
      </FlexDiv>
    </div>
  );
}

export default App;
