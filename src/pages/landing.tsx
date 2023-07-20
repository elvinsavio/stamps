import { config } from "../appConfig/appConfig";
import { LandingConfig } from "../appConfig/landingPage";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function LandingPage() {
  return (
    <div className="">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2">
          <SlideShow />
        </div>
        <div className="bg-primary/30 w-full py-5 sm:py-0 px-5 sm:flex flex-col justify-around hidden">
          <h1 className="text-xl">[logo here]</h1>
          <h1 className="text-[3rem] w-1">{LandingConfig.heroText}</h1>

          <div className="w-full flex justify-center">
            <button className="bg-red-shade w-fit p-2 px-3">Shop Now</button>
          </div>
        </div>
      </div>
      hello world
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
              <div className="sm:bottom-10 px-14 bottom-1/2 font-mark absolute left-1/2 text-primary -translate-x-1/2 w-full">
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
