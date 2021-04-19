import { useState, useEffect } from 'react';

import styled from 'styled-components';
import { FlexDiv, LayoutColumn } from './UI/main';

const TableHead = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: white;
`;


function ShoppingCart ({purchasedProducts}) {

    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        purchasedProducts.map(item => {
            setTotalPrice(totalPrice + item.price);
        });
    }, [purchasedProducts])

    return(
        <>
            <FlexDiv>
                <LayoutColumn padding="10px 0" width="80%">
                    <TableHead>Producto</TableHead>
                </LayoutColumn>
                <LayoutColumn padding="10px 0" width="20%">
                    <TableHead>Precio</TableHead>
                </LayoutColumn>
            </FlexDiv>
            <hr/>
            {purchasedProducts.map((item, index) => (
                <FlexDiv key={index} alignItems="flex-start">
                    <LayoutColumn padding="10px 0"  width="80%">
                            <div>{item.name}</div>
                    </LayoutColumn>
                    <LayoutColumn padding="5px 0" width="20%">
                        <div>{item.price}€</div>
                    </LayoutColumn>
                </FlexDiv>
            ))}
            <hr/>
            <FlexDiv>
                <LayoutColumn padding="10px 0" width="80%">
                    <TableHead>Total</TableHead>
                </LayoutColumn>
                <LayoutColumn padding="10px 0" width="20%">
                    <TableHead>{totalPrice}€</TableHead>
                </LayoutColumn>
            </FlexDiv>
        </>
    );
}

export default ShoppingCart;