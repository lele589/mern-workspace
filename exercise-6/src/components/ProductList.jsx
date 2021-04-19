import { useState, useEffect } from 'react';

import { products } from './../data/products';
import { ScrollDiv } from './UI/main';
import ProductItem from './ProductItem';

function ProductList ({ setPurchasedProducts, purchasedProducts }) {

    const [addedProduct, setAddedProduct] = useState({});

    useEffect(() => {
       if(Object.keys(addedProduct).length) {
        setPurchasedProducts([
            ...purchasedProducts,
            addedProduct
        ]);
       }
      }, [addedProduct])

    return(
        <ScrollDiv height="600px">
            {products.map((product, index) => (
                <ProductItem
                    index={index}
                    key={product.id}
                    product={product}
                    setAddedProduct={setAddedProduct}
                />
            ))}
        </ScrollDiv>
    );
}

export default ProductList;