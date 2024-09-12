import React, { useState, useEffect } from "react";
import "../T";

const menuItems = [
  {
    id: 1,
    label: "DECOUVERT",
    description:
      "Rejoignez une communauté de passionnés qui partagent votre amour pour les livres. Restez connecté avec vos amis et découvrez leurs nouvelles aventures, tout en partageant les vôtres !",
    color: "#FEDF6F",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    label: "DISCUTEZ",
    description:
      "Rejoignez des clubs ou partagez des messages avec d'autres fans de livres ou d'autres passionnés.",
    color: "#8EBDAF",
    imageUrl: "https://via.placeholder.com/150/4682B4",
  },
  {
    id: 3,
    label: "PARTAGEZ",
    description:
      "Partagez vos listes de lecture avec une communauté de lecteurs tout aussi curieux que vous. Donnez votre avis sur les livres qui vous ont marqué ou déçu, et inspirez les autres à découvrir de nouvelles histoires.",
    color: "#FEDF6F",
    imageUrl: "https://via.placeholder.com/150/32CD32",
  },
  {
    id: 4,
    label: "ORGANISEZ",
    description:
      "Organisez vos lectures en créant des listes personnalisées qui vous ressemblent. Rejoignez des clubs de lecture pour échanger et découvrir de nouveaux horizons littéraires avec d'autres passionnés.",
    color: "#55917E",
    imageUrl: "https://via.placeholder.com/150/FFD700",
  },
];

function TimelineMenu() {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);
  const [direction, setDirection] = useState("forward");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleClick = (item) => {
    if (item.id !== selectedItem.id) {
      setDirection(item.id > selectedItem.id ? "forward" : "backward");
      setIsTransitioning(true); // Démarrer la transition
      setTimeout(() => {
        setSelectedItem(item); // Changer l'élément sélectionné après la transition
        setIsTransitioning(false); // Arrêter la transition
      }, 300); // Durée de la transition (en millisecondes)
    }
  };

  return (
    <div className="p-40 lg:flex lg:flex-row lg:justify-around lg:items-center">
      {/* Menu Items */}
      <div className="w-96 h-96 flex flex-col items-start p-4">
        {menuItems.map((item, index) => (
          <div key={item.id} className="flex flex-col items-start">
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

      {/* Details Section avec transition */}
      <div
        className={`w-471 h-611 flex flex-col justify-center items-center p-4 rounded-[43px] content-container ${
          isTransitioning ? direction : ""
        }`}
        style={{
          backgroundColor: selectedItem ? selectedItem.color : "#ffffff",
        }}
      >
        {!isTransitioning && (
          <>
            <p className="text-xl font-bold">{selectedItem.description}</p>
            <img
              src={selectedItem.imageUrl}
              alt={selectedItem.label}
              className="mt-4 image"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default TimelineMenu;
