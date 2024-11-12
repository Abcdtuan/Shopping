import React from 'react'
import Slider from 'react-slick'
import { Image } from 'antd'

const SliderComponent = ({arrImages}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      };
  return (
    <div>
        <Slider {...settings}>
            {arrImages.map((image) =>{
                return(
                    <Image src= {image} alt="slide"  preview={false} style={{width:'100%'}}/>
                )
            })}

        </Slider>
    </div>
  )
}

export default SliderComponent