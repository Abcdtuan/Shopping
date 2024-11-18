import styled from "styled-components";

export const WrapperProduct = styled.div`
  display: flex;
  height: 800px;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #fff;
`;

export const WrapperImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 400px;
  border-radius: 10px;
`;

export const WrapperDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WrapperTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const WrapperPrice = styled.div`
  display: flex;
  font-size: 15px;
  gap: 10px;
  align-items: baseline;
  margin-bottom: 20px;
`;

export const CurrentPrice = styled.span`
  color: #e53935;
  font-weight: bold;
  font-size: 1.2em;
`;

export const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: #999;
`;

export const WrapperColor = styled.div`
  margin: 20px 0;
  font-size: 15px;
`;

export const ColorOptions = styled.div`
  display: flex;
  gap: 10px;
`;

export const ColorButton = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#e0f7fa" : "#fff")};
  border-color: ${(props) => (props.active ? "#00acc1" : "#ccc")};
`;

export const WrapperSize = styled.div`
  margin: 20px 0;
  font-size: 15px;
`;

export const SizeOptions = styled.div`
  display: flex;
  gap: 10px;
`;

export const SizeButton = styled.button`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#e0f7fa" : "#fff")};
  border-color: ${(props) => (props.active ? "#00acc1" : "#ccc")};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;
export const QuantityWrapper = styled.div`
  display: flex;
  font-size: 15px;
  align-items: center;
  justify-content: space-between;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const QuantityButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #000;
  background-color: #fff;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
`;

export const QuantityDisplay = styled.span`
  width: 40px;
  text-align: center;
  font-size: 16px;
`;

export const AddToCartButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #f5f5f5;
  color: #000;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;

export const BuyButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #e53935;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  margin-top: 20px;
  &:disabled {
  background-color: black;
  cursor: not-allowed;
  }
`;
