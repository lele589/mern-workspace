import styled, { css } from 'styled-components';
import { FlexDiv, LayoutColumn, Button } from './UI/main';

const ItemDiv = styled.div`
    ${({ index }) => index !== 0 && css`
        border-top: 1px solid #eee;
    `
    }
`;

const ThumbImg = styled.img`
  width: 100%;
`;

const Name = styled.h5`
    font-size: 18px;
    font-weight: 600;
    padding: 0 0 5px 0;
    margin: 0;
`;

const Description = styled.h5`
    font-size: 14px;
    font-weight: 400;
    margin: 0;
    padding: 0 0 5px 0;
`;

const Price = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    padding: 0 0 5px 0;
`;

function ProductItem ({ product, index, setAddedProduct }) {

    const handleClick = (productObj) => {
        setAddedProduct({
            id: productObj.id,
            name: productObj.name,
            price: productObj.price,
        });
    }

    return(
        <ItemDiv index={index}>
            <FlexDiv>
                <LayoutColumn width="25%">
                    <ThumbImg src={product.image} alt={product.name}/>
                </LayoutColumn>
                <LayoutColumn width="75%">
                    <Name>{product.name}</Name>
                    <Description>{product.description}</Description>
                    <FlexDiv justifyContent="space-between">
                        <Price>{product.price}€</Price>
                        <Button onClick={() => handleClick(product)}>Añadir</Button>
                    </FlexDiv>
                </LayoutColumn>
            </FlexDiv>
        </ItemDiv>
    );
}

export default ProductItem;