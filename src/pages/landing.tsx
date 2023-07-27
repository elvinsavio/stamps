import { config } from "../appConfig/appConfig";
import { LandingConfig } from "../appConfig/landingPage";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SplitSection from "../components/splitSection";

import "swiper/css";
import Button from "../components/ui/buttons";

export default function LandingPage() {
  return (
    <div className="">
      <SplitSection
        className="snap-none"
        style={{
          height: window.innerHeight - config.headerHeight + 10,
        }}
      >
        <div className="w-full sm:w-1/2">
          <SlideShow />
        </div>
        <div className="flex-col justify-around hidden w-full px-5 py-5 bg-primary/30 sm:py-0 sm:flex">
          <h1 className="text-xl">[logo here]</h1>
          <h1 className="text-[3rem] w-1 font-anvir">{LandingConfig?.landingText}</h1>

          <div className="flex justify-center w-full">
            <Button>Shop Now</Button>
          </div>
        </div>
      </SplitSection>

      <SplitSection
        className="justify-around snap-start"
        style={{
          minHeight: window.innerHeight,
        }}
      >
        <div className="w-full sm:w-1/2  flex flex-col justify-center p-[5%] ">
          <h1 className="text-5xl font-anvir w-fit">New Arrivals</h1>
          <h3 className="text-2xl text-black/75 font-anvir w-fit">Every Sunday</h3>
          <p className="text-sm text-black/75 w-full md:w-[300px]  py-10">{LandingConfig.newText}</p>
          <div className="flex justify-center sm:justify-start">
            <Button>Shop Now</Button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full sm:w-1/2 ">
          <div
            style={{
              backgroundImage: `url(${LandingConfig.newImage})`,
            }}
            className="h-[200px] sm:h-[260px] md:h-[360px] lg:h-[460px] aspect-square rounded shadow-lg flex bg-contain bg-no-repeat bg-center bg-slate-900"
          />
        </div>
      </SplitSection>
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
              className="relative h-full bg-cover"
              style={{
                backgroundImage: `url(${slide?.imgSrc})`,
                height: window.innerHeight - config.headerHeight + 10,
              }}
            >
              <div className="absolute w-full -translate-x-1/2 sm:bottom-10 px-14 bottom-1/2 font-mark left-1/2 text-primary">
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
