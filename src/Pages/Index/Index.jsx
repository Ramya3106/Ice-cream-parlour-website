import React from 'react'
import Navbar from '../../Components/Navbar'
import heroImage from './../../assets/baby.png'
import element01 from './../../assets/decorate1.png'
import element02 from './../../assets/decorate2.png'
import element03 from './../../assets/decorate3.png'
import element04 from './../../assets/decorate4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import slideImage01 from './../../assets/icecream1.png'
import slideImage02 from './../../assets/icecream2.png'
import slideImage03 from './../../assets/icecream3.png'
import slideImage04 from './../../assets/icecream4.png'
import slideImage05 from './../../assets/icecream5.png'
import { Autoplay } from 'swiper/modules'
import slideImage06 from './../../assets/decorate5.png'

const Index = () => {
  return (
    <>
    <div className='flex flex-col gap-[20px] relative min-h-[90vh] bg-[#ffded1]'>
    <Navbar />
    <div className='w-full px-[12%] pt-[100px] flex gap-[20px] flex-col lg:flex-row'>
      <div className='flex flex-col lg:w-[50%] w-full items-start gap-4 justify-center'>
        <small className='text-4xl font-dancing'>Best Seller</small>

        <h2 className='text-7xl 2xl:text-8xl font-medium text-red-600 font-kalnia'>Ice Cream <br/>Novelties</h2>

        <p className='text-lg'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, enim.</p>

        <button className='btn header-btn'>Shop Now<i className='ri-arrow-right-line'></i></button>
      </div>
      <div className='lg:w-[50%] full flex items-center justify-center z-[1] relative md:absolute right-0 bottom-0'>
      <img src={heroImage} className="w-full sm:w-[400px] 2xl:w-[600px] "  alt="header-image" />
      </div>

      <img src={element01} alt="element1" className='mix-blend-multiply w-[80px] h-[80px] absolute -top-[-80%] left-5' />
      <img src={element03} alt="element2" className='mix-blend-multiply w-[80px] h-[80px] absolute -top-[-20%] lg:left-[90%] left-[65%] hidden sm:flex'/>
      <img src={element02} alt="element3" className='mix-blend-multiply w-[90px] h-[90px] absolute -top-[-10%] left-5 sm:w-[60px] sm:h-[60px] ' />
      <img src={element04} alt="element3" className='mix-blend-multiply w-[90px] h-[90px] absolute -top-[-80%] sm:-top-[80%] lg:left-[85%] left-[-75%] z-1' />
    
      
    </div>
    
    
    </div>
    {/*Category Section */}

  <section id='category'>
    <h3 className='section-header'>Shop by Category</h3>
    <Swiper className='w-full mt-[80px]'
    slidesPerView={5}
    spaceBetween={10}
    autoplay={
      {
        delay:2500,
      }
    }
    modules={[Autoplay]}
    loop={true}
    breakpoints={{
      0:{
        slidesPerView:1.5,
      },
      768:{
        slidesPerView:2.5,
      },
      1024:{
        slidesPerView:4.5,
      },
    }}>
      
      <SwiperSlide>
        <div className='flex flex-col items-center group'>
          <img src={slideImage01} alt="slider-image" className='w-[120px] h-[120px]w-full rounded-full mb-4 px-15% item-center ' />
          <span className='slide_text group-hover:hidden'>Ice Cream Bar</span>
          <span className='text-center w-full text-base hidden group-hover:inline-block'>2 Products</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col items-center group'>
          <img src={slideImage02} alt="slider-image" className='w-[120px] h-[120px]w-full rounded-full mb-4 px-15% item-center ' />
          <span className='slide_text group-hover:hidden'>Ice Cream Bar</span>
          <span className='text-center w-full text-base hidden group-hover:inline-block'>2 Products</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col items-center group'>
          <img src={slideImage03} alt="slider-image" className='w-[120px] h-[120px]w-full rounded-full mb-4 px-15% item-center ' />
          <span className='slide_text group-hover:hidden'>Ice Cream Bar</span>
          <span className='text-center w-full text-base hidden group-hover:inline-block'>2 Products</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col items-center group'>
          <img src={slideImage04} alt="slider-image" className='w-[120px] h-[120px]w-full rounded-full mb-4 px-15% item-center ' />
          <span className='slide_text group-hover:hidden'>Ice Cream Bar</span>
          <span className='text-center w-full text-base hidden group-hover:inline-block'>2 Products</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col items-center group'>
          <img src={slideImage05} alt="slider-image" className='w-[120px] h-[120px]w-full rounded-full mb-4 px-15% item-center ' />
          <span className='slide_text group-hover:hidden'>Ice Cream Bar</span>
          <span className='text-center w-full text-base hidden group-hover:inline-block'>2 Products</span>
        </div>
      </SwiperSlide>
      
    </Swiper>
  </section>
  <section>
    <div className='flex gap-[10px] flex-wrap lg:flex-nowrap'>      
    <div className='w-full sm:w-[46%] lg:w-[33%] h-[550px] bg-[url(assets/product1.png)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white'>
        <small className='text-2xl'>Save 20%</small>
        <h3>Summer 2025</h3>
        <p className='text-center'>Smooth & Refreshing, intensely, Flavourful, 100% Dairy Free</p>
        <button className='btn headerbtn'>Shop Now<i className='ri-arrow-right-line'></i></button>
      </div>
      <div className='w-full sm:w-[46%] lg:w-[33%] h-[550px] bg-[url(assets/product2.png)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white'>
        <small>Save 20%</small>
        <h3>Summer 2025</h3>
        <p className='text-center'>Smooth & Refreshing, intensely, Flavourful, 100% Dairy Free</p>
        <button className='btn headerbtn'>Shop Now<i className='ri-arrow-right-line'></i></button>
      </div>

      <div className='w-full lg:w-[33%] h-[550px] flex flex-col gap-10'>
        <div className='h-[250px] w-full bg-[url(assets/product3.png)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white'>
        <h3 className='text-3xl'>Best Selling</h3>
        <p className='pt-20'>The 1# Best<br/>Selling Gelato</p>
        </div>
        
        <div className='h-[250px] w-full bg-[url(assets/product4.png)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white'>
          <h3 className='text-3xl'>Best Selling</h3>
          <p className='pt-20'>Smooth & Creamy<br/>texture, low in calorie</p>
        </div>
      </div>
    </div>

  </section>

  {/*popular flavour section */}
  <section id='popular'>
    <h3 className='section-header'>Popular Scoop Flavours</h3>
    <Swiper className='mt-20 w-full'

    slidesPerView={3}
    spaceBetween={30}
    breakpoints={{
      0:{
        slidesPerView:1.5,
      },
      768:{
        slidesPerView:2.5,
      },
      1024:{
        slidesPerView:3.5,
      }
    }}
    >
      <SwiperSlide>
        <div className='flex justify-center'>
        <div className='relative '> 
          <img src={slideImage06} alt="slide-image" className='w-full'/> 

          <div className='absolute top-2 right-2 flex flex-col gap-2 hidden'>        
            <i className='ri-heart-line icon-card'></i>
            <i className='ri-shuffle-line icon-card'></i>
            <i className='ri-eye-line icon-card'></i>
          </div>

        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className=''>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center'>Chocolate Fudge Browning</h2>
          <span>$7.50</span>

        </div>
        </div>
      </SwiperSlide>
    </Swiper>
  
  </section>

    </>
  )
}

export default Index