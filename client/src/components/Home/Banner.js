import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Books } from "../../Data/BookData";

function Banner() {
  return (
    <div className="relative w-full">
      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full xl:h-96 lg:h-64 h-48"
      >
        {Books.slice(0, 4).map((book, index) => (
          <SwiperSlide key={index} className="realtive rounded overflow-hidden">
            <img
              src={`/imges/Books/${book.bigimg}`}
              alt={book.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute xl:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;
