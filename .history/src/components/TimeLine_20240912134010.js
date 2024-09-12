import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const menuItems = [
  {
    id: 1,
    label: "DECOUVERT",
    description:
      "Rejoignez une communauté de passionnés qui partagent votre amour pour les livres. Restez connecté avec vos amis et découvrez leurs nouvelles aventures, tout en partageant les vôtres !",
    color: "#FEDF6F",
    imageUrl: "/decouvrez.svg",
    colorText: "#1C471F",
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
    colorText: "#1C471F",
  },
  {
    id: 4,
    label: "ORGANISEZ",
    description:
      "Organisez vos lectures en créant des listes personnalisées qui vous ressemblent. Rejoignez des clubs de lecture pour échanger et découvrir de nouveaux horizons littéraires avec d'autres passionnés.",
    color: "#55917E",
    imageUrl: "/Screenshot-2.png",
    colorText: "#FFFFFF",
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
    <div className="p-40 overflow-hidden lg:flex lg:flex-row lg:justify-around lg:items-center">
      {/* Menu Items */}
      <div className="w-96 h-96 flex flex-col items-start p-4">
        {menuItems.map((item, index) => (
          <div key={item.id} className="flex flex-col items-start">
            {/* Timeline Item */}
            <div
              onClick={() => handleClick(item)}
              className={`flex items-center cursor-pointer transition-colors mb-4 ${
                selectedItem?.id === item.id ? "text-green " : "text-gray-700"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 mr-4 transition-colors ${
                  selectedItem?.id === item.id
                    ? "bg-green"
                    : "bg-gris border-gris"
                }`}
              ></div>
              <span
                className={`transition-transform duration-300 text-3xl ${
                  selectedItem?.id === item.id
                    ? "text-5xl font-bold "
                    : "text-base text-noirClair text-4xl"
                }`}
              >
                {item.label}
              </span>
            </div>
            {/* Vertical Line */}
            {index < menuItems.length - 1 && (
              <div
                className={`h-12 bg-gris -mt-4 border-gris border-l-2 ml-2 transition-colors ${
                  selectedItem?.id === item.id
                    ? "border-blue-500"
                    : "border-gray-400"
                }`}
              ></div>
            )}
          </div>
        ))}
        
      </div>

      {/* Details Section */}
      <div
        ref={imageRef}
        className="w-471 h-611 flex  flex-col justify-center items-center p-10 rounded-[43px]"
        style={{
          backgroundColor: selectedItem ? selectedItem.color : "#ffffff",
        }}
      >
        {selectedItem ? (
          <>
            <p
              className="text-xl text-left"
              style={{
                color: selectedItem ? selectedItem.colorText : "#ffffff",
              }}
            >
              {selectedItem.description}
            </p>
            <img
              // Référence pour l'animation de l'image
              src={selectedItem.imageUrl}
              alt={selectedItem.label}
              className="mt-4"
            />
          </>
        ) : (
          <p>Bonjour</p>
        )}
      </div>
    </div>
  );
}

export default TimelineMenu;
