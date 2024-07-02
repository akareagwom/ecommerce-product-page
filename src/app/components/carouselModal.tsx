import { Box,Image, Flex } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Scrollbar, A11y } from 'swiper/modules';
import {} from '../cabinet/home';
import {CarouselData} from '../data/carouselData';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarouselModal =()=>{

    
    return(
        <Box>
                <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            pagination={{
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span style="width:100px;" class="${className}"><img style="width:150px;border-radius:10px; display:flex; flex-direction:row; height:100px;" src="${CarouselData[index].thumbItem}" alt="Thumb ${index + 1}" /></span>`;
                },
              }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
              {CarouselData.map((item,index)=>(
                <SwiperSlide key={index}>
              <Image borderRadius={'10px'} w={'100%'} src={item.slideItem}/>
              </SwiperSlide>))}
            </Swiper>
              <Box w={'100%'} className="swiper-pagination" mt={4}></Box>
            <Flex alignItems={'center'}  pos={'relative'} bottom={'60'} justifyContent='space-between' mt={6}>
              <Image  w={9} left={'-4%'} h={9} bg={'white'} borderRadius={'50%'} p={2.5} className="swiper-button-prev" src="images/icon-previous.svg" />
              <Image  w={9} left={'95%'} h={9} bg={'white'} borderRadius={'50%'} p={2.5} className="swiper-button-next" src="images/icon-next.svg" />
            </Flex>
        </Box>
    )
}

export default CarouselModal;

