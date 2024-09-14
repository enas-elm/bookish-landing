import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const menuItems = [
  {
    id: 1,
    label: "DÉCOUVREZ",
    description:
      "Rejoignez une communauté de passionnés qui partagent votre amour pour les livres. Restez connecté avec vos amis et découvrez leurs nouvelles aventures, tout en partageant les vôtres !",
    color: "#ba512b",
    imageUrl: "/decouvrez.svg",
    colorText: "#FFFFFF",
  },
  {
    id: 2,
    label: "DISCUTEZ",
    description:
      "Rejoignez des clubs ou partagez des messages avec d'autres fans de livres ou d'autres passionnés.",
    color: "#8EBDAF",
    imageUrl: "/discutez.svg",
    colorText: "#FFFFFF",
  },
  {
    id: 3,
    label: "PARTAGEZ",
    description:
      "Partagez vos listes de lecture avec une communauté de lecteurs tout aussi curieux que vous. Donnez votre avis sur les livres qui vous ont marqué ou déçu, et inspirez les autres à découvrir de nouvelles histoires.",
    color: "#FEDF6F",
    imageUrl: "/Screenshot-1.png",
    colorText: "#26272b",
  },
  {
    id: 4,
    label: "ORGANISEZ",
    description:
      "Organisez vos lectures en créant des listes personnalisées qui vous ressemblent. Rejoignez des clubs de lecture pour échanger et découvrir de nouveaux horizons littéraires avec d'autres passionnés.",
    color: "#55917E",
    imageUrl: "/Screenshot-2.png",
    colorText: "#FFFFFF",
    imageSize: "300px",
  },
];

function TimelineMenu() {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);
  const imageRef = useRef(null);

  const handleClick = (item) => {
    // Animation de transition de l'image (déplacement de droite à gauche)
    gsap.fromTo(
      imageRef.current,
      { x: 300, opacity: 0 }, // L'image commence à droite et est invisible
      { x: 0, opacity: 1, duration: 1 } // Elle se déplace à sa position d'origine avec une durée d'une seconde
    );
    setSelectedItem(item);
  };

  useEffect(() => {
    // Animation d'entrée initiale lorsque le composant est monté
    gsap.fromTo(
      imageRef.current,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <div id="time-line" className="container py-10 overflow-hidden sm:pt-24 md:pt-32 lg:gap-32 lg:py-40 lg:flex lg:flex-row lg:justify-between lg:items-center">
      {/* Menu Items */}
      <div className="grid grid-cols-2 grid-rows-2 gap-y-2 sm:gap-y-4 md:flex justify-between lg:flex-col items-start p-4 pb-8">
        {menuItems.map((item, index) => (

          <div key={item.id} className="flex flex-col items-center lg:items-start">
            {/* Timeline Item */}
            <div
              onClick={() => handleClick(item)}
              className={`group flex items-center cursor-pointer transition-colors lg:mb-6   ${selectedItem?.id === item.id ? "text-primary-100 " : "text-gray-variant-700"
                }`}>
              <div
                className={`hidden lg:block mr-4 w-4 h-4 rounded-full  transition-colors ${selectedItem?.id === item.id
                  ? "bg-primary-100 "
                  : "bg-gray-variant-60  group-hover:bg-primary-80"
                  }`}
              ></div>
              <span
                className={`transition-transform duration-300 text-xl sm:text-3xl font-inter ${selectedItem?.id === item.id
                  ? "lg:text-5xl font-extrabold "
                  : " text-gray-variant-60 lg:text-3xl group-hover:text-primary-80 "
                  }`}
              >
                {item.label}
              </span>
            </div>
            {/* Vertical Line */}
            {index < menuItems.length - 1 && (
              <div
                className="hidden lg:block h-10 bg-gray-variant-60 -mt-4 border-gray-variant-60 border-l-2 ml-2 transition-colors"></div>
            )}
          </div>

        ))}
        <a href="#form-section" className="hidden lg:block button-main-big  lg:mt-16">Devenir testeur</a>
      </div>

      {/* Details Section */}
      <div
        ref={imageRef}
        className=" flex flex-col p-6 sm:p-10 shadow-lg rounded-[36px]"
        style={{
          backgroundColor: selectedItem ? selectedItem.color : "#ffffff",
          color: selectedItem ? selectedItem.colorText : "#ffffff"
        }}
      >
        {selectedItem ? (
          <>
            <p className="block lg:hidden text-left w-fit font-inter text-sm px-6 rounded-full border border-black opacity-60 mb-2" style={{
              borderColor: selectedItem ? selectedItem.colorText : "#ffffff"
            }}>
              {selectedItem.label}
            </p>
            <p
              className="text-base text-left w-full lg:w-auto"
              style={{
                color: selectedItem ? selectedItem.colorText : "#ffffff",
              }}>
              {selectedItem.description}
            </p>
            <img
              // Référence pour l'animation de l'image
              src={selectedItem.imageUrl}
              alt={selectedItem.label}
              className="mt-9 h-72 mx-auto w-fit"
            />
          </>
        ) : (
          <p>Bonjour</p>
        )}
      </div>
      <a href="#form-section" className="block lg:hidden w-fit mx-auto button-main-big  p-4 mt-8">Devenir testeur</a>

    </div>
  );
}

export default TimelineMenu;
