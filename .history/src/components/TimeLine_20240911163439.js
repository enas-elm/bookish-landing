import React, { useState } from "react";

const menuItems = [
  { id: 1, label: "DECOUVERT" },
  { id: 2, label: "DISCUTEZ" },
  { id: 3, label: "PARTAGEZ" },
  { id: 4, label: "ORGANISEZ" },
];

function TimelineMenu() {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClick = (id) => {
    setSelectedItem(id);
  };

  return (
    <div className="flex flex-row justify-around items-center">
      <div className="flex flex-col items-start p-4">
        {menuItems.map((item, index) => (
          <div key={item.id} className="flex flex-col items-start">
            {/* Timeline Item */}
            <div
              onClick={() => handleClick(item.id)}
              className={`flex items-center cursor-pointer transition-colors mb-4 ${
                selectedItem === item.id ? "text-green " : "text-gray-700"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 mr-4 transition-colors ${
                  selectedItem === item.id ? "bg-green" : "bg-gris border-gris"
                }`}
              ></div>
              <span
                className={`transition-transform duration-300 text-3xl ${
                  selectedItem === item.id
                    ? "text-8xl font-bold "
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
                  selectedItem === item.id
                    ? "border-blue-500"
                    : "border-gray-400"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
      <div>
        <p>Bonjour</p>
      </div>
    </div>
  );
}

export default TimelineMenu;
