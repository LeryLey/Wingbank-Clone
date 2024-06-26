import { useState } from "react";
import { slideShow } from "../constants";
import ContentInformation from "../components/ContentInformation";
import { contentInformation } from "../constants";
import { Link } from "react-router-dom";
import WingMobile from "/src/assets/mobile-wing-bank.png";
import AppStore from "/src/assets/app-store.png";
import PlayStore from "/src/assets/play-store.png";
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // btn prev
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? slideShow.length - 1 : currentIndex - 1
    );
  };
  // btn next
  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === slideShow.length - 1 ? 0 : currentIndex + 1
    );
  };
  return (
    <div className=" h-auto flex flex-col ">
      <div className="w-full h-[500px] group">
        {/* btn prev  */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute top-1/2 left-2 text-2xl text-white bg-black/30 active:bg-black/30 hover:bg-black/10 flex items-center rounded-full w-10 h-10 justify-center opacity-0 group-hover:opacity-100 duration-300 "
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <Link to={`${slideShow[currentIndex].path}`}>
          <div
            className={`w-full h-full duration-500 bg-center bg-cover`}
            style={{ background: `url(${slideShow[currentIndex].image})` }}
          ></div>
        </Link>
        <button
          type="button"
          onClick={nextSlide}
          className="absolute top-1/2 right-2 text-2xl text-white bg-black/30 hover:bg-black/10 active:bg-black/30 flex items-center rounded-full w-10 h-10 justify-center opacity-0 group-hover:opacity-100 duration-300 "
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
      <main className="my-2 flex flex-col items-center  w-full space-y-10  ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 p-4 pb-40">
          {contentInformation.map((element, index) => (
            <ContentInformation key={index} {...element} />
          ))}
        </div>
        <div className=" p-4 bg-blue w-full sm:h-[400px] md:h-[600px] flex  justify-center ">
          <div className="w-full lg:w-[60%] relative  flex sm:flex-row flex-col sm:justify-between justify-center items-center">
            <div className="sm:absolute relative left-0 -translate-y-20 sm:-translate-y-28">
              <img src={WingMobile} alt="wing-mobile" className=" w-60 lg:w-96 " />
            </div>
            <div></div>
            <div className="block space-y-4 sm:text-start text-center">
              <h2 className=" text-4xl md:text-6xl  text-white">Get the Wing <br /> Bank App Now!</h2>
              <p className="text-gray-300 w-96 text-base">
                You can download the Wing Bank App from the App Store or Google
                Play.
              </p>
              <div className="flex items-center">
                <Link>
                  <button>
                    <img src={PlayStore} alt="play-store" className="w-40" />
                  </button>
                </Link>
                <Link>
                  <button>
                    <img src={AppStore} alt="app-store" className="w-40" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
