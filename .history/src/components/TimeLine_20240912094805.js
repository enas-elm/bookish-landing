import React, { useState } from "react";

const menuItems = [
  {
    id: 1,
    label: "DECOUVERT",
    description: "Explorez notre plateforme.",
    color: "#FEDF6F",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    label: "DISCUTEZ",
    description: "Discutez avec d'autres utilisateurs.",
    color: "#8EBDAF",
    imageUrl: "https://via.placeholder.com/150/4682B4",
  },
  {
    id: 3,
    label: "PARTAGEZ",
    description: "Partagez vos expériences.",
    color: "#FEDF6F", // vert lime
    imageUrl: "https://via.placeholder.com/150/32CD32",
  },
  {
    id: 4,
    label: "ORGANISEZ",
    description: "Organisez vos événements.",
    color: "#55917E", // or
    imageUrl: "https://via.placeholder.com/150/FFD700",
  },
];

function TimelineMenu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (item) => {
    setSelectedItem(item);
  };

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
        className="w-96 h-96 flex flex-col justify-center items-center p-4"
        style={{
          backgroundColor: selectedItem ? selectedItem.color : "#ffffff",
        }}
      >
        {selectedItem ? (
          <>
            <p className="text-xl font-bold">{selectedItem.description}</p>
            <img
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
