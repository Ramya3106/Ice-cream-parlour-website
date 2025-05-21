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
import slideImage07 from './../../assets/decorate6.png'
import slideImage08 from './../../assets/decorate7.png'
import slideImage09 from './../../assets/decorate8.png'
import Avtar01 from './../../assets/Avatar1.png'
import Avtar02 from './../../assets/Avatar2.png'
import Avtar03 from './../../assets/Avatar3.png'
import Avtar04 from './../../assets/Avatar4.png'


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
    <h3 className='section-header pt-3'>Popular Scoop Flavours</h3>
    <Swiper className='mt-20 w-full '

    slidesPerView={3}
    spaceBetween={30}
    autoplay={
      {
        delay:1500
      }
    }
    loop={true}
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
    modules={[Autoplay]}
    >
      <SwiperSlide>
        <div className='relative'>
        <div className='w-full'> 
          <img src={slideImage06} alt="slide-image" className='w-[300px]'/> 

          <div className='absolute top-5 flex flex-col right-5 gap-2'>        
            <i className='ri-heart-line icon-card'></i>
            <i className='ri-shuffle-line icon-card'></i>
            <i className='ri-eye-line icon-card'></i>
          </div>

        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Chocolate Fudge Browning</h2>
          <span>$7.50</span>

        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative'>
        <div className='w-full'> 
          <img src={slideImage07} alt="slide-image" className='w-[300px]'/> 

          <div className='absolute top-5 flex flex-col right-5 gap-2'>        
            <i className='ri-heart-line icon-card'></i>
            <i className='ri-shuffle-line icon-card'></i>
            <i className='ri-eye-line icon-card'></i>
          </div>

        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Boom Balattl's Ice Cream</h2>
          <span>$15.50</span>

        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative'>
        <div className='w-full'> 
          <img src={slideImage08} alt="slide-image" className='w-[300px]'/> 

          <div className='absolute top-5 flex flex-col right-5 gap-2'>        
            <i className='ri-heart-line icon-card'></i>
            <i className='ri-shuffle-line icon-card'></i>
            <i className='ri-eye-line icon-card'></i>
          </div>

        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Peekaboo Ice Cream</h2>
          <span>$13.50</span>

        </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='relative'>
        <div className='w-full'> 
          <img src={slideImage09} alt="slide-image" className='w-[300px]'/> 

          <div className='absolute top-5 flex flex-col right-5 gap-2'>        
            <i className='ri-heart-line icon-card'></i>
            <i className='ri-shuffle-line icon-card'></i>
            <i className='ri-eye-line icon-card'></i>
          </div>

        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Beckon Fudge Ice Cream</h2>
          <span>$14.50</span>

        </div>
        </div>
      </SwiperSlide>

    </Swiper>
  
  </section>

  {/*Shop Section */}
  <section id='shop'>
    <h3 className='section-header'>Eat Ice Cream, Be Happy !</h3>

    {/*Grid Wrapper */}
    <div className='grid grid-cols-4 gap-6 px-4'>
      {/*Grid-Card */}
      <div className='w-full flex flex-col gap-2 relative card'>
        {/*Grid-image */}
      <div className='w-full'>
        <img src={slideImage06} alt="slide-image"  />
        <div className='absolute top-5 flex flex-col right-5 gap-2 hidden'>
          <i className='ri-heart-line icon-card'></i>
          <i className='ri-shuffle-line icon-card'></i>
          <i className='ri-eye-line icon-card'></i>
        </div>
      </div>
      {/*Grid-Content */}
      <div className='flex flex-col items-center gap-2'>
      <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Chocolate Fudge Browning</h2>
          <span>$7.50</span>
      </div>
      </div> 

       {/*Grid-Card */}
      <div className='w-full flex flex-col gap-2 relative card'>
        {/*Grid-image */}
      <div className='w-full'>
        <img src={slideImage06} alt="slide-image"  />
        <div className='absolute top-5 flex flex-col right-5 gap-2 hidden'>
          <i className='ri-heart-line icon-card'></i>
          <i className='ri-shuffle-line icon-card'></i>
          <i className='ri-eye-line icon-card'></i>
        </div>
      </div>
      {/*Grid-Content */}
      <div className='flex flex-col items-center gap-2'>
      <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Chocolate Fudge Browning</h2>
          <span>$7.50</span>
      </div> 
      </div>  

      {/*Grid-Card */}
      <div className='w-full flex flex-col gap-2 relative card'>
        {/*Grid-image */}
      <div className='w-full'>
        <img src={slideImage06} alt="slide-image"  />
        <div className='absolute top-5 flex flex-col right-5 gap-2 hidden'>
          <i className='ri-heart-line icon-card'></i>
          <i className='ri-shuffle-line icon-card'></i>
          <i className='ri-eye-line icon-card'></i>
        </div>
      </div>
      {/*Grid-Content */}
      <div className='flex flex-col items-center gap-2'>
      <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Chocolate Fudge Browning</h2>
          <span>$7.50</span>
      </div> 
      </div>  

      {/*Grid-Card */}
      <div className='w-full flex flex-col gap-2 relative card'>
        {/*Grid-image */}
      <div className='w-full'>
        <img src={slideImage06} alt="slide-image"  />
        <div className='absolute top-5 flex flex-col right-5 gap-2 hidden'>
          <i className='ri-heart-line icon-card'></i>
          <i className='ri-shuffle-line icon-card'></i>
          <i className='ri-eye-line icon-card'></i>
        </div>
      </div>
      {/*Grid-Content */}
      <div className='flex flex-col items-center gap-2'>
      <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Chocolate Fudge Browning</h2>
          <span>$7.50</span>
      </div> 
      </div>  

      {/*Grid-Card */}
      <div className='w-full flex flex-col gap-2 relative card'>
        {/*Grid-image */}
      <div className='w-full'>
        <img src={slideImage06} alt="slide-image"  />
        <div className='absolute top-5 flex flex-col right-5 gap-2 hidden'>
          <i className='ri-heart-line icon-card'></i>
          <i className='ri-shuffle-line icon-card'></i>
          <i className='ri-eye-line icon-card'></i>
        </div>
      </div>
      {/*Grid-Content */}
      <div className='flex flex-col items-center gap-2'>
      <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Chocolate Fudge Browning</h2>
          <span>$7.50</span>
      </div> 
      </div> 

      {/*Grid-Card */} 
      <div className='w-full flex flex-col gap-2 relative card'>
        {/*Grid-image */}
      <div className='w-full'>
        <img src={slideImage06} alt="slide-image"  />
        <div className='absolute top-5 flex flex-col right-5 gap-2 hidden'>
          <i className='ri-heart-line icon-card'></i>
          <i className='ri-shuffle-line icon-card'></i>
          <i className='ri-eye-line icon-card'></i>
        </div>
      </div>
      {/*Grid-Content */}
      <div className='flex flex-col items-center gap-2'>
      <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Chocolate Fudge Browning</h2>
          <span>$7.50</span>
      </div> 
      </div> 

      {/*Grid-Card */} 
      <div className='w-full flex flex-col gap-2 relative card'>
        {/*Grid-image */}
      <div className='w-full'>
        <img src={slideImage06} alt="slide-image"  />
        <div className='absolute top-5 flex flex-col right-5 gap-2 hidden'>
          <i className='ri-heart-line icon-card'></i>
          <i className='ri-shuffle-line icon-card'></i>
          <i className='ri-eye-line icon-card'></i>
        </div>
      </div>
      {/*Grid-Content */}
      <div className='flex flex-col items-center gap-2'>
      <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Chocolate Fudge Browning</h2>
          <span>$7.50</span>
      </div> 
      </div>  

      {/*Grid-Card */}
      <div className='w-full flex flex-col gap-2 relative card'>
      {/*Grid-image */}
      <div className='w-full'>
        <img src={slideImage06} alt="slide-image"  />
        <div className='absolute top-5 flex flex-col right-5 gap-2 hidden'>
          <i className='ri-heart-line icon-card'></i>
          <i className='ri-shuffle-line icon-card'></i>
          <i className='ri-eye-line icon-card'></i>
        </div>
      </div>
      {/*Grid-Content */}
      <div className='flex flex-col items-center gap-2'>
      <div className='absolute'>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-fill'></i>
            <i className='ri-star-line'></i>
          </div>
          <h2 className='text-lg font-bold text-rose-400 text-center pt-7'>Chocolate Fudge Browning</h2>
          <span>$7.50</span>
      </div> 
      </div>      
    </div>
  </section>


  <section>
    <div className=' flex justify-between flex-wrap gap-5 py-8'>
    <div className='flex items-center gap-4'>
      <h3 className='text-6xl font-bold text-rose-500'>1.5</h3>
      <p className='text-gray-400'>Milorn Liters</p><span className='text-2xl text-black font-semibold'>Produced Over</span>

    </div>
    <div className='flex items-center gap-4'>
    <h3 className='text-6xl font-semibold text-rose-500'>29</h3>
    <p className='text-gray-400'>Milorn Liters</p><span className='text-2xl text-black font-semibold'>Scoops Sold</span>
    </div>

    <div className='flex items-center gap-4'>
    <h3 className='text-6xl font-semibold text-rose-500'>20</h3>
    <p className='text-gray-400'>Years</p ><span className='text-2xl text-black font-semibold'>Our Experience</span>
    </div>

    </div>
    
  </section>

  <section className='bg-orange-100 py-4' id='testimonials'>
    <h3 className='section-header'>Happy Clients Say</h3>
    <Swiper className='w-full mt-[100px] mb-[100px]'
    slidesPerView={3}
    spaceBetween={20}
    autoplay={
      {
        delay:1500
      }
    }
    loop={true}
    breakpoints={{
      0:{
        slidesPerView:1.5
      },
      768:{
        slidesPerView:2.5
      },
      1024:{
        slidesPerView:3
      }
    }}
    modules={[Autoplay]}

    >
      <SwiperSlide>
        <div className='w-full card group p-8 bg-white'>
          <div className='flex items-start gap-3'>
          <img src={Avtar01} alt="avtar" className='w-[50px] rounded-full mb-4' />

          <div className='flex flex-col'>
            <div className=''>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-line'></i>
            </div>
            <span className='text-sm'>Sandra Farmar</span>
          </div>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatem.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='w-full card group p-8 bg-white'>
          <div className='flex items-start gap-3'>
          <img src={Avtar02} alt="avtar" className='w-[50px] rounded-full mb-4' />

          <div className='flex flex-col'>
            <div className=''>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-line'></i>
            </div>
            <span className='text-sm'>Leonardo</span>
          </div>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatem.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='w-full card group p-8 bg-white'>
          <div className='flex items-start gap-3'>
          <img src={Avtar03} alt="avtar" className='w-[50px] rounded-full mb-4' />

          <div className='flex flex-col'>
            <div className=''>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-line'></i>
            </div>
            <span className='text-sm'>Emelee</span>
          </div>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatem.</p>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='w-full card group p-8 bg-white'>
          <div className='flex items-start gap-3'>
          <img src={Avtar04} alt="avtar" className='w-[50px] rounded-full mb-4' />

          <div className='flex flex-col'>
            <div className=''>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-line'></i>
            </div>
            <span className='text-sm'>Victor</span>
          </div>

          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, voluptatem.</p>
        </div>
      </SwiperSlide>
    </Swiper>

  </section>

  <section className='bg-black text-white flex flex-col gap-5'>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-5 pb-9'>
      <div className='flex flex-col gap-2'>
        <span className='text-2xl text-red-600 font-bold cursor-pointer'>Ice Parlour</span>
      
      <div className='felx flex-col mt-4'>
        <span>Follow Us</span>   
        <p className='text-gray-500 hover:text-white'>Lorem ipsum dolor sit amet.</p>
        <div className='flex-gap-4 mt-4'>
          
        <i className='ri-facebook-line text-gray-500 hover:text-white cursor-pointer text-2xl'></i>
        <i className='ri-twitter-line text-gray-500 hover:text-white cursor-pointer text-2xl'></i>
        <i className='ri-youtube-line text-gray-500 hover:text-white cursor-pointer text-2xl'></i>
        <i className='ri-instagram-line text-gray-500 hover:text-white cursor-pointer text-2xl'></i>

        </div>
      </div>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl mb-5'>Usefull Links</h2>
        <p className='text-gray-500 hover:text-white cursor-pointer'>About</p>
        <p className='text-gray-500 hover:text-white cursor-pointer'>Service</p>
        <p className='text-gray-500 hover:text-white cursor-pointer'>Storage</p>
        <p className='text-gray-500 hover:text-white cursor-pointer'>Blog</p>
        <p className='text-gray-500 hover:text-white cursor-pointer'>Shop</p>
        <p className='text-gray-500 hover:text-white cursor-pointer'>About</p>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl'>Find Store</h2>
        <p className='text-gray-500 hover:text-white'>5606 e Speragge , Ave , Spokane</p>
        <p className='text-gray-500 hover:text-white'>Valliay , WA 998877 , USA</p>
        <h2 className='text-2xl'>Call Now</h2>
        <p className='text-gray-500 hover:text-white'>+12376868 476 567 354</p>
        <p className='text-gray-500 hover:text-white'>Support@IceParlour.com</p>
      </div>

      <div className='flex flex-col gap-2'>
        <h2 className='text-2xl'>Opening Hours</h2>
        <p className='text-gray-500 hover:text-white'>Monday - Sunday</p>
        <p className='text-gray-500 hover:text-white'>9:00 AM - 10:00 PM</p>
      </div>
    </div>
    <p className='text-center pt-8 border-t-1 border-gray-500'>@2025 Iceparlour . All Rights Reserved</p>
  </section>

    </>
  )
}

export default Index