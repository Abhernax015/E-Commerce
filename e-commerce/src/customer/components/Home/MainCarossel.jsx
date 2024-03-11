import React from 'react';
import { MainCarosselData } from './MainCarosselData';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';

const MainCarossel = () => {
    const items = MainCarosselData.map((item)=><img className='cursor-pointer' role='presentation' src={item.image} alt=""/>)
  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
    />
  )
}

export default MainCarossel