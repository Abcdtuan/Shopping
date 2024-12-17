import React from 'react'
import TypeProducts from '../../components/TypeProducts/TypeProducts'
import {  WrapperTypeProducts } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import  slide_1_img  from '../../assets/images/slide_1_img.webp';
import  slide_2_img  from '../../assets/images/slide_2_img.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
import Footer from '../../components/FooterComponent\'/FooterComponent';


const HomePage = () => {
  const arr = ['Quần Nam', 'Áo Nam', 'Quần Nữ', 'Áo Nữ'];
  return (
    <div style={{height: '2000px'}}>
      <WrapperTypeProducts>
        {arr.map((item) =>
        {
          return (
            <TypeProducts name = {item} key={item} />
          )
        })}
      </WrapperTypeProducts>
      
      <SliderComponent arrImages={[slide_1_img, slide_2_img]}/>
      <div style={{ marginTop: '50px', display:'flex', alignItems: 'center', gap: '51px' }}>
        <CardComponent poster_url="https://levents.asia/cdn/shop/files/LightBlue_LHZBXCLE101UB0202FW24_1.jpg?v=1729511098&width=437" name_card="Classic Zipper Hoodie Boxy 2.0" price="400.000" />
        <CardComponent poster_url="https://levents.asia/cdn/shop/files/VintageBlack_LSHOVCOB355UD0102SS24_1.jpg?v=1724224942&width=437" name_card="Striped Baseball Jersey" price="570.000"/>
        <CardComponent poster_url="https://levents.asia/cdn/shop/files/Tan_LTSSOCOA420UT0400FW24_1.jpg?v=1729691307&width=437" name_card="My Garden Semi-Oversize Tee" price="4200.000"/>
        <CardComponent poster_url="https://levents.asia/cdn/shop/files/Blue_LHOOVCOD417UB0102FW24_1.jpg?v=1727362791&width=437" name_card="Crocodile Hoodie" price="630.000"/>
      </div>
      <div 
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh',
        }}
      >
        <button  style={{
          marginTop: '20px',
          width: '240px',
          height: '60px',
          border:'1px solid #ccc ',
          color: '#ffff',
          backgroundColor:'black',
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex'
        }}  >Xem Thêm</button>
      </div>
      <div>
        <Footer/>
      </div>
      

    </div>
    
  )
}

export default HomePage