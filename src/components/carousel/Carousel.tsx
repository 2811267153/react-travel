import React from 'react';
import { Carousel, Image } from 'antd';
import "./index.css"
import Image1 from "../../assets/image/2.jpg"
import Image2 from "../../assets/image/3.jpg"
import Image3 from "../../assets/image/4.jpg"
import Image4 from "../../assets/image/5.jpg"
import Image5 from "../../assets/image/6.jpg"
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
export const CarouselS: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange}>
      <div className='image-warp'><Image rootClassName='image-content' src={Image1}></Image></div>
      <div className='image-warp'><Image rootClassName='image-content' src={Image2}></Image></div>
      <div className='image-warp'><Image rootClassName='image-content' src={Image3}></Image></div>
      <div className='image-warp'><Image rootClassName='image-content' src={Image4}></Image></div>
      <div className='image-warp'><Image rootClassName='image-content' src={Image5}></Image></div>
    </Carousel>
  );
};


