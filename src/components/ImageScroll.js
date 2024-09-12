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
   "womanLore.png"
  ]

  const images4 = [
      "asterix.png",
      "le-cid.png",
      "lotr.png",
      "op.png",
      "oliver-twist.png"
  ];

  const imagesList = [...images, ...images, ...images, ...images];

  const imagesList2 = [...images2, ...images2, ...images2, ...images2];

  const imagesList3 = [...images3, ...images3, ...images3, ...images3];

  const imagesList4 = [...images4, ...images4, ...images4, ...images4];

  return (
    <div className="flex flex-col relative">
      <div className="scroll-container relative flex justify-center items-center w-full mb-5 overflow-hidden">
        <div className="scroll-wrapper flex whitespace-nowrap w-max animate-scrollLeft" ref={scrollRef}>
          {imagesList.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/${image}`}
              alt={`Scroll ${index}`}
              className="w-[120px] h-auto mr-8 z-[1]"
            />
          ))}
        </div>
        <span className="text-overlay absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white h-full flex justify-center items-center px-4 text-[150px] font-inter text-black whitespace-nowrap">
          Unis
        </span>
      </div>

      <div className="scroll-container relative flex justify-center items-center w-full mb-5 overflow-hidden">
        <div className="scroll-wrapper flex whitespace-nowrap w-max animate-scrollRight" ref={scrollRef}>
          {imagesList2.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/${image}`}
              alt={`Scroll ${index}`}
              className="w-[120px] h-auto mr-8 z-[1]"
            />
          ))}
        </div>
        <span className="text-overlay absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white h-full flex justify-center items-center px-4 text-[150px] font-inter text-black whitespace-nowrap">
          par
        </span>
      </div>

      <div className="scroll-container relative flex justify-center items-center w-full mb-5 overflow-hidden">
        <div className="scroll-wrapper flex whitespace-nowrap w-max animate-scrollLeft" ref={scrollRef}>
          {imagesList3.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/${image}`}
              alt={`Scroll ${index}`}
              className="w-[120px] h-auto mr-8 z-[1]"
            />
          ))}
        </div>
        <span className="text-overlay absolute top-1/2 left-[20%] transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white h-full flex justify-center items-center px-4 text-[150px] font-inter text-black whitespace-nowrap">
          la
        </span>
      </div>

      <div className="scroll-container relative flex justify-center items-center w-full overflow-hidden">
        <div className="scroll-wrapper flex whitespace-nowrap w-max animate-scrollRight" ref={scrollRef}>
          {imagesList4.map((image, index) => (
            <img
              key={index}
              src={`${process.env.PUBLIC_URL}/image/${image}`}
              alt={`Scroll ${index}`}
              className="w-[120px] h-auto mr-8 z-[1]"
            />
          ))}
        </div>
        <span className="text-overlay absolute top-1/2 left-[70%] transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white h-full flex justify-center items-center px-4 text-[150px] font-inter text-black whitespace-nowrap">
          passion
        </span>
      </div>
    </div>
  );
};

export default ImageScroll;
