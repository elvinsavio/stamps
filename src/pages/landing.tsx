import { config } from "../appConfig/appConfig";
import { LandingConfig } from "../appConfig/landingPage";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import SplitSection from "../components/splitSection";

import "swiper/css";
import Button from "../components/ui/buttons";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className="">
      <div
        className="snap-none"
        style={{
          height: window.innerHeight - config.headerHeight + 10,
        }}
      >
        <div className="relative w-full h-full">
          <div className="absolute z-10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <h1 className="text-3xl text-center text-white sm:text-4xl font-mark">{LandingConfig?.landingText}</h1>
          </div>
          <SlideShow />
        </div>
        {/* <div className="flex-col justify-around hidden w-full px-5 py-5 bg-primary/30 sm:py-0 sm:flex">
          <h1 className="text-xl">[logo here]</h1>
          <h1 className="text-[3rem] w-1 font-anvir"></h1>

          <div className="flex justify-center w-full">
            <Button>Shop Now</Button>
          </div>
        </div> */}
      </div>

      <SplitSection
        className="flex-col-reverse justify-around snap-start sm:flex "
        style={{
          minHeight: window.innerHeight,
        }}
      >
        <div className="w-full sm:w-1/2  flex flex-col justify-center p-[5%] ">
          <h1 className="text-5xl font-anvir w-fit">New Arrivals</h1>
          <h3 className="text-2xl text-black/75 font-anvir w-fit">Every Sunday</h3>
          <p className="text-sm text-black/75 w-full md:w-[300px]  py-10">{LandingConfig.newText}</p>
          <div className="flex justify-center sm:justify-start">
            <Button onClick={() => navigate("/shop")}>Shop Now</Button>
          </div>
        </div>

        <div className="flex items-center justify-center w-full sm:w-1/2">
          <div
            style={{
              backgroundImage: `url(${LandingConfig.newImage})`,
            }}
            className="h-[200px] sm:h-[260px] md:h-[360px] lg:h-[460px] aspect-square shadow-lg flex bg-contain bg-no-repeat bg-center bg-slate-900"
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
      loop
    >
      {LandingConfig.slideShow.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="relative h-full bg-center bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${slide?.imgSrc})`,
                height: window.innerHeight - config.headerHeight + 10,
              }}
            />
            <div className="absolute w-full text-white -translate-x-1/2 bottom-10 px-14 font-mark left-1/2">
              <span className="text-xl sm:text-3xl">{slide?.caption}</span>
              <br/>
              <span className="text-sm sm:text-xl">{slide?.subCaption}</span> 
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
