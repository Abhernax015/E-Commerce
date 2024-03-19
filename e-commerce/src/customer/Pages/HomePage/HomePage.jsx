import React from 'react'
import MainCarossel from '../../components/Home/MainCarossel'
import HomeSectionCarossel from '../../components/HomeSectionCarossel/HomeSectionCarossel';
import {mens_kurta} from "../../../Data/mens_kurta";

const HomePage = () => {
  return (
    <div>
        <MainCarossel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarossel data={mens_kurta} section={"Men's Clothes"}/>
          <HomeSectionCarossel data={mens_kurta} section={"Men's Shoes"}/>
          <HomeSectionCarossel data={mens_kurta} section={"Men's Shirt"}/>
          <HomeSectionCarossel data={mens_kurta} section={"Women's Clothes"}/>
          <HomeSectionCarossel data={mens_kurta} section={"Women's Dress"}/>
        </div>
    </div>
  )
}

export default HomePage