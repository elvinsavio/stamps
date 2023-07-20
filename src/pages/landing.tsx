import { config } from "../appConfig/appConfig";
import { LandingConfig } from "../appConfig/landingPage";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function LandingPage() {
  return (
    <div className="">
      <section className="flex">
        <div className="w-full sm:w-1/2">
          <SlideShow />
        </div>
        <div className="bg-primary/30 w-full py-5 sm:py-0 px-5 sm:flex flex-col justify-around hidden">
          <h1 className="text-xl">[logo here]</h1>
          <h1 className="text-[3rem] w-1 font-anvir">{LandingConfig?.landingText}</h1>

          <div className="w-full flex justify-center">
            <button className="bg-red-shade w-fit p-2 px-3">Shop Now</button>
          </div>
        </div>
      </section>

      <section
        className="flex flex-col sm:flex-row bg-pale h-fit snap-start "
      >
        <div className="w-full sm:w-1/2  flex flex-col justify-center p-[5%] ">
          <h1 className="text-5xl font-anvir w-fit">New Arrivals</h1>
          <h3 className="text-2xl text-black/75 font-anvir w-fit">Every Sunday</h3>
          <p className="text-sm text-black/75 w-full md:w-1/2  py-10">{LandingConfig.newText}</p>
          <button className="bg-red-shade w-fit p-2 px-3">Shop Now</button>
        </div>

        <div className="sm:flex justify-center items-center w-full sm:w-1/2 relative hidden my-20 min-h-[700px]">
          <img src="https://picsum.photos/550/700" className=""></img>
        </div>
      </section>
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
