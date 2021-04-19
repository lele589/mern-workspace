import styled from 'styled-components';

export const FlexDiv = styled.div`
    display: flex;
    justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
    align-items: ${({ alignItems }) => alignItems ? alignItems : 'center'};
`;

export const LayoutColumn = styled.div`
  border-radius: 10px;
  padding: ${({ padding }) => padding ? padding : '20px'};
  width: ${({ width }) => width ? width : '100%'};
  background-color: ${({ bgColor }) => bgColor ? bgColor : '0'};
  color: ${({ color }) => color ? color : '#000'};
`;

export const Title = styled.h1`
   font-size: 40px;
   font-weight: 500;
`;

export const SecondaryTitle = styled.h2`
   font-size: 25px;
   font-weight: 500;
   margin: 0;
   padding-bottom: 20px;
`;

export const ScrollDiv = styled.div`
    overflow: auto;
    max-height: ${({ height }) => height ? height : '400px'};
    background:
        linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
        radial-gradient(50% 0, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(50% 100%, farthest-side, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
    background:
        linear-gradient(white 30%, rgba(255, 255, 255, 0)), linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,
        radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)), radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, .2), rgba(0, 0, 0, 0)) 0 100%;
    background-repeat: no-repeat;
    background-color: white;
    background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
    background-attachment: local, local, scroll, scroll;
`;

export const Button = styled.button`
  border: 0;
  background-color: orange;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  border-radius: 15px;
`;