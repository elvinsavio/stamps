import { config } from "../appConfig/appConfig";
import { LandingConfig } from "../appConfig/landingPage";

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function LandingPage() {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">
          <SlideShow />
        </div>
        <div className="">This is some face ass text</div>
      </div>
    </div>
  );
}

const SlideShow = () => {
  return (
    <Swiper
      className="mySwiper"
      autoplay={{
        delay: LandingConfig.slideDelay ?? 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {LandingConfig.slideShow.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="h-full bg-cover relative"
              style={{
                backgroundImage: `url(${slide?.imgSrc})`,
                height: window.innerHeight - config.headerHeight,
              }}
            >
              <div className="bottom-10 font-mark absolute left-1/2 text-brand-green -translate-x-1/2 w-full">
                <h1 className="text-3xl">{slide?.caption}</h1>
                <h2>{slide?.subCaption}</h2>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
