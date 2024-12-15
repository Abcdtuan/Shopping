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
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
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