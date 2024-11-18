import React, { useState } from 'react'
import { AddToCartButton, ButtonWrapper, BuyButton, ColorButton, ColorOptions, CurrentPrice, OriginalPrice, ProductImage, QuantityButton, QuantityControl, QuantityDisplay, QuantityWrapper, SizeButton, SizeOptions, WrapperColor, WrapperDetails, WrapperImage, WrapperPrice, WrapperProduct, WrapperSize, WrapperTitle } from './style';

const ProductDetailsComponent = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState("Light Blue");
  const [isOutOfStock, ] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const sizes = ["Size 2", "Size 3", "Size 4"];
  const colors = ["Light Blue", "Beige", "Black", "Gray", "Pink"];
  const price = 570400;
  const originalPrice = 620000;
  const handleAddToCart = () => {
    console.log("Đã thêm vào giỏ hàng");
  };

  const handleBuyNow = () => {
    console.log("Đã mua ngay");
  };
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  return (
    <WrapperProduct>
      <WrapperImage>
        <ProductImage
          src="https://levents.asia/cdn/shop/files/LightBlue_LHZBXCLE101UB0202FW24_1.jpg?v=1729511098&width=437"
          alt="Levents Classic Zipper Hoodie"
        />
      </WrapperImage>
      <WrapperDetails>
      <WrapperTitle>Levents® Classic Zipper Hoodie Boxy 2.0</WrapperTitle>
      <WrapperPrice>
        <CurrentPrice>{price.toLocaleString()} VND</CurrentPrice>
        <OriginalPrice>{originalPrice.toLocaleString()} VND</OriginalPrice>
      </WrapperPrice>

      <WrapperColor>
        <p>Color: {selectedColor}</p>
        <ColorOptions>
          {colors.map((color, index) => (
            <ColorButton
              key={index}
              active={selectedColor === color}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </ColorButton>
          ))}
        </ColorOptions>
      </WrapperColor>

      <WrapperSize>
        <p>Size</p>
        <SizeOptions>
          {sizes.map((size, index) => (
            <SizeButton
              key={index}
              active={selectedSize === size}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </SizeButton>
          ))}
        </SizeOptions>
      </WrapperSize>
      <QuantityWrapper>
        <p>Số lượng</p>
        <QuantityControl>
          <QuantityButton onClick={handleDecrease}>-</QuantityButton>
          <QuantityDisplay>{quantity}</QuantityDisplay>
          <QuantityButton onClick={handleIncrease}>+</QuantityButton>
        </QuantityControl>
      </QuantityWrapper>
      
      
       <ButtonWrapper>
       <AddToCartButton onClick={handleAddToCart}>Thêm vào giỏ hàng</AddToCartButton>
        <BuyButton onClick={handleBuyNow} disabled={isOutOfStock}>
            {isOutOfStock ? "Out of stock" : "Mua ngay"}
        </BuyButton>
      </ButtonWrapper>
      </WrapperDetails>
    </WrapperProduct>
  );
}

export default ProductDetailsComponent