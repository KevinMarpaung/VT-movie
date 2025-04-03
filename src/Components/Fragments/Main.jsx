import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Navbar from "../Elements/Navbar";
const Main = () => {
  return (
    <>
      <Navbar />
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-linear-to-r from-red-500 to-blue-black">
            <div className="flex p-10">
              <img src="img/image 1.png" alt="" />
              <div className="mx-10">
                <h1 className="text-7xl">Movie Poster</h1>
                <p className="w-[70%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  facilisis ullamcorper egestas diam egestas sed placerat diam
                  commodo. Amet et nisl a nam eget vitae. Integer ac id sed
                  vulputate nunc amet. Nulla tincidunt sit odio amet porttitor.
                  At auctor
                </p>
                <button className="bg-yellow-300 p-2 rounded-md text-black mt-8">
                  Tonton Sekarang
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-linear-to-r from-red-500 to-blue-black">
            <div className="flex p-10">
              <img src="img/image 1.png" alt="" />
              <div className="mx-10">
                <h1 className="text-7xl">Movie Poster</h1>
                <p className="w-[70%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  facilisis ullamcorper egestas diam egestas sed placerat diam
                  commodo. Amet et nisl a nam eget vitae. Integer ac id sed
                  vulputate nunc amet. Nulla tincidunt sit odio amet porttitor.
                  At auctor
                </p>
                <button className="bg-yellow-300 p-2 rounded-md text-black mt-8">
                  Tonton Sekarang
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-linear-to-r from-red-500 to-blue-black">
            <div className="flex p-10">
              <img src="img/image 1.png" alt="" />
              <div className="mx-10">
                <h1 className="text-7xl">Movie Poster</h1>
                <p className="w-[70%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus
                  facilisis ullamcorper egestas diam egestas sed placerat diam
                  commodo. Amet et nisl a nam eget vitae. Integer ac id sed
                  vulputate nunc amet. Nulla tincidunt sit odio amet porttitor.
                  At auctor
                </p>
                <button className="bg-yellow-300 p-2 rounded-md text-black mt-8">
                  Tonton Sekarang
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Main;
