import { Box, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay,useDisclosure } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,Scrollbar, A11y } from 'swiper/modules';
import {} from '../cabinet/home';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
  const {isOpen,onClose,onOpen}= useDisclosure()

    return ( 
        <Box>
          <Box  w={'160%'} mt={'8%'} ml={'20%'} display={{base:'none',lg:'flex'}} alignItems={'start'} flexDir={'column'}>
            <Image 
            onClick={onOpen} 
            w={'37%'} 
            borderRadius={'10px'}
            cursor={'pointer'} 
            src="images/image-product-1.jpg"/>

            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
              <ModalContent p={0} m={0} bg={'transparent'}>
                <ModalCloseButton />
                <ModalBody p={0} mt={8} >
                  
                  <Image 
                    w={'100%'} 
                    borderRadius={'10px'}
                    cursor={'pointer'} 
                    src="images/image-product-1.jpg"/>
                </ModalBody>
              </ModalContent>
            </Modal>

            <Flex w={'37%'} alignItems={'start'} justifyContent={'space-between'} mt={4}>
              <Image w={'20%'} borderRadius={'10px'} src="images/image-product-1-thumbnail.jpg"/>
              <Image w={'20%'} borderRadius={'10px'} src="images/image-product-2-thumbnail.jpg"/>
              <Image w={'20%'} borderRadius={'10px'} src="images/image-product-3-thumbnail.jpg"/>
              <Image w={'20%'} borderRadius={'10px'} src="images/image-product-4-thumbnail.jpg"/>
            </Flex>
          </Box>
          <Box display={{lg:'none'}}>

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
        </Box>
     );
}
 
export default Carousel