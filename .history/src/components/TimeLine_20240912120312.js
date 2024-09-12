import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const menuItems = [
  // ... vos données
];

function TimelineMenu() {
  const [selectedItem, setSelectedItem] = useState(menuItems[0]);
  const imageRef = useRef(null);
  const descriptionRef = useRef(null); // Référence pour le texte de la description

  const handleClick = (item) => {
    // Animation de transition de l'image
    gsap.fromTo(
      imageRef.current,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );

    // Animation de transition du texte
    gsap.fromTo(
      descriptionRef.current,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
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

    gsap.fromTo(
      descriptionRef.current,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <div className="p-40 lg:flex lg:flex-row lg:justify-around lg:items-center">
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
        className="w-471 h-611 flex flex-col justify-center items-center p-10 rounded-[43px]"
        style={{
          backgroundColor: selectedItem ? selectedItem.color : "#ffffff",
        }}
      >
        {selectedItem ? (
          <>
            <p
              ref={descriptionRef} // Référence pour l'animation du texte
              className="text-xl text-left"
              style={{
                color: selectedItem ? selectedItem.colorText : "#ffffff",
              }}
            >
              {selectedItem.description}
            </p>
            <img
              ref={imageRef} // Référence pour l'animation de l'image
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
