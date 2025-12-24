import React from 'react'
import ShopMenu from '../pages/ShopMenu'

import NewLetter from '../components/NewLetter/NewLetter'

import Hero from '../components/Hero/Hero'

import PopularBrands from '../components/popularbrand/PopularBrands'
import DetailProduct from '../Router/DetailProduct'
import NewCollection from '../components/NewCollection/NewCollection'
import Popular from '../components/Popular/Popular'
import Footer from '../components/Footer/Footer'
function Home() {
  return (
    <>

      <Hero/>
           <PopularBrands/>
      <ShopMenu/>
  <NewCollection/>
 
 <div>
 
             <Popular/>
          <Footer/>
      
 </div>
    </>
  );
}

export default Home;

