import { Box, Flex, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
    return ( 
        <Box>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            
    
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image w={'100%'} src="images/image-product-1.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
      <Image w={'100%'} src="images/image-product-2.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
      <Image w={'100%'} src="images/image-product-3.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
      <Image w={'100%'} src="images/image-product-4.jpg"/>
      </SwiperSlide>

    </Swiper>
    <Flex alignItems={'center'} pos={'relative'}  bottom={'60'} justifyContent='space-between' mt={6}>
      <Image  w={8} h={8} bg={'white'} borderRadius={'50%'} p={1} className="swiper-button-prev" src="images/icon-previous.svg" />
      <Image  w={8} h={8} bg={'white'} borderRadius={'50%'} p={1} className="swiper-button-next" src="images/icon-next.svg" />
    </Flex>
        </Box>
     );
}
 
export default Carousel