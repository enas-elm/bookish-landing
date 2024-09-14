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
              className="img-scroll"
            />
          ))}
        </div>
        <span className="text-overlay left-[20%] text-on-img-scroll">
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
              className="img-scroll"
            />
          ))}
        </div>
        <span className="text-overlay left-[70%] text-on-img-scroll">
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
              className="img-scroll"
            />
          ))}
        </div>
        <span className="text-overlay left-[20%] text-on-img-scroll">
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
              className="img-scroll"
            />
          ))}
        </div>
        <span className="text-overlay left-[70%] text-on-img-scroll">
          passion
        </span>
      </div>
    </div>
  );
};

export default ImageScroll;
