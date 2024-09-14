import React, { useRef } from "react";

const ImageScroll = () => {
  const scrollRef = useRef(null);

  const images = [
    "lady.png",
    "monsterStein.png",
    "ripe.png",
    "l'odysée.png",
    "trois-mousquetaires.png",
  ];

  const images2 = [
    "allMyFriendAreGhosts.png",
    "holly.png",
    "1984.png",
    "petit-prince.png",
    "voyages-extraordianaires.png",
  ];

  const images3 = [
    "sakamoto.png",
    "SunnyPlaceForShadyPeaple.png",
    "theSpeaker.png",
    "theThingWeDoTo.png",
    "womanLore.png",
  ];

  const images4 = [
    "asterix.png",
    "le-cid.png",
    "lotr.png",
    "op.png",
    "oliver-twist.png",
  ];

  const imagesList = [...images, ...images, ...images, ...images];
  const imagesList2 = [...images2, ...images2, ...images2, ...images2];
  const imagesList3 = [...images3, ...images3, ...images3, ...images3];
  const imagesList4 = [...images4, ...images4, ...images4, ...images4];

  return (
    <div className="flex flex-col relative mt-[50px] mb-[50px]">
      {/* Scroll Container Left */}
      <div className="scroll-container relative flex justify-center items-center w-full mb-5 overflow-hidden">
        <div className="scroll-wrapper flex whitespace-nowrap sm:h-auto h-[80px] animate-scrollLeft" ref={scrollRef}>
          {imagesList.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/${image}`}
              alt={`Scroll ${index}`}
              className="w-[120px] h-auto  lg:w-[120px] lg:mr-8 md:w-[100px] md:mr-6 sm:w-[60px] mr-3 sm:mr-8"
            />
          ))}
        </div>
        <span className="text-overlay absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-10 bg-pureWhite p-4 text-[3rem] lg:text-[9rem] md:text-[2rem] sm:text-[1.25rem] font-inter text-black-variant whitespace-nowrap">
          Unis
        </span>
      </div>

      {/* Scroll Container Right */}
      <div className="scroll-container relative flex justify-center items-center w-full mb-5 overflow-hidden">
        <div className="scroll-wrapper flex whitespace-nowrap sm:h-auto h-[80px] animate-scrollRight" ref={scrollRef}>
          {imagesList2.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/${image}`}
              alt={`Scroll ${index}`}
              className="w-[120px] h-auto mr-8 lg:w-[120px] lg:mr-8 md:w-[100px] md:mr-6 sm:w-[60px] mr-3 sm:mr-8"
            />
          ))}
        </div>
        <span className="text-overlay absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-10 bg-pureWhite p-4 text-[3rem] lg:text-[9rem] md:text-[2rem] sm:text-[1.25rem] font-inter text-black-variant whitespace-nowrap">
          par
        </span>
      </div>

      {/* Scroll Container Left */}
      <div className="scroll-container relative flex justify-center items-center w-full mb-5 overflow-hidden">
        <div className="scroll-wrapper flex whitespace-nowrap sm:h-auto h-[80px] animate-scrollLeft" ref={scrollRef}>
          {imagesList3.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/${image}`}
              alt={`Scroll ${index}`}
              className="w-[120px] h-auto mr-8 lg:w-[120px] lg:mr-8 md:w-[100px] md:mr-6 sm:w-[60px] mr-3 sm:mr-8"
            />
          ))}
        </div>
        <span className="text-overlay absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-10 bg-pureWhite p-4 text-[3rem] lg:text-[9rem] md:text-[2rem] sm:text-[1.25rem] font-inter text-black-variant whitespace-nowrap">
          la
        </span>
      </div>

      {/* Scroll Container Right */}
      <div className="scroll-container relative flex justify-center items-center w-full overflow-hidden">
        <div className="scroll-wrapper flex whitespace-nowrap sm:h-auto h-[80px] animate-scrollRight" ref={scrollRef}>
          {imagesList4.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/${image}`}
              alt={`Scroll ${index}`}
              className="w-[120px] h-auto lg:w-[120px] lg:mr-8 md:w-[100px] md:mr-6 sm:w-[60px] mr-3 sm:mr-8"
            />
          ))}
        </div>
        <span className="text-overlay absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-10 bg-pureWhite  p-4 text-[3rem] lg:text-[9rem] md:text-[2rem] sm:text-[1.25rem] font-inter text-black-variant whitespace-nowrap">
          passion
        </span>
      </div>
    </div>
  );
};

export default ImageScroll;
